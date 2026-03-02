/**
 * main.js — Application bootstrap
 *
 * Initialises the router, transition manager, WebGL shader,
 * scroll-reveal observer, navigation behaviour, and shared utilities.
 */

import { Router }            from './router.js';
import { TransitionManager } from './transitions.js';
import { HeroShader }        from './shader.js';
import * as HomeView         from './views/home.js';
import * as AboutView        from './views/about.js';
import * as ServicesView     from './views/services.js';
import * as ContactView      from './views/contact.js';

/* ── DOM references ─────────────────────────── */
const viewContainer = document.getElementById('view-container');
const siteHeader    = document.getElementById('site-header');
const navToggle     = document.getElementById('nav-toggle');
const navLinks      = document.getElementById('nav-links');
const footerYear    = document.getElementById('footer-year');

/* ── Set footer year ────────────────────────── */
if (footerYear) footerYear.textContent = new Date().getFullYear();

/* ── Transition manager ─────────────────────── */
const transitions = new TransitionManager(viewContainer);

/* ── Route definitions ──────────────────────── */
const routes = [
  { path: '/',         component: HomeView     },
  { path: '/about',    component: AboutView    },
  { path: '/services', component: ServicesView },
  { path: '/contact',  component: ContactView  },
];

/* ── Router ─────────────────────────────────── */
const router = new Router(routes);

router.onChange(async (route /*, path */) => {
  await transitions.transition(() => {
    const el = route.component.render();
    return el;
  });

  // Run page-specific setup after the view is in the DOM
  const path = window.location.hash.replace('#', '') || '/';
  setupView(path);
});

router.start();

/* ── Post-render setup ──────────────────────── */
function setupView(path) {
  // Always re-attach scroll-reveal
  initReveal();

  if (path === '/' || path === '') {
    initHeroShader();
    initHeroParticles();
    initCounters();
    initVideoSection();
  }

  if (path === '/about') {
    initAccordion('#about-faq');
  }

  if (path === '/services') {
    initServiceTabs();
  }

  if (path === '/contact') {
    initContactForm();
  }
}

/* ── WebGL Hero Shader ──────────────────────── */
function initHeroShader() {
  const canvas = document.getElementById('hero-title-canvas');
  if (!canvas) return;

  const shader = new HeroShader(canvas, 'Family Dental Care');
  if (shader.init()) {
    shader.start();
    // Stop when the element leaves the viewport to save resources
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting ? shader.start() : shader.stop());
    });
    obs.observe(canvas);
  } else {
    // WebGL not supported — fallback text
    const fallback = document.createElement('h1');
    fallback.textContent = 'Family Dental Care';
    fallback.style.cssText = `
      font-family: var(--font-serif);
      font-size: var(--text-5xl);
      font-weight: 700;
      color: var(--clr-white);
      text-shadow: 0 4px 24px rgba(0,0,0,.4);
      text-align: center;
      margin-inline: auto;
    `;
    canvas.replaceWith(fallback);
  }
}

