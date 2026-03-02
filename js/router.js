/**
 * router.js — Hash-based SPA Router
 * No framework dependencies. Works as a static file.
 */

/** @typedef {{ path: string, component: () => Promise<{ render: () => HTMLElement }> }} Route */

export class Router {
  /** @param {Route[]} routes */
  constructor(routes) {
    this.routes = routes;
    this._currentPath = null;
    this._onChangeCallback = null;

    window.addEventListener('hashchange', () => this._resolve());
    // Intercept all <a> clicks with data-route
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-route]');
      if (!link) return;
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href) this.navigate(href);
    });
  }

  /** Register a callback to be called on every route change */
  onChange(fn) {
    this._onChangeCallback = fn;
    return this;
  }

  /** Navigate to a hash path */
  navigate(path) {
    window.location.hash = path;
  }

  /** Kick off the router (call once on app init) */
  start() {
    this._resolve();
  }

  /** Resolve the current hash to a route */
  async _resolve() {
    const raw = window.location.hash || '#/';
    // Strip the leading #
    const path = raw.startsWith('#') ? raw.slice(1) : raw;
    const route = this._match(path) || this._match('/');

    if (!route) return;

    this._currentPath = path;
    this._updateActiveLinks(path);

    if (this._onChangeCallback) {
      await this._onChangeCallback(route, path);
    }
  }

  /** Find a matching route for the given path */
  _match(path) {
    return this.routes.find(r => r.path === path || path.startsWith(r.path + '?'));
  }

  /** Update active class on nav links */
  _updateActiveLinks(path) {
    document.querySelectorAll('.nav-link[data-route]').forEach(el => {
      const route = el.dataset.route;
      const href  = el.getAttribute('href')?.replace('#', '') || '/';
      const isActive = href === path || (href === '/' && (path === '/' || path === ''));
      el.classList.toggle('active', isActive);
    });
  }
}
