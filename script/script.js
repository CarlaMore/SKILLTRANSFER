/* ===== SkillTransfer — script.js (compartido) ===== */

const SCAN_DONE_KEY = "st_scan_completed";
const STORAGE_KEY_SHARED = "st_adquiridas";
const COOKIE_KEY_SHARED = "st_adquiridas_cookie";

function readSkillTransferCookie(name) {
  const prefix = name + "=";
  const found = document.cookie.split(";").map(v => v.trim()).find(v => v.startsWith(prefix));
  if (!found) return null;
  return decodeURIComponent(found.slice(prefix.length));
}

function hasCompletedInitialScan() {
  try {
    if (localStorage.getItem(SCAN_DONE_KEY) === "true") return true;
  } catch {}

  let raw = null;
  try { raw = localStorage.getItem(STORAGE_KEY_SHARED); } catch {}
  if (raw == null) raw = readSkillTransferCookie(COOKIE_KEY_SHARED);

  try {
    const ids = JSON.parse(raw || "[]");
    return Array.isArray(ids) && ids.length > 0;
  } catch {
    return false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  const scanCompleted = hasCompletedInitialScan();

  if (!scanCompleted) {
    document.body.classList.add("needs-initial-scan");
    document.body.classList.remove("menu-open");
  } else {
    document.body.classList.remove("needs-initial-scan");
  }

  function marcarPaginaActual() {
    const links = document.querySelectorAll(".main-nav a, .footer-nav a");

    links.forEach(link => {
      link.classList.remove("nav-active");

      const href = link.getAttribute("href") || "";
      const hrefPage = href.split("#")[0].split("/").pop() || "index.html";
      const hrefHash = href.includes("#") ? "#" + href.split("#")[1] : "";

      if (hrefHash === "#contacto") {
        return;
      }

      if (
        (currentPage === "index.html" && hrefPage === "index.html") ||
        (currentPage === "lista.html" && hrefPage === "lista.html") ||
        (currentPage === "scanner.html" && hrefPage === "scanner.html") ||
        (currentPage === "biblioteca.html" && hrefPage === "biblioteca.html")
      ) {
        link.classList.add("nav-active");
      }
    });
  }

  marcarPaginaActual();
  window.addEventListener("hashchange", marcarPaginaActual);

  if (!scanCompleted && (currentPage === "lista.html" || currentPage === "biblioteca.html")) {
    window.location.href = "index.html?scanRequired=1";
    return;
  }

  const firstScanIntro = document.getElementById("firstScanIntro");

  if (firstScanIntro) {
    if (!scanCompleted) {
      firstScanIntro.hidden = false;
    } else {
      firstScanIntro.hidden = true;
    }
  }

  document.querySelectorAll('a[href="lista.html"], a[href="biblioteca.html"]').forEach(link => {
    link.addEventListener("click", e => {
      if (!hasCompletedInitialScan()) {
        e.preventDefault();
        window.location.href = "scanner.html";
      }
    });
  });

  const firstScanGallery = document.querySelector(".first-scan-gallery");

  if (firstScanGallery) {
    const photos = Array.from(firstScanGallery.querySelectorAll(".skill-photo"));
    const arrows = firstScanGallery.querySelectorAll(".gallery-arrow");
    let activePhoto = 0;

    function showPhoto(nextIndex) {
      if (!photos.length) return;
      photos[activePhoto].classList.remove("skill-photo--active");
      activePhoto = (nextIndex + photos.length) % photos.length;
      photos[activePhoto].classList.add("skill-photo--active");
    }

    arrows.forEach((btn, idx) => {
      btn.addEventListener("click", () => showPhoto(activePhoto + (idx === 0 ? -1 : 1)));
    });

    setInterval(() => showPhoto(activePhoto + 1), 3200);
  }

  const orb = document.getElementById("skillOrb");

  if (orb) {
    const chips = orb.querySelectorAll(".skill-chip");
    const orbW = orb.offsetWidth;
    const orbH = orb.offsetHeight;
    const cx = orbW / 2;
    const cy = orbH / 2;
    const radius = orbW / 2 + 16;

    chips.forEach(chip => {
      const angleDeg = parseFloat(chip.dataset.angle) || 0;
      const angleRad = (angleDeg - 90) * (Math.PI / 180);
      const x = cx + radius * Math.cos(angleRad);
      const y = cy + radius * Math.sin(angleRad);

      chip.style.left = x + "px";
      chip.style.top = y + "px";
      chip.style.transform = "translate(-50%, -50%)";
    });
  }

  const form = document.getElementById("contactForm");

  if (form) {
    const campos = {
      nombre: {
        el: document.getElementById("nombre"),
        err: document.getElementById("err-nombre"),
        msg: "Por favor, escribe tu nombre."
      },
      email: {
        el: document.getElementById("email"),
        err: document.getElementById("err-email"),
        msg: "Introduce un correo electrónico válido."
      },
      mensaje: {
        el: document.getElementById("mensaje"),
        err: document.getElementById("err-mensaje"),
        msg: "El mensaje no puede estar vacío."
      }
    };

    const success = document.getElementById("formSuccess");

    function validar() {
      let ok = true;

      Object.values(campos).forEach(c => {
        if (!c.el || !c.err) return;

        const val = c.el.value.trim();
        const vacio = val === "";
        const emailMal = c.el.type === "email" && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

        if (vacio || emailMal) {
          c.err.textContent = c.msg;
          c.el.classList.add("input-error");
          ok = false;
        } else {
          c.err.textContent = "";
          c.el.classList.remove("input-error");
        }
      });

      return ok;
    }

    Object.values(campos).forEach(c => {
      if (!c.el || !c.err) return;

      c.el.addEventListener("input", () => {
        c.err.textContent = "";
        c.el.classList.remove("input-error");
      });
    });

    form.addEventListener("submit", e => {
      e.preventDefault();

      if (!validar()) return;

      if (success) success.textContent = "✓ Mensaje enviado. Te responderemos pronto.";
      form.reset();

      setTimeout(() => {
        if (success) success.textContent = "";
      }, 5000);
    });
  }

  document.querySelectorAll(".skill-card[data-href]").forEach(card => {
    card.addEventListener("click", () => window.location.href = card.dataset.href);
    card.addEventListener("keydown", e => {
      if (e.key === "Enter") window.location.href = card.dataset.href;
    });
  });

  const catalogoBtn = document.getElementById("catalogoBtn");

  if (catalogoBtn) {
    catalogoBtn.addEventListener("click", () => {
      const st = document.getElementById("statusText");
      if (st) st.textContent = "Abriendo catálogo de habilidades...";
    });
  }

  const menuToggle = document.querySelector(".menu-toggle");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      if (document.body.classList.contains("needs-initial-scan")) return;

      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      document.body.classList.toggle("menu-open");
    });

    document.querySelectorAll("nav a").forEach(a => {
      a.addEventListener("click", () => {
        document.body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", e => {
      if (!e.target.closest(".header-inner")) {
        document.body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});