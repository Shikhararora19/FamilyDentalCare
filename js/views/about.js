/**
 * about.js — About view
 */

export function render() {
  const el = document.createElement('div');
  el.innerHTML = /* html */`

    <!-- Page Hero -->
    <section class="page-hero" aria-labelledby="about-hero-title">
      <div class="container">
        <p class="section-label">About Us</p>
        <h1 class="section-title" id="about-hero-title">
          More Than a Dental Practice — <br>A Family Tradition
        </h1>
        <p>
          For nearly two decades, Family Dental Care has been the trusted dental home for thousands of
          families across the region. We believe great oral health is the foundation of a great life.
        </p>
        <br/>
      </div>
    </section>

    <!-- Mission Split -->
    <section class="section" aria-labelledby="mission-title">
      <div class="container">
        <div class="about-split">
          <div class="about-image-wrapper reveal-left">
            ${toothIllustration('#0d3b6e', '#0e8a8a')}
            <div class="about-image-badge">
              <div class="about-image-badge-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                </svg>
              </div>
              <div class="about-image-badge-text">
                <strong>Top Rated</strong>
                <span>4.9 ★ on Google (840+ reviews)</span>
              </div>
            </div>
          </div>
          <div class="about-content reveal-right">
            <p class="section-label">Our Mission</p>
            <h2 class="section-title" id="mission-title">
              Excellence, Empathy &amp; Every Smile
            </h2>
            <p>
              Founded in 2005 by Dr. Anika Sharma, Family Dental Care was built on a simple but
              powerful idea: every patient deserves the same quality of care that you would give your
              own family. That philosophy permeates everything we do — from the technology we invest
              in to the way our front desk answers the phone.
            </p>
            <p>
              Over the years we have grown into a multi-specialist practice, but we have never lost
              our personal touch. We know your name, your history, and what makes you nervous about
              the dentist — and we go out of our way to change that feeling.
            </p>
            <div class="about-values-list">
              ${missionValues.map(v => /* html */`
                <div class="about-value">
                  <div class="about-value-icon" aria-hidden="true">${v.icon}</div>
                  <div class="about-value-body">
                    <h4>${v.title}</h4>
                    <p>${v.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
            <a href="#/contact" class="btn btn-primary" data-route="contact">
              Meet the Team
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Dr. Profile -->
    <section class="section" style="background:var(--clr-offwhite);" aria-labelledby="doctor-title">
      <div class="container">
        <div class="about-split reverse">
          <div class="about-content reveal-left">
            <p class="section-label">Lead Dentist</p>
            <h2 class="section-title" id="doctor-title">
              Dr. Anika Sharma, DDS
            </h2>
            <p>
              Dr. Sharma received her Doctor of Dental Surgery degree from UCLA School of Dentistry,
              graduating with honours in 2003. She completed advanced training in cosmetic and
              implant dentistry at the Kois Center in Seattle before opening Family Dental Care.
            </p>
            <p>
              A sought-after speaker and educator, Dr. Sharma has lectured at regional dental
              conferences on anxiety-free treatment techniques. She is a Fellow of the Academy of
              General Dentistry and a member of the American Dental Association.
            </p>
            <p>
              Outside the clinic, Dr. Sharma volunteers with the Remote Area Medical clinic, bringing
              free dental care to underserved communities — because she believes a healthy smile
              should be accessible to everyone.
            </p>
            <div style="display:flex;gap:var(--space-4);margin-top:var(--space-6);flex-wrap:wrap;">
              <span class="badge badge-navy">DDS · UCLA 2003</span>
              <span class="badge badge-teal">AGD Fellow</span>
              <span class="badge badge-gold">ADA Member</span>
              <span class="badge badge-navy">Kois Center Graduate</span>
            </div>
          </div>
          <div class="about-image-wrapper reveal-right">
            ${doctorIllustration()}
            <div class="about-image-badge">
              <div class="about-image-badge-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div class="about-image-badge-text">
                <strong>20+ years experience</strong>
                <span>in family &amp; cosmetic dentistry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="section" aria-labelledby="team-title">
      <div class="container">
        <header class="section-header centered reveal">
          <p class="section-label">Our People</p>
          <h2 class="section-title" id="team-title">Meet the Team</h2>
          <p class="section-subtitle">
            Passionate professionals dedicated to making your visit exceptional from start to finish.
          </p>
        </header>
        <div class="team-grid">
          ${teamMembers.map((m, i) => /* html */`
            <div class="team-card reveal stagger-${(i % 4) + 1}">
              <div class="team-card-avatar" aria-label="${m.name}" style="background: linear-gradient(135deg, ${m.grad[0]}, ${m.grad[1]});">
                ${m.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div class="team-card-body">
                <h3 class="team-card-name">${m.name}</h3>
                <p class="team-card-role">${m.role}</p>
                <p class="team-card-bio">${m.bio}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section" style="background:var(--clr-offwhite);" aria-labelledby="faq-title">
      <div class="container" style="max-width:800px;">
        <header class="section-header centered reveal">
          <p class="section-label">FAQs</p>
          <h2 class="section-title" id="faq-title">Common Questions</h2>
        </header>
        <div class="accordion" id="about-faq">
          ${faqs.map((f, i) => /* html */`
            <div class="accordion-item" data-index="${i}">
              <button class="accordion-trigger" aria-expanded="false" aria-controls="faq-body-${i}">
                ${f.q}
                <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div class="accordion-body" id="faq-body-${i}" role="region">
                <div class="accordion-body-inner">${f.a}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-section" aria-labelledby="about-cta-title">
      <div class="container">
        <div class="cta-inner">
          <div class="cta-text reveal-left">
            <p class="section-label">Join Our Family</p>
            <h2 class="section-title" id="about-cta-title">New Patients Are Always Welcome</h2>
            <p class="section-subtitle" style="max-width:44ch;">
              Experience the Family Dental Care difference for yourself.
              We accept most insurance plans and offer flexible payment options.
            </p>
          </div>
          <div class="cta-actions reveal-right">
            <a href="#/contact" class="btn btn-gold btn-lg" data-route="contact">Book Your First Visit</a>
            <a href="tel:+15551234567" class="btn btn-outline-white btn-lg">(555) 123-4567</a>
          </div>
        </div>
      </div>
    </section>
  `;
  return el;
}

/* ── Data ─────────────────────────────────────── */

const missionValues = [
  {
    title: 'Patient-First Approach',
    desc:  'We listen before we treat. Understanding your unique needs and concerns guides every recommendation.',
    icon:  `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
  },
  {
    title: 'Continuing Education',
    desc:  'Our team completes 60+ hours of continuing education every year to stay at the forefront of dental science.',
    icon:  `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>`,
  },
  {
    title: 'Community Commitment',
    desc:  'We sponsor local school programs, volunteer with RAMcare clinics, and run free smile days every year.',
    icon:  `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
  },
];

const teamMembers = [
  { name: 'Dr. Anika Sharma',  role: 'Lead Dentist & Founder',         bio: 'DDS, Fellow AGD. 20+ years in family and cosmetic dentistry.', grad: ['#0d3b6e','#134e96'] },
  { name: 'Dr. Carlos Rivera', role: 'Orthodontist',                    bio: 'Specialises in Invisalign and braces for teens and adults.', grad: ['#0e8a8a','#1aafaf'] },
  { name: 'Dr. Mei-Lin Park',  role: 'Pediatric Dentist',               bio: 'Board-certified specialist dedicated to children\'s oral health.',  grad: ['#2c5282','#4a7fc1'] },
  { name: 'Dr. James Okafor',  role: 'Oral Surgeon',                    bio: 'Expert in implants, extractions, and bone grafting procedures.', grad: ['#1a5276','#2471a3'] },
  { name: 'Carla Matos',       role: 'Dental Hygienist',                bio: '15 years experience. Patients describe her cleanings as painless.', grad: ['#14a68c','#1dcf9f'] },
  { name: 'Ben Huang',         role: 'Dental Technician',               bio: 'Crafts custom crowns, veneers, and implant restorations in-house.', grad: ['#5c3d99','#8258d0'] },
  { name: 'Sofia Reyes',       role: 'Patient Coordinator',             bio: 'Handles scheduling, insurance, and makes every visit seamless.', grad: ['#c8a44a','#e2c170'] },
  { name: 'Ethan Brooks',      role: 'Dental Assistant',                bio: 'Certified DA with a passion for patient comfort and education.', grad: ['#7b1a1a','#c0392b'] },
];

const faqs = [
  { q: 'Are you accepting new patients?',      a: 'Absolutely! We warmly welcome new patients of all ages. You can book online or call our office. We also accept walk-ins when schedule permits.' },
  { q: 'What insurance plans do you accept?',   a: 'We accept most major PPO plans including Delta Dental, Cigna, Aetna, MetLife, United Health, and Guardian. We are also happy to work with out-of-network benefits and can provide superbills.' },
  { q: 'Do you offer payment plans?',           a: 'Yes. We offer 0% financing through CareCredit and Lending Club Patient Solutions. We also have our own in-house membership plan for patients without insurance.' },
  { q: 'What should I expect on my first visit?', a: 'Your first visit typically includes a comprehensive exam, digital X-rays, an oral cancer screening, a hygiene consultation, and time to discuss your goals. Plan for about 90 minutes.' },
  { q: 'Is the practice accessible?',           a: 'Our office is fully ADA-compliant with wheelchair access, accessible restrooms, and ample parking. Please let us know in advance if you require any special accommodations.' },
];

/* ── SVG Illustrations ────────────────────────── */

function toothIllustration(grad1, grad2) {
  return /* html */`
    <div class="about-image-main" style="background: linear-gradient(150deg, ${grad1}, ${grad2});" aria-hidden="true">
      <svg viewBox="0 0 300 380" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:70%;max-width:260px;">
        <defs>
          <linearGradient id="tg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="rgba(255,255,255,.9)"/>
            <stop offset="100%" stop-color="rgba(255,255,255,.55)"/>
          </linearGradient>
        </defs>
        <!-- Large tooth shape -->
        <path d="M150 20
          C 100 20, 40 60, 40 120
          C 40 160, 60 200, 70 240
          L 90 330 C 93 345 100 355 110 355
          L 130 355 L 130 280 L 170 280 L 170 355
          L 190 355 C 200 355 207 345 210 330
          L 230 240 C 240 200 260 160 260 120
          C 260 60 200 20 150 20Z"
          fill="url(#tg1)" stroke="rgba(255,255,255,.4)" stroke-width="2"/>
        <!-- Gloss highlight -->
        <ellipse cx="120" cy="80" rx="28" ry="40" fill="rgba(255,255,255,.25)" transform="rotate(-20 120 80)"/>
        <!-- Cross detail -->
        <line x1="150" y1="110" x2="150" y2="200" stroke="rgba(255,255,255,.2)" stroke-width="2"/>
        <line x1="100" y1="155" x2="200" y2="155" stroke="rgba(255,255,255,.2)" stroke-width="2"/>
        <!-- Sparkle dots -->
        <circle cx="240" cy="60" r="5" fill="rgba(200,164,74,.8)"/>
        <circle cx="260" cy="85" r="3" fill="rgba(200,164,74,.5)"/>
        <circle cx="50"  cy="90" r="4" fill="rgba(200,164,74,.6)"/>
      </svg>
    </div>
  `;
}

function doctorIllustration() {
  return /* html */`
    <div class="about-image-main" style="background: linear-gradient(150deg, #0e6b6b, #1aafaf);" aria-hidden="true">
      <svg viewBox="0 0 300 380" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:70%;max-width:260px;">
        <defs>
          <linearGradient id="dg1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="rgba(255,255,255,.85)"/>
            <stop offset="100%" stop-color="rgba(255,255,255,.55)"/>
          </linearGradient>
        </defs>
        <!-- Doctor silhouette -->
        <!-- Head -->
        <ellipse cx="150" cy="90" rx="55" ry="62" fill="url(#dg1)"/>
        <!-- Coat body -->
        <path d="M60 210 L95 175 Q150 155 205 175 L240 210 L250 380 L50 380Z" fill="rgba(255,255,255,.75)"/>
        <!-- Collar / scrubs detail -->
        <path d="M115 175 L150 210 L185 175" stroke="rgba(14,138,138,.6)" stroke-width="3" fill="none"/>
        <!-- Stethoscope -->
        <path d="M100 220 Q80 260 90 290 Q100 320 120 310 Q140 300 135 280" stroke="rgba(14,138,138,.8)" stroke-width="4" fill="none" stroke-linecap="round"/>
        <circle cx="135" cy="280" r="10" fill="rgba(14,138,138,.6)"/>
        <!-- Pocket / badge -->
        <rect x="190" y="220" width="40" height="25" rx="4" fill="rgba(200,164,74,.4)"/>
        <line x1="195" y1="232" x2="225" y2="232" stroke="rgba(255,255,255,.6)" stroke-width="2"/>
        <!-- Hair -->
        <path d="M95 68 Q150 30 205 68 Q220 80 215 60 Q180 20 150 18 Q120 16 85 60 Q80 80 95 68Z" fill="rgba(13,59,110,.3)"/>
        <!-- Gold star accent -->
        <path d="M255 40 L258 50 L268 50 L260 56 L263 66 L255 60 L247 66 L250 56 L242 50 L252 50Z" fill="rgba(200,164,74,.7)"/>
      </svg>
    </div>
  `;
}
