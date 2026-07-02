// RoboSole — minimal vanilla interactivity. No dependencies.
(function () {
  "use strict";

  /* ---- Sticky nav: toggle scrolled state ---- */
  var header = document.querySelector("[data-header]");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile menu ---- */
  var toggle = document.querySelector("[data-nav-toggle]");
  var drawer = document.querySelector("[data-mobile-drawer]");
  var setMenu = function (open) {
    if (!toggle || !drawer) return;
    toggle.classList.toggle("is-open", open);
    drawer.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  if (toggle && drawer) {
    toggle.addEventListener("click", function () {
      setMenu(!drawer.classList.contains("is-open"));
    });
    // Close after tapping any drawer link
    drawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });
  }

  /* ---- Scroll reveal via IntersectionObserver ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var delay = el.getAttribute("data-delay");
            if (delay) el.style.transitionDelay = delay + "ms";
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // No IO support (or reduced motion): just show everything.
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---- Email signup (front-end placeholder) ---- */
  var form = document.querySelector("[data-signup-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        // TODO: POST to your email provider / API route here.
        var wrap = document.querySelector("[data-signup-wrap]");
        var success = document.querySelector("[data-signup-success]");
        if (wrap) wrap.classList.add("hidden");
        if (success) success.classList.remove("hidden");
      }
    });
  }

  /* ---- Footer year ---- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
