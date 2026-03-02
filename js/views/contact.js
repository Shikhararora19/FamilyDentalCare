/**
 * contact.js — Contact view
 */

export function render() {
  const el = document.createElement('div');
  el.innerHTML = /* html */`

    <!-- Page Hero -->
    <section class="page-hero" aria-labelledby="contact-hero-title">
      <div class="container">
        <p class="section-label">Get in Touch</p>
        <h1 class="section-title" id="contact-hero-title">
          We'd Love to Hear From You
        </h1>
        <p>
          Book an appointment, ask a question, or share feedback.
          Our friendly team typically responds within 2 business hours.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section" aria-label="Contact information and form">
      <div class="container">
        <div class="contact-grid">

          <!-- Left: Office Info -->
          <aside aria-label="Office information">
            <h2 style="font-family:var(--font-serif);font-size:var(--text-2xl);font-weight:700;color:var(--clr-navy);margin-bottom:var(--space-4);">
              Visit Our Office
            </h2>
            <p style="color:var(--clr-grey-500);font-size:var(--text-base);line-height:1.75;margin-bottom:var(--space-8);">
              We are conveniently located in downtown Healthtown with plenty of free parking.
              Wheelchair accessible entrance on Pine Street.
            </p>

            <div class="contact-details reveal-left">
              <div class="contact-detail">
                <div class="contact-detail-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div class="contact-detail-body">
                  <strong>Address</strong>
                  <span>123 Smile Avenue, Suite 200<br>Healthtown, CA 90210</span>
                </div>
              </div>

              <div class="contact-detail">
                <div class="contact-detail-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 12.21 19.79 19.79 0 011.5 3.6 2 2 0 013.48 1.4h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9.3a16 16 0 006.79 6.79l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7 2 2 0 011.71 2.02z"/>
                  </svg>
                </div>
                <div class="contact-detail-body">
                  <strong>Phone</strong>
                  <span><a href="tel:+15551234567" style="color:var(--clr-teal);">(555) 123-4567</a></span>
                </div>
              </div>

              <div class="contact-detail">
                <div class="contact-detail-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div class="contact-detail-body">
                  <strong>Email</strong>
                  <span><a href="mailto:hello@familydentalcare.com" style="color:var(--clr-teal);">hello@familydentalcare.com</a></span>
                </div>
              </div>

              <div class="contact-detail">
                <div class="contact-detail-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div class="contact-detail-body">
                  <strong>Emergency Line</strong>
                  <span><a href="tel:+15559876543" style="color:var(--clr-danger);">(555) 987-6543</a> (after hours)</span>
                </div>
              </div>
            </div>

            <!-- Office Hours -->
            <div style="margin-top:var(--space-8);" class="reveal-left">
              <h3 style="font-size:var(--text-base);font-weight:700;color:var(--clr-navy);margin-bottom:var(--space-4);">Office Hours</h3>
              <table class="hours-table" aria-label="Office hours">
                <tbody>
                  <tr><td>Monday – Friday</td><td>8:00 AM – 6:00 PM</td></tr>
                  <tr><td>Saturday</td><td>9:00 AM – 3:00 PM</td></tr>
                  <tr><td>Sunday</td><td>Closed</td></tr>
                  <tr><td>Holidays</td><td>Emergency only</td></tr>
                </tbody>
              </table>
            </div>

            <!-- Map Placeholder -->
            <div class="map-placeholder reveal-left" aria-label="Map location placeholder" role="img">
              ${mapSvg()}
              <div class="map-placeholder-content" style="position:absolute;bottom:var(--space-4);left:50%;transform:translateX(-50%);white-space:nowrap;">
                <p style="font-size:var(--text-xs);color:rgba(255,255,255,.6);">123 Smile Avenue, Suite 200</p>
              </div>
            </div>
          </aside>

          <!-- Right: Appointment Form -->
          <div class="contact-form-card reveal-right" role="region" aria-labelledby="form-title">
            <h2 id="form-title" style="font-family:var(--font-serif);font-size:var(--text-2xl);font-weight:700;color:var(--clr-navy);margin-bottom:var(--space-2);">
              Book an Appointment
            </h2>
            <p style="font-size:var(--text-sm);color:var(--clr-grey-500);margin-bottom:var(--space-8);">
              Fill in the form and we will contact you within 2 business hours to confirm your appointment.
            </p>

            <form id="appointment-form" novalidate aria-label="Appointment booking form">
              <div class="form-grid">

                <!-- First Name -->
                <div class="form-field" id="field-firstname">
                  <label class="form-label" for="firstname">
                    First Name <span class="required" aria-hidden="true">*</span>
                  </label>
                  <input
                    class="form-input"
                    type="text"
                    id="firstname"
                    name="firstname"
                    autocomplete="given-name"
                    required
                    aria-required="true"
                    aria-describedby="firstname-error"
                    placeholder="Jane"
                  />
                  <span class="form-error" id="firstname-error" role="alert">Please enter your first name.</span>
                </div>

                <!-- Last Name -->
                <div class="form-field" id="field-lastname">
                  <label class="form-label" for="lastname">
                    Last Name <span class="required" aria-hidden="true">*</span>
                  </label>
                  <input
                    class="form-input"
                    type="text"
                    id="lastname"
                    name="lastname"
                    autocomplete="family-name"
                    required
                    aria-required="true"
                    aria-describedby="lastname-error"
                    placeholder="Smith"
                  />
                  <span class="form-error" id="lastname-error" role="alert">Please enter your last name.</span>
                </div>

                <!-- Email -->
                <div class="form-field" id="field-email">
                  <label class="form-label" for="email">
                    Email Address <span class="required" aria-hidden="true">*</span>
                  </label>
                  <input
                    class="form-input"
                    type="email"
                    id="email"
                    name="email"
                    autocomplete="email"
                    required
                    aria-required="true"
                    aria-describedby="email-error"
                    placeholder="jane@example.com"
                  />
                  <span class="form-error" id="email-error" role="alert">Please enter a valid email address.</span>
                </div>

                <!-- Phone -->
                <div class="form-field" id="field-phone">
                  <label class="form-label" for="phone">Phone Number</label>
                  <input
                    class="form-input"
                    type="tel"
                    id="phone"
                    name="phone"
                    autocomplete="tel"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <!-- Service -->
                <div class="form-field" id="field-service">
                  <label class="form-label" for="service">
                    Service Required <span class="required" aria-hidden="true">*</span>
                  </label>
                  <select
                    class="form-select"
                    id="service"
                    name="service"
                    required
                    aria-required="true"
                    aria-describedby="service-error"
                  >
                    <option value="">Select a service…</option>
                    <optgroup label="Preventive">
                      <option value="cleaning">Routine Cleaning &amp; Exam</option>
                      <option value="xrays">Digital X-Rays</option>
                      <option value="sealants">Sealants</option>
                    </optgroup>
                    <optgroup label="Cosmetic">
                      <option value="whitening">Teeth Whitening</option>
                      <option value="veneers">Porcelain Veneers</option>
                      <option value="bonding">Dental Bonding</option>
                    </optgroup>
                    <optgroup label="Restorative">
                      <option value="crown">Crown / CEREC</option>
                      <option value="implant">Dental Implant</option>
                      <option value="rootcanal">Root Canal</option>
                      <option value="filling">Tooth Filling</option>
                    </optgroup>
                    <optgroup label="Orthodontics">
                      <option value="invisalign">Invisalign</option>
                      <option value="braces">Traditional Braces</option>
                    </optgroup>
                    <optgroup label="Other">
                      <option value="emergency">Emergency Care</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="other">Other</option>
                    </optgroup>
                  </select>
                  <span class="form-error" id="service-error" role="alert">Please select a service.</span>
                </div>

                <!-- Preferred Date -->
                <div class="form-field" id="field-date">
                  <label class="form-label" for="preferred-date">Preferred Date</label>
                  <input
                    class="form-input"
                    type="date"
                    id="preferred-date"
                    name="preferred-date"
                    min="${todayString()}"
                  />
                </div>

                <!-- Preferred Time -->
                <div class="form-field full" id="field-time">
                  <label class="form-label" for="preferred-time">Preferred Time</label>
                  <select class="form-select" id="preferred-time" name="preferred-time">
                    <option value="">No preference</option>
                    <option value="morning">Morning (8 AM – 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM – 4 PM)</option>
                    <option value="evening">Evening (4 PM – 6 PM)</option>
                    <option value="saturday">Saturday Morning</option>
                  </select>
                </div>

                <!-- Message -->
                <div class="form-field full" id="field-message">
                  <label class="form-label" for="message">Additional Notes</label>
                  <textarea
                    class="form-textarea"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about your concerns, dental history, or any questions you have…"
                    aria-describedby="message-hint"
                  ></textarea>
                  <span id="message-hint" style="font-size:var(--text-xs);color:var(--clr-grey-300);">Optional but helpful!</span>
                </div>

                <!-- New patient -->
                <div class="form-field full">
                  <label class="form-checkbox-group">
                    <input class="form-checkbox" type="checkbox" id="new-patient" name="new-patient" />
                    <span class="form-checkbox-label">I am a new patient</span>
                  </label>
                </div>

                <!-- Insurance -->
                <div class="form-field full">
                  <label class="form-checkbox-group">
                    <input class="form-checkbox" type="checkbox" id="has-insurance" name="has-insurance" />
                    <span class="form-checkbox-label">I have dental insurance</span>
                  </label>
                </div>

                <!-- Consent -->
                <div class="form-field full" id="field-consent">
                  <label class="form-checkbox-group">
                    <input class="form-checkbox" type="checkbox" id="consent" name="consent" required aria-required="true" aria-describedby="consent-error" />
                    <span class="form-checkbox-label">
                      I agree to be contacted by Family Dental Care regarding my appointment request.
                      <a href="#" style="color:var(--clr-teal);">Privacy Policy</a>.
                      <span class="required" aria-hidden="true">*</span>
                    </span>
                  </label>
                  <span class="form-error" id="consent-error" role="alert">You must agree to be contacted.</span>
                </div>

              </div><!-- /form-grid -->

              <!-- Submit -->
              <button type="submit" class="btn btn-primary btn-lg form-submit" id="submit-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
                Request Appointment
              </button>

              <!-- Success/Error Messages -->
              <div class="form-message success" id="form-success" role="status" aria-live="polite">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>
                  <strong>Appointment request sent!</strong><br>
                  We'll contact you within 2 business hours to confirm. Check your email for details.
                </span>
              </div>

              <div class="form-message error" id="form-error" role="alert" aria-live="assertive">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <span id="form-error-text">Something went wrong. Please try again or call us directly.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Emergency Banner -->
    <section style="background:var(--clr-danger);padding:var(--space-6) 0;" aria-label="Emergency dental care">
      <div class="container" style="display:flex;align-items:center;justify-content:space-between;gap:var(--space-6);flex-wrap:wrap;">
        <div style="display:flex;align-items:center;gap:var(--space-4);">
          <div style="width:48px;height:48px;background:rgba(255,255,255,.2);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" style="width:24px;height:24px;">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <div>
            <p style="color:white;font-weight:700;font-size:var(--text-base);">Dental Emergency?</p>
            <p style="color:rgba(255,255,255,.85);font-size:var(--text-sm);">Same-day appointments available. After-hours emergencies welcome.</p>
          </div>
        </div>
        <a href="tel:+15559876543" class="btn btn-outline-white btn-lg" style="flex-shrink:0;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" style="width:18px;height:18px;">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 12.21 19.79 19.79 0 011.5 3.6 2 2 0 013.48 1.4h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9.3a16 16 0 006.79 6.79l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7 2 2 0 011.71 2.02z"/>
          </svg>
          Call Emergency Line
        </a>
      </div>
    </section>
  `;
  return el;
}

