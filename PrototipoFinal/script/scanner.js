/* ===== SkillTransfer — scanner.js ===== */

document.addEventListener("DOMContentLoaded", () => {
  const CAT_LABELS = {
    idiomas: "Idiomas",
    tecnologia: "Tecnología",
    musica: "Música",
    comunicacion: "Comunicación",
    cocina: "Cocina",
    deporte: "Deporte",
    arte: "Arte",
    bienestar: "Bienestar",
    profesional: "Profesional"
  };

  const SKILLS_POOL = [
    { id: 1,  cat: "idiomas",      icon: "🗣",  name: "Inglés B2",              time: "~8 s"  },
    { id: 2,  cat: "idiomas",      icon: "🇫🇷",  name: "Francés A2",             time: "~6 s"  },
    { id: 3,  cat: "idiomas",      icon: "🇩🇪",  name: "Alemán A1",              time: "~5 s"  },
    { id: 7,  cat: "idiomas",      icon: "🇮🇹",  name: "Italiano A2",            time: "~6 s"  },
    { id: 15, cat: "tecnologia",   icon: "💻",  name: "Python básico",          time: "~12 s" },
    { id: 16, cat: "tecnologia",   icon: "📊",  name: "Excel avanzado",         time: "~6 s"  },
    { id: 18, cat: "tecnologia",   icon: "🌐",  name: "HTML & CSS básico",      time: "~8 s"  },
    { id: 20, cat: "tecnologia",   icon: "🤖",  name: "Prompting IA",           time: "~4 s"  },
    { id: 24, cat: "tecnologia",   icon: "☁",  name: "Google Workspace",        time: "~5 s"  },
    { id: 31, cat: "musica",       icon: "🎵",  name: "Lectura musical",        time: "~15 s" },
    { id: 32, cat: "musica",       icon: "🎹",  name: "Piano principiante",     time: "~14 s" },
    { id: 33, cat: "musica",       icon: "🎸",  name: "Guitarra acústica",      time: "~13 s" },
    { id: 41, cat: "comunicacion", icon: "🎤",  name: "Oratoria pública",       time: "~10 s" },
    { id: 44, cat: "comunicacion", icon: "📧",  name: "Redacción profesional",  time: "~5 s"  },
    { id: 45, cat: "comunicacion", icon: "🧠",  name: "Escucha activa",         time: "~6 s"  },
    { id: 51, cat: "cocina",       icon: "🍳",  name: "Cocina básica",          time: "~5 s"  },
    { id: 53, cat: "cocina",       icon: "🍰",  name: "Repostería",             time: "~7 s"  },
    { id: 63, cat: "deporte",      icon: "🧘",  name: "Yoga principiante",      time: "~6 s"  },
    { id: 68, cat: "deporte",      icon: "🤸",  name: "Flexibilidad",           time: "~6 s"  },
    { id: 69, cat: "deporte",      icon: "🏃",  name: "Running técnico",        time: "~7 s"  },
    { id: 71, cat: "arte",         icon: "✏",  name: "Dibujo a lápiz",          time: "~12 s" },
    { id: 73, cat: "arte",         icon: "📷",  name: "Fotografía básica",      time: "~7 s"  },
    { id: 81, cat: "bienestar",    icon: "🧘",  name: "Meditación mindfulness", time: "~5 s"  },
    { id: 82, cat: "bienestar",    icon: "😴",  name: "Higiene del sueño",      time: "~4 s"  },
    { id: 84, cat: "bienestar",    icon: "🗓",  name: "Gestión del tiempo",     time: "~5 s"  },
    { id: 88, cat: "profesional",  icon: "💰",  name: "Finanzas personales",    time: "~6 s"  },
    { id: 92, cat: "profesional",  icon: "🧑‍🎓", name: "Técnicas de estudio",  time: "~5 s"  },
    { id: 93, cat: "profesional",  icon: "🏠",  name: "Primeros auxilios",      time: "~8 s"  }
  ];

  const PARAMETROS = [
    { key: "neuroplasticidad", label: "Neuroplasticidad", unit: "%", max: 100 },
    { key: "retencion", label: "Retención cognitiva", unit: "%", max: 100 },
    { key: "vel_proceso", label: "Vel. procesamiento", unit: " ms", max: 350, invert: true },
    { key: "creatividad", label: "Creatividad", unit: "%", max: 100 },
    { key: "enfoque", label: "Capacidad de enfoque", unit: "%", max: 100 },
    { key: "memoria", label: "Memoria de trabajo", unit: "%", max: 100 }
  ];

  const LOG_MESSAGES = [
    "Iniciando análisis neuronal…",
    "Calibrando sensores cognitivos…",
    "Escaneando patrones de memoria…",
    "Detectando conexiones sinápticas…",
    "Analizando capacidad de enfoque…",
    "Evaluando creatividad latente…",
    "Procesando historial de aprendizaje…",
    "Identificando habilidades activas…",
    "Cruzando datos con base neuronal…",
    "Generando perfil cognitivo único…",
    "Finalizando transferencia de datos…",
    "Análisis completado. Cargando resultados…"
  ];

  const STORAGE_KEY = "st_adquiridas";
  const COOKIE_KEY = "st_adquiridas_cookie";
  const SCAN_DONE_KEY = "st_scan_completed";
  const SCAN_DONE_COOKIE = "st_scan_completed_cookie";
  const INST_KEY = "st_instaladas";
  const INST_COOKIE = "st_instaladas_cookie";
  const TOTAL_MB_KEY = "st_total_mb";
  const TOTAL_MB_COOKIE = "st_total_mb_cookie";

  const screenForm = document.getElementById("screenForm");
  const screenScan = document.getElementById("screenScan");
  const screenResults = document.getElementById("screenResults");
  const scanForm = document.getElementById("scanForm");
  const interestGrid = document.getElementById("interestGrid");
  const errIntereses = document.getElementById("err-intereses");
  const logLine = document.getElementById("logLine");
  const progressBar = document.getElementById("scanProgressBar");
  const progressLabel = document.getElementById("scanProgressLabel");
  const progressWrap = document.getElementById("scanProgressWrap");
  const paramsGrid = document.getElementById("paramsGrid");
  const detectedGrid = document.getElementById("detectedGrid");
  const recoGrid = document.getElementById("recoGrid");
  const btnReScan = document.getElementById("btnReScan");
  const nombreResultado = document.getElementById("nombreResultado");

  let interesesSeleccionados = [];
  let datosUsuario = {
    nombre: "Usuario",
    edad: 24,
    ocupacion: "",
    objetivo: ""
  };

  function readCookie(name) {
    const prefix = name + "=";
    const found = document.cookie
      .split(";")
      .map(v => v.trim())
      .find(v => v.startsWith(prefix));

    if (!found) return null;
    return decodeURIComponent(found.slice(prefix.length));
  }

  function writeCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  }

  function normalizeIds(arr) {
    return [...new Set((Array.isArray(arr) ? arr : []).map(Number).filter(Number.isFinite))];
  }

  function getJsonStorage(localKey, cookieKey, fallback) {
    let raw = null;

    try {
      raw = localStorage.getItem(localKey);
    } catch {}

    if (raw == null) {
      raw = readCookie(cookieKey);
    }

    try {
      const parsed = JSON.parse(raw || JSON.stringify(fallback));
      return parsed;
    } catch {
      return fallback;
    }
  }

  function setJsonStorage(localKey, cookieKey, value) {
    const json = JSON.stringify(value);

    try {
      localStorage.setItem(localKey, json);
    } catch {}

    writeCookie(cookieKey, json, 365);
  }

  function getAdquiridas() {
    return normalizeIds(getJsonStorage(STORAGE_KEY, COOKIE_KEY, []));
  }

  function setAdquiridas(arr) {
    setJsonStorage(STORAGE_KEY, COOKIE_KEY, normalizeIds(arr));
  }

  function getInstaladas() {
    return normalizeIds(getJsonStorage(INST_KEY, INST_COOKIE, []));
  }

  function setInstaladas(arr) {
    setJsonStorage(INST_KEY, INST_COOKIE, normalizeIds(arr));
  }

  function getTotalMb() {
    let raw = null;

    try {
      raw = localStorage.getItem(TOTAL_MB_KEY);
    } catch {}

    if (raw == null) {
      raw = readCookie(TOTAL_MB_COOKIE);
    }

    const n = parseInt(raw, 10);
    return Number.isFinite(n) && n > 0 ? n : 600;
  }

  function marcarEscaneoCompletado() {
    try {
      localStorage.setItem(SCAN_DONE_KEY, "true");
    } catch {}

    writeCookie(SCAN_DONE_COOKIE, "true", 365);
  }

  function generarParametros(edad) {
    const safeEdad = Number.isFinite(edad) ? edad : 24;
    const seed = safeEdad * 137 + interesesSeleccionados.length * 53;

    function rng(min, max, offset) {
      return min + ((seed + offset * 29) % (max - min + 1));
    }

    return {
      neuroplasticidad: rng(65, 96, 1),
      retencion: rng(58, 94, 2),
      vel_proceso: rng(80, 260, 3),
      creatividad: rng(55, 98, 4),
      enfoque: rng(58, 95, 5),
      memoria: rng(60, 94, 6)
    };
  }

  function elegirHabilidades(pool, cats, n) {
    const categorias = cats.length > 0 ? cats : ["idiomas", "tecnologia", "comunicacion"];

    const candidatos = pool.filter(h => categorias.includes(h.cat));
    const base = candidatos.length ? candidatos : pool;

    const shuffled = [...base].sort((a, b) => {
      const av = (a.id * 37 + categorias.length * 13) % 97;
      const bv = (b.id * 37 + categorias.length * 13) % 97;
      return av - bv;
    });

    return shuffled.slice(0, n);
  }

  function instalarDetectadas(detectadas) {
    const adquiridas = getAdquiridas();

    detectadas.forEach(h => {
      if (!adquiridas.includes(h.id)) {
        adquiridas.push(h.id);
      }
    });

    setAdquiridas(adquiridas);

    const instaladas = getInstaladas();
    const totalMb = getTotalMb();
    const mbPorHabilidad = 45;

    detectadas.forEach(h => {
      if (!instaladas.includes(h.id) && (instaladas.length + 1) * mbPorHabilidad <= totalMb) {
        instaladas.push(h.id);
      }
    });

    setInstaladas(instaladas);
  }

  function pintarParametros(params) {
    if (!paramsGrid) return;

    paramsGrid.innerHTML = "";

    PARAMETROS.forEach(p => {
      const val = params[p.key];
      const pct = p.invert
        ? Math.max(0, Math.min(100, Math.round((1 - val / p.max) * 100)))
        : Math.max(0, Math.min(100, Math.round((val / p.max) * 100)));

      const display = p.invert ? `${pct}%` : `${val}${p.unit}`;

      const card = document.createElement("div");
      card.className = "param-card";
      card.innerHTML = `
        <span class="param-label">${p.label}</span>
        <span class="param-value">${display}</span>
        <div class="param-bar-wrap">
          <div class="param-bar" style="width:0%" data-target="${pct}"></div>
        </div>
      `;

      paramsGrid.appendChild(card);
    });

    requestAnimationFrame(() => {
      paramsGrid.querySelectorAll(".param-bar").forEach(bar => {
        bar.style.width = `${bar.dataset.target}%`;
      });
    });
  }

  function pintarHabilidadesDetectadas(detectadas) {
    if (!detectedGrid) return;

    detectedGrid.innerHTML = "";

    detectadas.forEach(h => {
      const card = document.createElement("div");
      card.className = "detected-card detected-card--owned";
      card.innerHTML = `
        <span class="detected-card-icon">${h.icon}</span>
        <div class="detected-card-info">
          <span class="detected-card-name">${h.name}</span>
          <span class="detected-card-badge">✓ Integrada</span>
        </div>
      `;

      detectedGrid.appendChild(card);
    });
  }

  function pintarRecomendaciones() {
    if (!recoGrid) return;

    const idsAdquiridas = getAdquiridas();
    const categorias = interesesSeleccionados.length
      ? interesesSeleccionados
      : ["idiomas", "tecnologia", "comunicacion"];

    const recomendaciones = SKILLS_POOL
      .filter(h => categorias.includes(h.cat) && !idsAdquiridas.includes(h.id))
      .slice(0, 6);

    recoGrid.innerHTML = "";

    recomendaciones.forEach(h => {
      const card = document.createElement("div");
      card.className = "reco-card";
      card.innerHTML = `
        <span class="reco-card-icon">${h.icon}</span>
        <div class="reco-card-info">
          <span class="reco-card-name">${h.name}</span>
          <span class="reco-card-sub">⚡ ${h.time} · <a href="lista.html" style="color:inherit;text-decoration:underline;">Ver en catálogo</a></span>
        </div>
      `;

      recoGrid.appendChild(card);
    });
  }

  function mostrarResultados() {
    marcarEscaneoCompletado();

    if (screenScan) screenScan.hidden = true;
    if (screenResults) screenResults.hidden = false;

    if (nombreResultado) {
      nombreResultado.textContent = datosUsuario.nombre || "Usuario";
    }

    const params = generarParametros(datosUsuario.edad);
    const detectadas = elegirHabilidades(SKILLS_POOL, interesesSeleccionados, 4);

    instalarDetectadas(detectadas);
    pintarParametros(params);
    pintarHabilidadesDetectadas(detectadas);
    pintarRecomendaciones();
  }

  function iniciarEscaneo() {
    if (screenForm) screenForm.hidden = true;
    if (screenResults) screenResults.hidden = true;
    if (screenScan) screenScan.hidden = false;

    let progreso = 0;
    let logIdx = 0;
    const totalTime = 4200;
    const stepMs = Math.round(totalTime / LOG_MESSAGES.length);

    if (progressBar) progressBar.style.width = "0%";
    if (progressLabel) progressLabel.textContent = "0%";
    if (progressWrap) progressWrap.setAttribute("aria-valuenow", "0");
    if (logLine) logLine.textContent = LOG_MESSAGES[0];

    const intervalo = setInterval(() => {
      if (logIdx < LOG_MESSAGES.length && logLine) {
        logLine.textContent = LOG_MESSAGES[logIdx];
      }

      logIdx++;
      progreso = Math.min(100, Math.round((logIdx / LOG_MESSAGES.length) * 100));

      if (progressBar) progressBar.style.width = `${progreso}%`;
      if (progressLabel) progressLabel.textContent = `${progreso}%`;
      if (progressWrap) progressWrap.setAttribute("aria-valuenow", String(progreso));

      if (logIdx >= LOG_MESSAGES.length) {
        clearInterval(intervalo);
        setTimeout(mostrarResultados, 500);
      }
    }, stepMs);
  }

  function recogerDatosFormulario() {
    const nombreInput = document.getElementById("scan-nombre");
    const edadInput = document.getElementById("scan-edad");
    const ocupacionInput = document.getElementById("scan-ocupacion");
    const objetivoInput = document.getElementById("scan-objetivo");

    const nombre = nombreInput ? nombreInput.value.trim() : "";
    const edad = edadInput ? parseInt(edadInput.value, 10) : 24;
    const ocupacion = ocupacionInput ? ocupacionInput.value.trim() : "";
    const objetivo = objetivoInput ? objetivoInput.value.trim() : "";

    datosUsuario = {
      nombre: nombre || "Usuario",
      edad: Number.isFinite(edad) ? edad : 24,
      ocupacion,
      objetivo
    };

    if (interesesSeleccionados.length === 0) {
      interesesSeleccionados = ["idiomas", "tecnologia", "comunicacion"];

      if (interestGrid) {
        interestGrid.querySelectorAll(".interest-chip").forEach(chip => {
          if (interesesSeleccionados.includes(chip.dataset.cat)) {
            chip.classList.add("selected");
          }
        });
      }

      if (errIntereses) {
        errIntereses.textContent = "";
      }
    }
  }

  if (interestGrid) {
    interestGrid.querySelectorAll(".interest-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const cat = chip.dataset.cat;
        chip.classList.toggle("selected");

        if (chip.classList.contains("selected")) {
          if (!interesesSeleccionados.includes(cat)) {
            interesesSeleccionados.push(cat);
          }
        } else {
          interesesSeleccionados = interesesSeleccionados.filter(c => c !== cat);
        }

        if (errIntereses) {
          errIntereses.textContent = "";
        }
      });
    });
  }

  if (scanForm) {
    scanForm.addEventListener("submit", e => {
      e.preventDefault();
      recogerDatosFormulario();
      iniciarEscaneo();
    });
  }

  const startScanBtn = document.getElementById("startScan");
  if (startScanBtn && !scanForm) {
    startScanBtn.addEventListener("click", e => {
      e.preventDefault();
      recogerDatosFormulario();
      iniciarEscaneo();
    });
  }

  if (btnReScan) {
    btnReScan.addEventListener("click", () => {
      interesesSeleccionados = [];

      if (screenResults) screenResults.hidden = true;
      if (screenScan) screenScan.hidden = true;
      if (screenForm) screenForm.hidden = false;

      if (interestGrid) {
        interestGrid.querySelectorAll(".interest-chip").forEach(c => c.classList.remove("selected"));
      }

      if (scanForm) {
        scanForm.reset();
      }

      if (progressBar) progressBar.style.width = "0%";
      if (progressLabel) progressLabel.textContent = "0%";
      if (progressWrap) progressWrap.setAttribute("aria-valuenow", "0");
    });
  }
});