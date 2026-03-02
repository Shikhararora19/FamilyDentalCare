/**
 * home.js — Home view
 */

export function render() {
  const el = document.createElement('div');
  el.innerHTML = /* html */`

    <!-- ══ HERO ══ -->
    <section class="hero" aria-label="Hero">
      <canvas id="hero-canvas" aria-hidden="true"></canvas>

      <!-- Floating particles -->
      <div class="hero-particles" aria-hidden="true" id="hero-particles"></div>

      <div class="hero-content">
        <div class="hero-badge">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
          </svg>
          Trusted Family Dentistry Since 2005
        </div>

        <!-- 3D shader canvas title -->
        <canvas id="hero-title-canvas" role="img" aria-label="Family Dental Care"></canvas>

        <p class="hero-subtitle">
          Compassionate, state-of-the-art dental care for every member of your family.
          Your smile deserves the very best — and we deliver.
        </p>

        <div class="hero-actions">
          <a href="#/contact" class="btn btn-gold btn-lg" data-route="contact">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Book Appointment
          </a>
          <a href="#/services" class="btn btn-outline-white btn-lg" data-route="services">
            Explore Services
          </a>
        </div>
      </div>

      <div class="hero-scroll-cue" aria-hidden="true">
        <div class="hero-scroll-cue-arrow"></div>
        <span>Scroll</span>
      </div>

      <div class="hero-stats" aria-label="Practice statistics">
        <div class="hero-stat">
          <div class="hero-stat-number" data-count="4800">0</div>
          <div class="hero-stat-label">Happy Patients</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-number" data-count="18">0</div>
          <div class="hero-stat-label">Years of Service</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-number" data-count="12">0</div>
          <div class="hero-stat-label">Dental Specialists</div>
        </div>
        <div class="hero-stat">
          <div class="hero-stat-number" data-count="99">0</div>
          <div class="hero-stat-label">% Satisfaction</div>
        </div>
      </div>
    </section>

    <!-- ══ FEATURES ══ -->
    <section class="section" aria-labelledby="features-title">
      <div class="container">
        <header class="section-header centered reveal">
          <p class="section-label">Why Choose Us</p>
          <h2 class="section-title" id="features-title">Dentistry You Can Trust</h2>
          <p class="section-subtitle">
            We combine cutting-edge technology with genuine compassion to deliver dental care that
            goes beyond expectations.
          </p>
        </header>

        <div class="feature-grid">
          ${featureCards.map((f, i) => /* html */`
            <div class="feature-card reveal stagger-${i + 1}">
              <div class="feature-icon" aria-hidden="true">${f.icon}</div>
              <h3>${f.title}</h3>
              <p>${f.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ══ SERVICES PREVIEW ══ -->
    <section class="section" style="background:var(--clr-offwhite);" aria-labelledby="services-preview-title">
      <div class="container">
        <header class="section-header centered reveal">
          <p class="section-label">Our Services</p>
          <h2 class="section-title" id="services-preview-title">Comprehensive Dental Care</h2>
          <p class="section-subtitle">
            From routine check-ups to full smile transformations — everything your family needs under one roof.
          </p>
        </header>

        <div class="services-grid">
          ${servicesPreview.map((s, i) => /* html */`
            <article class="service-card reveal stagger-${(i % 3) + 1}">
              <div class="service-card-image" style="background: linear-gradient(135deg, ${s.grad[0]}, ${s.grad[1]});">
                <svg class="service-card-svg-bg" viewBox="0 0 400 225" aria-hidden="true">
                  <circle cx="350" cy="50" r="120" fill="white"/>
                  <circle cx="30"  cy="200" r="80"  fill="white"/>
                </svg>
                <svg class="service-card-icon" viewBox="0 0 64 64" fill="none" stroke="white" stroke-width="2.5" aria-hidden="true">
                  ${s.iconPath}
                </svg>
              </div>
              <div class="service-card-body">
                <p class="service-card-tag">${s.tag}</p>
                <h3>${s.name}</h3>
                <p>${s.desc}</p>
                <div class="service-card-footer">
                  <span class="service-card-price">${s.price}</span>
                  <a href="#/services" class="service-card-link" data-route="services">
                    Learn more
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          `).join('')}
        </div>

        <div class="text-center" style="margin-top:var(--space-10);">
          <a href="#/services" class="btn btn-primary btn-lg" data-route="services">View All Services</a>
        </div>
      </div>
    </section>

    <!-- ══ VIDEO SECTION ══ -->
    <section class="video-section section" aria-label="About our practice video">
      <video
        class="video-bg"
        autoplay muted loop playsinline
        aria-hidden="true"
        poster=""
      >
        <!--
          Replace the src below with your actual video file.
          Example: <source src="assets/videos/clinic-tour.mp4" type="video/mp4">
        -->
        <source src="" type="video/mp4">
      </video>
      <!-- Animated SVG used as visual background when no video src is provided -->
      <div class="video-bg" style="background:linear-gradient(135deg,#0a2a56 0%,#0d3b6e 50%,#0e8a8a 100%); opacity:.9; position:absolute; inset:0;" aria-hidden="true">
        ${dentalSvgBg()}
      </div>
      <div class="video-overlay" aria-hidden="true"></div>

      <div class="container">
        <div class="video-content reveal-left">
          <p class="section-label">Our Clinic</p>
          <h2 class="section-title" style="color:white; margin-bottom:var(--space-4);">
            A Modern Dental Experience
          </h2>
          <p class="section-subtitle">
            Step inside our state-of-the-art facility designed with your comfort in mind.
            From digital X-rays to same-day crowns — we're equipped with the latest technology.
          </p>
          <button class="video-play-btn" id="video-play-btn" aria-label="Watch clinic tour video">
            <span class="video-play-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </span>
            Watch Clinic Tour
          </button>
        </div>
      </div>
    </section>

    <!-- ══ PROCESS ══ -->
    <section class="section" aria-labelledby="process-title">
      <div class="container">
        <header class="section-header centered reveal">
          <p class="section-label">How It Works</p>
          <h2 class="section-title" id="process-title">Your Journey to a Perfect Smile</h2>
        </header>
        <div class="process-steps">
          ${processSteps.map((s, i) => /* html */`
            <div class="process-step reveal stagger-${i + 1}">
              <div class="step-number" aria-hidden="true">${i + 1}</div>
              <h3>${s.title}</h3>
              <p>${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ══ TESTIMONIALS ══ -->
    <section class="section testimonials-section" aria-labelledby="testimonials-title">
      <div class="container">
        <header class="section-header centered reveal">
          <p class="section-label">Patient Stories</p>
          <h2 class="section-title" id="testimonials-title">What Our Patients Say</h2>
        </header>

        <div class="testimonials-grid">
          ${testimonials.map((t, i) => /* html */`
            <blockquote class="testimonial-card reveal stagger-${(i % 3) + 1}">
              <span class="testimonial-quote-icon" aria-hidden="true">"</span>
              <div class="testimonial-stars" aria-label="5 out of 5 stars">
                ${Array(5).fill('<svg class="star" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.1 9.6H25l-8 5.8 3.1 9.6L12 21.1 3.9 27 7 17.4l-8-5.8H8.9z"/></svg>').join('')}
              </div>
              <p class="testimonial-text">${t.text}</p>
              <footer class="testimonial-author">
                <div class="testimonial-avatar" aria-hidden="true">${t.name[0]}</div>
                <div>
                  <cite class="testimonial-name">${t.name}</cite>
                  <div class="testimonial-date">${t.date}</div>
                </div>
              </footer>
            </blockquote>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ══ INSURANCE ══ -->
    <div class="insurance-bar">
      <div class="insurance-inner container">
        <span class="insurance-label">We Accept</span>
        <div class="insurance-logos">
          ${['Delta Dental', 'Cigna', 'Aetna', 'MetLife', 'United Health', 'Guardian'].map(n => `
            <span class="insurance-logo">${n}</span>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- ══ CTA ══ -->
    <section class="section cta-section" aria-labelledby="cta-title">
      <div class="container">
        <div class="cta-inner">
          <div class="cta-text reveal-left">
            <p class="section-label">Ready to Smile?</p>
            <h2 class="section-title" id="cta-title">Book Your Appointment Today</h2>
            <p class="section-subtitle" style="max-width:44ch;">
              New patients welcome. Same-day emergency appointments available.
              Call us or book online — it takes less than 2 minutes.
            </p>
          </div>
          <div class="cta-actions reveal-right">
            <a href="#/contact" class="btn btn-gold btn-lg" data-route="contact">
              Schedule Online
            </a>
            <a href="tel:+15551234567" class="btn btn-outline-white btn-lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 12.21 19.79 19.79 0 011.5 3.6 2 2 0 013.48 1.4h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 9.3a16 16 0 006.79 6.79l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.02z"/>
              </svg>
              (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
  return el;
}

/* ── Data ──────────────────────────────────────────────── */

const featureCards = [
  {
    title: 'Gentle Care',
    desc:  'Our entire team is trained in anxiety-free dentistry. We listen first — so every visit feels comfortable and reassuring.',
    icon:  `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
  },
  {
    title: 'Advanced Technology',
    desc:  'Digital X-rays, 3D cone-beam imaging, laser dentistry, and same-day CEREC crowns ensure faster, more precise treatment.',
    icon:  `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  },
  {
    title: 'Family Friendly',
    desc:  'From toddlers to grandparents — we provide age-appropriate dental care in a warm, welcoming environment.',
    icon:  `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
  },
  {
    title: 'Emergency Care',
    desc:  'Dental emergencies don\'t wait for Monday. We offer same-day emergency appointments and after-hours support.',
    icon:  `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  },
  {
    title: 'Transparent Pricing',
    desc:  'No surprises. We provide detailed treatment plans and cost estimates before any procedure begins.',
    icon:  `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
  },
  {
    title: 'Flexible Scheduling',
    desc:  'Early morning, evening, and weekend appointments available so dental care fits your busy life.',
    icon:  `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  },
];

const servicesPreview = [
  {
    name: 'General Dentistry',
    tag:  'Preventive',
    desc: 'Routine cleanings, exams, and X-rays to keep your smile healthy and catch problems early.',
    price: 'From $85',
    grad: ['#0d3b6e', '#134e96'],
    iconPath: `
      <circle cx="32" cy="20" r="10"/>
      <path d="M20 44 c0-8 8-12 12-12s12 4 12 12"/>
      <line x1="32" y1="30" x2="32" y2="50"/>
    `,
  },
  {
    name: 'Cosmetic Dentistry',
    tag:  'Aesthetic',
    desc: 'Teeth whitening, veneers, bonding, and smile makeovers for the confidence you deserve.',
    price: 'From $199',
    grad: ['#0e8a8a', '#1aafaf'],
    iconPath: `
      <path d="M16 48 Q32 20 48 48" stroke-linecap="round"/>
      <circle cx="22" cy="36" r="4" fill="white"/>
      <circle cx="32" cy="30" r="4" fill="white"/>
      <circle cx="42" cy="36" r="4" fill="white"/>
    `,
  },
  {
    name: 'Orthodontics',
    tag:  'Alignment',
    desc: 'Traditional braces and clear aligner therapy to straighten teeth at any age.',
    price: 'From $3,200',
    grad: ['#2c5282', '#4a7fc1'],
    iconPath: `
      <rect x="14" y="24" width="36" height="16" rx="4"/>
      <circle cx="22" cy="32" r="3" fill="white"/>
      <circle cx="32" cy="32" r="3" fill="white"/>
      <circle cx="42" cy="32" r="3" fill="white"/>
      <line x1="14" y1="32" x2="46" y2="32" stroke-width="1.5"/>
    `,
  },
  {
    name: 'Dental Implants',
    tag:  'Restorative',
    desc: 'Permanent tooth replacement that looks, feels, and functions just like natural teeth.',
    price: 'From $1,500',
    grad: ['#1a5276', '#2471a3'],
    iconPath: `
      <line x1="32" y1="12" x2="32" y2="52" stroke-linecap="round"/>
      <rect x="22" y="20" width="20" height="8" rx="2"/>
      <path d="M24 44 Q32 36 40 44"/>
    `,
  },
  {
    name: 'Pediatric Dentistry',
    tag:  'Children',
    desc: 'Gentle, fun, and educational dental care tailored for kids from their very first tooth.',
    price: 'From $60',
    grad: ['#0a6b5e', '#14a68c'],
    iconPath: `
      <path d="M20 18 Q32 10 44 18 Q50 28 44 38 Q38 48 32 44 Q26 48 20 38 Q14 28 20 18Z"/>
      <circle cx="32" cy="28" r="6" fill="none"/>
    `,
  },
  {
    name: 'Emergency Care',
    tag:  'Urgent',
    desc: 'Toothache? Broken tooth? We\'re here when you need us most — same-day appointments available.',
    price: 'Call Now',
    grad: ['#7b1a1a', '#c0392b'],
    iconPath: `
      <polygon points="32 10 54 50 10 50"/>
      <line x1="32" y1="28" x2="32" y2="38" stroke-linecap="round"/>
      <circle cx="32" cy="44" r="1.5" fill="white"/>
    `,
  },
];

const processSteps = [
  { title: 'Schedule Online',    desc: 'Book your appointment in minutes using our simple online form or give us a call.' },
  { title: 'New Patient Intake', desc: 'Complete your health history online before you arrive — no paperwork in the waiting room.' },
  { title: 'Comprehensive Exam', desc: 'Our dentist performs a thorough examination and discusses your goals and concerns.' },
  { title: 'Custom Treatment Plan', desc: 'We design a personalised treatment plan with clear pricing and timeline before we begin.' },
];

const testimonials = [
  {
    name: 'Sarah M.',
    date: 'March 2025',
    text: 'I have been coming here for 6 years and would not dream of going anywhere else. The team remembers everything about you and always makes you feel at home. My whitening results were absolutely stunning!',
  },
  {
    name: 'James T.',
    date: 'January 2025',
    text: 'After years of dental anxiety I finally found a practice where I feel safe. Dr. Sharma explained every step of my implant procedure and the result is truly life-changing. Worth every penny.',
  },
  {
    name: 'Linda K.',
    date: 'February 2025',
    text: 'My kids actually look forward to their dental appointments here! The staff are incredible with children — patient, funny, and so gentle. My 4-year-old begs to go back.',
  },
  {
    name: 'Marcus R.',
    date: 'December 2024',
    text: 'I chipped a tooth the night before a big presentation and they fit me in first thing the next morning. The repair was flawless. Absolutely exceptional emergency care!',
  },
  {
    name: 'Priya N.',
    date: 'November 2024',
    text: 'The Invisalign treatment was seamless from start to finish. Regular check-ins, great communication, and my smile looks better than I ever imagined it could.',
  },
  {
    name: 'David W.',
    date: 'October 2024',
    text: 'Been visiting every 6 months for 10 years now. Consistent, professional, and always up-to-date with the latest techniques. The digital X-rays are so much more comfortable than the old kind!',
  },
];

/* ── Animated SVG background ───────────────────────── */
function dentalSvgBg() {
  return /* html */`
    <svg viewBox="0 0 1200 540" xmlns="http://www.w3.org/2000/svg"
         style="width:100%;height:100%;position:absolute;inset:0;" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="rg1" cx="70%" cy="30%">
          <stop offset="0%"  stop-color="#1aafaf" stop-opacity=".18"/>
          <stop offset="100%" stop-color="#0d3b6e" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="rg2" cx="20%" cy="80%">
          <stop offset="0%"  stop-color="#c8a44a" stop-opacity=".15"/>
          <stop offset="100%" stop-color="#0d3b6e" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="540" fill="url(#rg1)"/>
      <rect width="1200" height="540" fill="url(#rg2)"/>
      <!-- Abstract dental shapes -->
      <g opacity=".12" fill="none" stroke="white" stroke-width="1.5">
        <path d="M900 80 Q980 40 1050 100 Q1100 160 1050 220 Q1000 280 940 240 Q880 200 900 80Z"/>
        <path d="M780 180 Q860 140 930 200 Q980 260 930 320 Q880 380 820 340 Q760 300 780 180Z"/>
        <circle cx="150" cy="300" r="120"/>
        <circle cx="200" cy="300" r="80"/>
        <circle cx="100" cy="200" r="60"/>
      </g>
      <!-- Tooth icon watermark -->
      <g transform="translate(1000,380)" opacity=".06" fill="white">
        <path d="M50 0 C30 0 0 20 0 50 C0 65 8 80 15 95 L25 130 C28 140 32 145 37 145L45 145L45 110L55 110L55 145L63 145 C68 145 72 140 75 130 L85 95 C92 80 100 65 100 50 C100 20 70 0 50 0Z"/>
      </g>
    </svg>
  `;
}
