/**
 * transitions.js — Custom page transition manager
 * Coordinates enter/exit animations between views.
 */

export class TransitionManager {
  constructor(container) {
    /** @type {HTMLElement} */
    this.container = container;
    this._running = false;
  }

  /**
   * Replace current view content with a fade+slide transition.
   * @param {() => HTMLElement | Promise<HTMLElement>} renderFn
   */
  async transition(renderFn) {
    if (this._running) return;
    this._running = true;

    // 1. Exit animation on current children
    const currentChildren = Array.from(this.container.children);
    if (currentChildren.length) {
      await this._exitAll(currentChildren);
    }

    // 2. Render new content
    const newContent = await renderFn();

    // 3. Clear container and append new view
    this.container.innerHTML = '';
    newContent.classList.add('view');
    this.container.appendChild(newContent);

    // 4. Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // 5. Trigger enter animation (already done via CSS .view class)
    // Wait for animation to play before unlocking
    await this._wait(600);
    this._running = false;
  }

  /** Animate elements out, return a promise that resolves when done */
  _exitAll(elements) {
    return new Promise(resolve => {
      let done = 0;
      if (!elements.length) { resolve(); return; }

      elements.forEach(el => {
        el.classList.add('view-exit');
        const onEnd = () => {
          el.removeEventListener('animationend', onEnd);
          done++;
          if (done >= elements.length) resolve();
        };
        el.addEventListener('animationend', onEnd);

        // Fallback timeout in case animationend never fires
        setTimeout(() => {
          done++;
          if (done >= elements.length) resolve();
        }, 400);
      });
    });
  }

  _wait(ms) {
    return new Promise(r => setTimeout(r, ms));
  }
}