/* ── Floating hero particles ────────────────── */
function initHeroParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;

  const count = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 18;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size  = Math.random() * 60 + 10;
    const left  = Math.random() * 100;
    const delay = Math.random() * 14;
    const dur   = Math.random() * 12 + 8;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      animation-duration: ${dur}s;
      animation-delay: -${delay}s;
    `;
    container.appendChild(p);
  }
}

/* ── Animated counters ──────────────────────── */
function initCounters() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    if (reduced) { el.textContent = target.toLocaleString() + (target === 99 ? '%' : '+'); return; }

    const duration = 1800;
    const start    = performance.now();
    const suffix   = target === 99 ? '%' : '+';

    const tick = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

/* ── Video play button ──────────────────────── */
function initVideoSection() {
  const btn = document.getElementById('video-play-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    // If a real video element is present and has a src, play it
    const vid = btn.closest('section')?.querySelector('video.video-bg');
    if (vid && vid.querySelector('source')?.getAttribute('src')) {
      vid.style.opacity = '0.6';
      vid.play().catch(() => {});
    } else {
      // Placeholder: show a simple lightbox message
      showToast('Video coming soon! Replace the <source> src in views/home.js with your video file.');
    }
  });
}

/* ── Scroll-reveal (Intersection Observer) ──── */
function initReveal() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });
}

/* ── Sticky header shadow on scroll ────────── */
window.addEventListener('scroll', () => {
  siteHeader.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Mobile navigation toggle ───────────────── */
navToggle.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!open));
  navLinks.classList.toggle('open', !open);
  document.body.style.overflow = open ? '' : 'hidden';
});

// Close menu on link click
navLinks.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    navToggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Close menu on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) {
    navToggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
    navToggle.focus();
  }
});

/* ── Accordion ──────────────────────────────── */
function initAccordion(selector) {
  const accordion = document.querySelector(selector);
  if (!accordion) return;

  accordion.addEventListener('click', e => {
    const trigger = e.target.closest('.accordion-trigger');
    if (!trigger) return;

    const item    = trigger.closest('.accordion-item');
    const isOpen  = item.classList.contains('open');

    // Close all
    accordion.querySelectorAll('.accordion-item.open').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
    });

    // Open clicked (if it was closed)
    if (!isOpen) {
      item.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
}

/* ── Service Tab Filtering ──────────────────── */
function initServiceTabs() {
  const tabList = document.querySelector('[role="tablist"]');
  const list    = document.getElementById('services-list');
  if (!tabList || !list) return;

  tabList.addEventListener('click', e => {
    const tab = e.target.closest('[role="tab"]');
    if (!tab) return;

    const category = tab.dataset.category;

    // Update tab styles
    tabList.querySelectorAll('[role="tab"]').forEach(t => {
      const active = t === tab;
      t.setAttribute('aria-selected', String(active));
      t.style.background    = active ? 'var(--clr-navy)' : 'var(--clr-white)';
      t.style.color         = active ? 'var(--clr-white)' : 'var(--clr-grey-700)';
      t.style.borderColor   = active ? 'var(--clr-navy)'  : 'var(--clr-grey-100)';
    });

    // Show/hide cards
    list.querySelectorAll('.service-card').forEach(card => {
      const match = category === 'all' || card.dataset.category === category;
      card.style.display = match ? '' : 'none';
    });
  });
}

/* ── Contact Form ───────────────────────────── */
function initContactForm() {
  const form    = document.getElementById('appointment-form');
  const success = document.getElementById('form-success');
  const error   = document.getElementById('form-error');
  const submit  = document.getElementById('submit-btn');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;

    submit.disabled  = true;
    submit.textContent = 'Sending…';

    // Simulate async submission (replace with real fetch to your backend/Formspree etc.)
    await new Promise(r => setTimeout(r, 1200));

    const fakeSuccess = true; // flip to false to test error state
    if (fakeSuccess) {
      form.reset();
      success.classList.add('show');
      error.classList.remove('show');
      submit.textContent = 'Sent!';
      // Scroll to message
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      error.classList.add('show');
      success.classList.remove('show');
      submit.disabled    = false;
      submit.textContent = 'Request Appointment';
    }
  });

  // Real-time validation on blur
  form.querySelectorAll('[required]').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.closest('.form-field').classList.contains('has-error')) {
        validateField(input);
      }
    });
  });
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(input => {
    if (!validateField(input)) valid = false;
  });
  if (!valid) {
    const firstError = form.querySelector('.has-error');
    if (firstError) firstError.querySelector('input, select, textarea')?.focus();
  }
  return valid;
}

function validateField(input) {
  const field  = input.closest('.form-field');
  if (!field) return true;

  let valid = true;
  if (input.type === 'checkbox') {
    valid = input.checked;
  } else if (input.type === 'email') {
    valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
  } else {
    valid = input.value.trim() !== '';
  }

  field.classList.toggle('has-error', !valid);
  input.classList.toggle('error', !valid);
  input.setAttribute('aria-invalid', String(!valid));
  return valid;
}

/* ── Toast utility ──────────────────────────── */
function showToast(msg) {
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed;
    bottom: var(--space-6);
    left: 50%;
    transform: translateX(-50%) translateY(120%);
    background: var(--clr-navy);
    color: white;
    padding: var(--space-4) var(--space-6);
    border-radius: var(--radius-full);
    font-size: var(--text-sm);
    font-weight: 500;
    box-shadow: var(--shadow-xl);
    z-index: 9999;
    max-width: 90vw;
    text-align: center;
    transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
  `;
  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(120%)';
    toast.addEventListener('transitionend', () => toast.remove());
  }, 4000);
}