/* ── Helpers ──────────────────────────────────── */

function todayString() {
  return new Date().toISOString().split('T')[0];
}

function mapSvg() {
  return /* html */`
    <svg viewBox="0 0 600 280" fill="none" xmlns="http://www.w3.org/2000/svg"
         style="width:100%;height:100%;background:linear-gradient(135deg,#1a2f4e,#1e4a7a);" aria-hidden="true">
      <defs>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="600" height="280" fill="url(#grid)"/>
      <!-- Streets -->
      <line x1="0"   y1="140" x2="600" y2="140" stroke="rgba(255,255,255,.2)" stroke-width="8"/>
      <line x1="300" y1="0"   x2="300" y2="280" stroke="rgba(255,255,255,.2)" stroke-width="8"/>
      <line x1="0"   y1="90"  x2="600" y2="90"  stroke="rgba(255,255,255,.08)" stroke-width="4"/>
      <line x1="0"   y1="200" x2="600" y2="200" stroke="rgba(255,255,255,.08)" stroke-width="4"/>
      <line x1="150" y1="0"   x2="150" y2="280" stroke="rgba(255,255,255,.08)" stroke-width="4"/>
      <line x1="450" y1="0"   x2="450" y2="280" stroke="rgba(255,255,255,.08)" stroke-width="4"/>
      <!-- Pin shadow -->
      <ellipse cx="300" cy="160" rx="20" ry="6" fill="rgba(0,0,0,.3)"/>
      <!-- Map Pin -->
      <path d="M300 60 C275 60 258 82 258 102 C258 132 300 165 300 165 C300 165 342 132 342 102 C342 82 325 60 300 60Z"
            fill="var(--clr-danger)" stroke="white" stroke-width="3"/>
      <circle cx="300" cy="100" r="12" fill="white"/>
      <path d="M296 100 Q300 94 304 100" stroke="var(--clr-danger)" stroke-width="2" fill="none"/>
      <!-- Street labels -->
      <text x="50"  y="133" fill="rgba(255,255,255,.35)" font-size="10" font-family="Inter,sans-serif">MAIN ST</text>
      <text x="310" y="30"  fill="rgba(255,255,255,.35)" font-size="10" font-family="Inter,sans-serif">SMILE AVE</text>
    </svg>
  `;
}
