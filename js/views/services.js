/**
 * services.js — Services view
 */

export function render() {
  const el = document.createElement('div');
  el.innerHTML = /* html */`

    <!-- Page Hero -->
    <section class="page-hero" aria-labelledby="services-hero-title">
      <div class="container">
        <p class="section-label">Our Services</p>
        <h1 class="section-title" id="services-hero-title">
          Complete Dental Care<br>Under One Roof
        </h1>
        <p>
          From preventive check-ups to complex smile transformations — our comprehensive range of
          services means your whole family can get expert care in one trusted place.
        </p>
      </div>
    </section>

    <!-- Service Filter Tabs -->
    <section class="section" aria-labelledby="all-services-title">
      <div class="container">
        <header class="section-header centered reveal">
          <p class="section-label">All Services</p>
          <h2 class="section-title" id="all-services-title">Explore What We Offer</h2>
        </header>

        <!-- Filter Tabs -->
        <div class="service-tabs" role="tablist" aria-label="Service categories" style="display:flex;gap:var(--space-3);flex-wrap:wrap;justify-content:center;margin-bottom:var(--space-10);">
          ${categories.map((c, i) => /* html */`
            <button
              class="service-tab${i === 0 ? ' active' : ''}"
              role="tab"
              aria-selected="${i === 0}"
              data-category="${c.id}"
              style="
                padding: var(--space-2) var(--space-5);
                border-radius: var(--radius-full);
                font-size: var(--text-sm);
                font-weight: 600;
                border: 2px solid ${i === 0 ? 'var(--clr-navy)' : 'var(--clr-grey-100)'};
                background: ${i === 0 ? 'var(--clr-navy)' : 'var(--clr-white)'};
                color: ${i === 0 ? 'var(--clr-white)' : 'var(--clr-grey-700)'};
                cursor: pointer;
                transition: all var(--duration-fast) var(--ease-out);
              "
            >${c.label}</button>
          `).join('')}
        </div>

        <!-- Services grid -->
        <div class="services-grid" id="services-list">
          ${allServices.map((s, i) => /* html */`
            <article
              class="service-card reveal stagger-${(i % 3) + 1}"
              data-category="${s.category}"
            >
              <div class="service-card-image" style="background: linear-gradient(135deg, ${s.grad[0]}, ${s.grad[1]});">
                <svg class="service-card-svg-bg" viewBox="0 0 400 225" aria-hidden="true">
                  <circle cx="360" cy="40"  r="130" fill="white"/>
                  <circle cx="20"  cy="200" r="80"  fill="white"/>
                </svg>
                <svg class="service-card-icon" viewBox="0 0 64 64" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  ${s.iconPath}
                </svg>
              </div>
              <div class="service-card-body">
                <p class="service-card-tag">${s.tag}</p>
                <h3>${s.name}</h3>
                <p>${s.desc}</p>
                ${s.list ? `<ul style="margin-top:var(--space-3);padding-left:var(--space-5);">
                  ${s.list.map(item => `<li style="font-size:var(--text-sm);color:var(--clr-grey-500);margin-bottom:var(--space-1);list-style:disc;">${item}</li>`).join('')}
                </ul>` : ''}
                <div class="service-card-footer">
                  <span class="service-card-price">${s.price}</span>
                  <a href="#/contact" class="service-card-link" data-route="contact">
                    Book now
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
      </div>
    </section>

    <!-- Technology Highlight -->
    <section class="section" style="background:var(--clr-offwhite);" aria-labelledby="tech-title">
      <div class="container">
        <header class="section-header centered reveal">
          <p class="section-label">Our Technology</p>
          <h2 class="section-title" id="tech-title">State-of-the-Art Equipment</h2>
          <p class="section-subtitle">
            We invest in the latest dental technology so you can experience faster, more comfortable,
            and more precise care.
          </p>
        </header>

        <div class="feature-grid">
          ${techItems.map((t, i) => /* html */`
            <div class="feature-card reveal stagger-${(i % 3) + 1}">
              <div class="feature-icon" aria-hidden="true">${t.icon}</div>
              <h3>${t.name}</h3>
              <p>${t.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Before / After Gallery -->
    <section class="section" aria-labelledby="gallery-title">
      <div class="container">
        <header class="section-header centered reveal">
          <p class="section-label">Results</p>
          <h2 class="section-title" id="gallery-title">Before &amp; After Gallery</h2>
          <p class="section-subtitle">
            Real results from real patients. Photos shared with consent.
          </p>
        </header>
        <div class="gallery-grid" id="gallery">
          ${galleryItems.map((g, i) => /* html */`
            <div class="gallery-item reveal stagger-${(i % 3) + 1}" tabindex="0" aria-label="${g.label}" role="img">
              <div class="dental-illustration" style="background: linear-gradient(135deg, ${g.grad[0]}, ${g.grad[1]});">
                ${g.svg}
              </div>
              <div class="gallery-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Insurance -->
    <section class="section" style="background:var(--clr-offwhite);" aria-labelledby="insurance-title">
      <div class="container" style="max-width:900px;">
        <header class="section-header centered reveal">
          <p class="section-label">Insurance &amp; Payment</p>
          <h2 class="section-title" id="insurance-title">We Make It Affordable</h2>
          <p class="section-subtitle">
            We accept most insurance plans and offer flexible in-house financing.
          </p>
        </header>

        <div class="feature-grid" style="margin-top:var(--space-8);">
          <div class="feature-card reveal">
            <div class="feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            </div>
            <h3>All Major Insurance</h3>
            <p>We are in-network with Delta Dental, Cigna, Aetna, MetLife, United Health, and Guardian. We also file out-of-network claims for you.</p>
          </div>
          <div class="feature-card reveal stagger-2">
            <div class="feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
            </div>
            <h3>0% Financing</h3>
            <p>Spread the cost of treatment with interest-free payment plans through CareCredit and Lending Club — applying takes just minutes.</p>
          </div>
          <div class="feature-card reveal stagger-3">
            <div class="feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>In-House Membership</h3>
            <p>No insurance? Our annual membership plan covers two cleanings, exams, and X-rays plus significant discounts on all other treatments.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-section" aria-labelledby="services-cta-title">
      <div class="container">
        <div class="cta-inner">
          <div class="cta-text reveal-left">
            <p class="section-label">Get Started</p>
            <h2 class="section-title" id="services-cta-title">Ready for Your Best Smile?</h2>
            <p class="section-subtitle" style="max-width:44ch;">
              Book a free consultation and let us create a personalised treatment plan just for you.
            </p>
          </div>
          <div class="cta-actions reveal-right">
            <a href="#/contact" class="btn btn-gold btn-lg" data-route="contact">Free Consultation</a>
            <a href="tel:+15551234567" class="btn btn-outline-white btn-lg">(555) 123-4567</a>
          </div>
        </div>
      </div>
    </section>
  `;
  return el;
}

/* ── Data ─────────────────────────────────────── */

const categories = [
  { id: 'all',         label: 'All Services' },
  { id: 'preventive', label: 'Preventive' },
  { id: 'cosmetic',   label: 'Cosmetic' },
  { id: 'restorative',label: 'Restorative' },
  { id: 'specialty',  label: 'Specialty' },
];

const allServices = [
  {
    name: 'Routine Cleanings & Exams',
    tag:  'Preventive',
    category: 'preventive',
    desc: 'Professional cleaning, comprehensive oral exam, oral cancer screening, and digital X-rays to keep your mouth healthy and catch problems early.',
    price: 'From $85',
    grad: ['#0d3b6e','#134e96'],
    iconPath: `<circle cx="32" cy="28" r="14"/><path d="M24 28 Q28 20 32 28 Q36 36 40 28"/><line x1="32" y1="42" x2="32" y2="54"/>`,
  },
  {
    name: 'Teeth Whitening',
    tag:  'Cosmetic',
    category: 'cosmetic',
    desc: 'In-office Zoom! whitening that brightens your smile up to 8 shades in one hour, or customised take-home trays for gradual results.',
    list: ['In-office (1-hour Zoom!)', 'Custom take-home trays', 'Maintenance kits available'],
    price: 'From $199',
    grad: ['#0e8a8a','#1aafaf'],
    iconPath: `<path d="M20 44 Q32 16 44 44" stroke-linecap="round"/><circle cx="32" cy="30" r="8" fill="rgba(255,255,255,.3)"/><line x1="28" y1="18" x2="30" y2="12"/><line x1="32" y1="16" x2="32" y2="10"/><line x1="36" y1="18" x2="38" y2="12"/>`,
  },
  {
    name: 'Porcelain Veneers',
    tag:  'Cosmetic',
    category: 'cosmetic',
    desc: 'Ultra-thin custom shells bonded to the front of teeth to correct shape, colour, and minor alignment issues. A total smile transformation.',
    price: 'From $900/tooth',
    grad: ['#1a5276','#2471a3'],
    iconPath: `<rect x="18" y="20" width="28" height="32" rx="6"/><line x1="18" y1="36" x2="46" y2="36" stroke-width="1.5"/><ellipse cx="32" cy="24" rx="10" ry="5" fill="rgba(255,255,255,.25)"/>`,
  },
  {
    name: 'Invisalign & Clear Aligners',
    tag:  'Orthodontics',
    category: 'specialty',
    desc: 'Straighten teeth discreetly with custom-made clear aligners. We are an Invisalign Preferred Provider with hundreds of successfully completed cases.',
    price: 'From $3,200',
    grad: ['#2c5282','#4a7fc1'],
    iconPath: `<rect x="14" y="22" width="36" height="20" rx="5"/><circle cx="22" cy="32" r="3" fill="rgba(255,255,255,.4)"/><circle cx="32" cy="32" r="3" fill="rgba(255,255,255,.4)"/><circle cx="42" cy="32" r="3" fill="rgba(255,255,255,.4)"/><line x1="14" y1="32" x2="50" y2="32" stroke-width="1.2"/>`,
  },
  {
    name: 'Dental Implants',
    tag:  'Restorative',
    category: 'restorative',
    desc: 'Permanent, natural-looking tooth replacements anchored into the jawbone. Single implants, bridges, and full-arch solutions available.',
    list: ['Single tooth implants', 'Implant-supported bridges', 'All-on-4 full arch'],
    price: 'From $1,500',
    grad: ['#0a6b5e','#14a68c'],
    iconPath: `<line x1="32" y1="10" x2="32" y2="54" stroke-linecap="round"/><rect x="20" y="18" width="24" height="10" rx="3"/><path d="M22 46 Q32 36 42 46"/>`,
  },
  {
    name: 'Same-Day CEREC Crowns',
    tag:  'Restorative',
    category: 'restorative',
    desc: 'Digital impressions and in-office milling mean your permanent ceramic crown is ready in a single appointment — no temporary crowns, no second visit.',
    price: 'From $1,100',
    grad: ['#5c3d99','#8258d0'],
    iconPath: `<path d="M20 20 L44 20 L48 40 L32 50 L16 40Z"/><line x1="20" y1="20" x2="16" y2="40"/><line x1="44" y1="20" x2="48" y2="40"/><ellipse cx="32" cy="22" rx="12" ry="4" fill="rgba(255,255,255,.25)"/>`,
  },
  {
    name: 'Root Canal Therapy',
    tag:  'Restorative',
    category: 'restorative',
    desc: 'Gentle, efficient root canal treatment to save infected or damaged teeth. Most patients are surprised at how comfortable the procedure actually is.',
    price: 'From $750',
    grad: ['#7b1a1a','#c0392b'],
    iconPath: `<path d="M24 14 Q32 10 40 14 Q46 22 44 32 L38 52 Q35 58 32 54 Q29 58 26 52 L20 32 Q18 22 24 14Z"/><line x1="32" y1="22" x2="32" y2="46" stroke-width="1.5"/>`,
  },
  {
    name: 'Pediatric Dentistry',
    tag:  'Specialty',
    category: 'specialty',
    desc: 'Caring for children\'s teeth from the first tooth through adolescence. Includes sealants, fluoride treatments, habit counselling, and gentle extractions.',
    price: 'From $60',
    grad: ['#0a4d3a','#1a8a6e'],
    iconPath: `<path d="M22 18 Q32 10 42 18 Q50 28 44 40 Q38 50 32 46 Q26 50 20 40 Q14 28 22 18Z"/><circle cx="32" cy="28" r="7" fill="none"/><path d="M26 34 Q32 40 38 34" stroke-linecap="round"/>`,
  },
  {
    name: 'Dental Bonding',
    tag:  'Cosmetic',
    category: 'cosmetic',
    desc: 'Tooth-coloured composite resin used to repair chips, cracks, gaps, and discolouration in a single appointment — no anaesthesia needed in most cases.',
    price: 'From $150/tooth',
    grad: ['#c87941','#e8a96a'],
    iconPath: `<circle cx="32" cy="32" r="18"/><path d="M24 26 Q32 20 40 26"/><line x1="28" y1="32" x2="36" y2="32"/><line x1="32" y1="28" x2="32" y2="36"/>`,
  },
  {
    name: 'Gum Disease Treatment',
    tag:  'Preventive',
    category: 'preventive',
    desc: 'Scaling and root planing, antibiotic therapy, and laser-assisted gum treatment to halt periodontal disease and restore gum health.',
    price: 'From $200/quadrant',
    grad: ['#1d5c3e','#2e9e6e'],
    iconPath: `<path d="M16 50 Q16 30 32 24 Q48 30 48 50"/><path d="M22 50 Q22 34 32 30 Q42 34 42 50" stroke-width="1.5"/><line x1="32" y1="24" x2="32" y2="18"/>`,
  },
  {
    name: 'Night Guards & Sports Guards',
    tag:  'Preventive',
    category: 'preventive',
    desc: 'Custom-fitted mouthguards to protect against bruxism (teeth grinding) and sports-related dental injuries.',
    price: 'From $280',
    grad: ['#2d3c6e','#4a5faf'],
    iconPath: `<path d="M14 28 Q14 20 32 20 Q50 20 50 28 L50 36 Q50 44 32 44 Q14 44 14 36Z"/><line x1="20" y1="32" x2="44" y2="32" stroke-width="1.5"/>`,
  },
  {
    name: 'Emergency Dental Care',
    tag:  'Emergency',
    category: 'specialty',
    desc: 'Severe toothache, broken tooth, knocked-out tooth, or lost filling? We offer same-day emergency appointments and after-hours triage.',
    price: 'Call for pricing',
    grad: ['#7b1a1a','#b71c1c'],
    iconPath: `<polygon points="32 10 54 50 10 50"/><line x1="32" y1="26" x2="32" y2="38"/><circle cx="32" cy="44" r="2" fill="white"/>`,
  },
];

const techItems = [
  {
    name: 'Digital X-Rays',
    desc: '90% less radiation than traditional film X-rays. Images are instant, high-resolution, and stored securely for easy comparison.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8M12 8v8"/></svg>`,
  },
  {
    name: '3D Cone Beam CT',
    desc: 'Three-dimensional imaging lets us plan implants, assess bone density, and diagnose complex issues with unmatched precision.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  },
  {
    name: 'CEREC Same-Day Crowns',
    desc: 'CAD/CAM technology allows us to design, mill, and place a perfect ceramic crown in a single visit — typically under 2 hours.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
  },
  {
    name: 'Laser Dentistry',
    desc: 'Soft-tissue laser for gum contouring, frenectomies, and treating gum disease — with minimal discomfort and faster healing.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  },
  {
    name: 'Intraoral Camera',
    desc: 'See exactly what we see with our high-definition intraoral camera. Real-time images help you understand your treatment clearly.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  },
  {
    name: 'Digital Impressions',
    desc: 'Comfortable iTero digital scanner eliminates messy traditional impressions. Accurate scans in minutes for crowns, aligners, and more.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>`,
  },
];

const galleryItems = [
  { label: 'Whitening before and after', grad: ['#1a3a6e','#2a5fbc'], svg: galleryPlaceholderSvg('Whitening', 'WT') },
  { label: 'Veneers transformation',     grad: ['#0e6b6b','#1aafaf'], svg: galleryPlaceholderSvg('Veneers', 'VN') },
  { label: 'Implant case',               grad: ['#2c5282','#4a7fc1'], svg: galleryPlaceholderSvg('Implants', 'IM') },
  { label: 'Orthodontics result',        grad: ['#5c3d99','#8258d0'], svg: galleryPlaceholderSvg('Braces', 'BR') },
  { label: 'Bonding case',               grad: ['#0a4d3a','#1a8a6e'], svg: galleryPlaceholderSvg('Bonding', 'BO') },
  { label: 'Full smile makeover',        grad: ['#6e3d1a','#c86a2a'], svg: galleryPlaceholderSvg('Makeover', 'SM') },
];

function galleryPlaceholderSvg(label, abbr) {
  return /* html */`
    <svg viewBox="0 0 280 210" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;" aria-hidden="true">
      <rect width="280" height="210" fill="rgba(255,255,255,.06)"/>
      <!-- Stylised tooth -->
      <path d="M140 50
        C 120 50, 100 62, 100 82
        C 100 96, 108 110, 112 124
        L 120 158 C 122 166 126 170 131 170
        L 138 170 L 138 148 L 142 148 L 142 170
        L 149 170 C 154 170 158 166 160 158
        L 168 124 C 172 110 180 96 180 82
        C 180 62 160 50 140 50Z"
        fill="rgba(255,255,255,.18)"
        stroke="rgba(255,255,255,.35)"
        stroke-width="2"/>
      <!-- Glow -->
      <ellipse cx="128" cy="72" rx="14" ry="22" fill="rgba(255,255,255,.1)" transform="rotate(-15 128 72)"/>
      <!-- Label -->
      <text x="140" y="196" fill="rgba(255,255,255,.5)" font-size="11" font-family="Inter,sans-serif"
            font-weight="600" text-anchor="middle" letter-spacing="2">${label.toUpperCase()}</text>
    </svg>
  `;
}
