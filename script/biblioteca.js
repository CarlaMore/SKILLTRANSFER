/* ===== SkillTransfer — biblioteca.js ===== */

/* Catálogo completo (necesario para recuperar datos de las habilidades adquiridas) */
const TODAS_HABILIDADES = [
  { id:1,  cat:"idiomas",      icon:"🗣",  name:"Inglés B2"              },
  { id:2,  cat:"idiomas",      icon:"🇫🇷",  name:"Francés A2"             },
  { id:3,  cat:"idiomas",      icon:"🇩🇪",  name:"Alemán A1"              },
  { id:4,  cat:"idiomas",      icon:"🇯🇵",  name:"Japonés básico"         },
  { id:5,  cat:"idiomas",      icon:"🇵🇹",  name:"Portugués B1"           },
  { id:6,  cat:"idiomas",      icon:"🇨🇳",  name:"Chino mandarín A1"      },
  { id:7,  cat:"idiomas",      icon:"🇮🇹",  name:"Italiano A2"            },
  { id:8,  cat:"idiomas",      icon:"🇷🇺",  name:"Ruso A1"                },
  { id:9,  cat:"idiomas",      icon:"🇰🇷",  name:"Coreano básico"         },
  { id:10, cat:"idiomas",      icon:"🇦🇷",  name:"Español avanzado C1"    },
  { id:11, cat:"idiomas",      icon:"🇸🇦",  name:"Árabe estándar A1"      },
  { id:12, cat:"idiomas",      icon:"🇳🇱",  name:"Neerlandés A2"          },
  { id:13, cat:"idiomas",      icon:"🇸🇪",  name:"Sueco A2"               },
  { id:14, cat:"idiomas",      icon:"🇬🇷",  name:"Griego moderno A1"      },
  { id:15, cat:"tecnologia",   icon:"💻",  name:"Python básico"          },
  { id:16, cat:"tecnologia",   icon:"📊",  name:"Excel avanzado"         },
  { id:17, cat:"tecnologia",   icon:"🎨",  name:"Diseño en Figma"        },
  { id:18, cat:"tecnologia",   icon:"🌐",  name:"HTML & CSS básico"      },
  { id:19, cat:"tecnologia",   icon:"🗄",  name:"SQL esencial"           },
  { id:20, cat:"tecnologia",   icon:"🤖",  name:"Prompting IA"           },
  { id:21, cat:"tecnologia",   icon:"⚙",  name:"JavaScript básico"      },
  { id:22, cat:"tecnologia",   icon:"📱",  name:"Diseño UI móvil"        },
  { id:23, cat:"tecnologia",   icon:"🔒",  name:"Ciberseguridad básica"  },
  { id:24, cat:"tecnologia",   icon:"☁",  name:"Google Workspace"       },
  { id:25, cat:"tecnologia",   icon:"📈",  name:"Power BI básico"        },
  { id:26, cat:"tecnologia",   icon:"🐧",  name:"Linux terminal"         },
  { id:27, cat:"tecnologia",   icon:"🧩",  name:"WordPress"              },
  { id:28, cat:"tecnologia",   icon:"🎬",  name:"Edición de vídeo"       },
  { id:29, cat:"tecnologia",   icon:"🖨",  name:"Impresión 3D básica"    },
  { id:30, cat:"tecnologia",   icon:"📡",  name:"Redes domésticas"       },
  { id:31, cat:"musica",       icon:"🎵",  name:"Lectura musical"        },
  { id:32, cat:"musica",       icon:"🎹",  name:"Piano principiante"     },
  { id:33, cat:"musica",       icon:"🎸",  name:"Guitarra acústica"      },
  { id:34, cat:"musica",       icon:"🥁",  name:"Ritmo y percusión"      },
  { id:35, cat:"musica",       icon:"🎺",  name:"Trompeta básica"        },
  { id:36, cat:"musica",       icon:"🎻",  name:"Violín principiante"    },
  { id:37, cat:"musica",       icon:"🎙",  name:"Canto básico"           },
  { id:38, cat:"musica",       icon:"🎧",  name:"Producción musical DAW" },
  { id:39, cat:"musica",       icon:"🎷",  name:"Saxofón básico"         },
  { id:40, cat:"musica",       icon:"🪗",  name:"Acordeón principiante"  },
  { id:41, cat:"comunicacion", icon:"🎤",  name:"Oratoria pública"       },
  { id:42, cat:"comunicacion", icon:"✍",  name:"Escritura creativa"      },
  { id:43, cat:"comunicacion", icon:"🤝",  name:"Negociación"            },
  { id:44, cat:"comunicacion", icon:"📧",  name:"Redacción profesional"  },
  { id:45, cat:"comunicacion", icon:"🧠",  name:"Escucha activa"         },
  { id:46, cat:"comunicacion", icon:"🎯",  name:"Elevator pitch"         },
  { id:47, cat:"comunicacion", icon:"📢",  name:"Community management"   },
  { id:48, cat:"comunicacion", icon:"🗞",  name:"Periodismo básico"      },
  { id:49, cat:"comunicacion", icon:"🧑‍💼", name:"Liderazgo de equipos" },
  { id:50, cat:"comunicacion", icon:"💬",  name:"Mediación y arbitraje"  },
  { id:51, cat:"cocina",       icon:"🍳",  name:"Cocina básica"          },
  { id:52, cat:"cocina",       icon:"🍞",  name:"Panadería artesanal"    },
  { id:53, cat:"cocina",       icon:"🍰",  name:"Repostería"             },
  { id:54, cat:"cocina",       icon:"🍣",  name:"Sushi básico"           },
  { id:55, cat:"cocina",       icon:"🍕",  name:"Pizza napolitana"       },
  { id:56, cat:"cocina",       icon:"🥩",  name:"Técnicas de asado"      },
  { id:57, cat:"cocina",       icon:"🥗",  name:"Cocina vegetariana"     },
  { id:58, cat:"cocina",       icon:"🍜",  name:"Pasta fresca"           },
  { id:59, cat:"cocina",       icon:"🍫",  name:"Chocolatería básica"    },
  { id:60, cat:"cocina",       icon:"🥘",  name:"Cocina de temporada"    },
  { id:61, cat:"deporte",      icon:"⚽",  name:"Técnica de fútbol"      },
  { id:62, cat:"deporte",      icon:"🏊",  name:"Natación crol"          },
  { id:63, cat:"deporte",      icon:"🧘",  name:"Yoga principiante"      },
  { id:64, cat:"deporte",      icon:"🚴",  name:"Ciclismo de ruta"       },
  { id:65, cat:"deporte",      icon:"🥊",  name:"Boxeo básico"           },
  { id:66, cat:"deporte",      icon:"🏋",  name:"Levantamiento de pesas" },
  { id:67, cat:"deporte",      icon:"🧗",  name:"Escalada básica"        },
  { id:68, cat:"deporte",      icon:"🤸",  name:"Flexibilidad y movilidad"},
  { id:69, cat:"deporte",      icon:"🏃",  name:"Running técnico"        },
  { id:70, cat:"deporte",      icon:"🎾",  name:"Tenis básico"           },
  { id:71, cat:"arte",         icon:"✏",  name:"Dibujo a lápiz"          },
  { id:72, cat:"arte",         icon:"🎨",  name:"Acuarela básica"        },
  { id:73, cat:"arte",         icon:"📷",  name:"Fotografía básica"      },
  { id:74, cat:"arte",         icon:"🖥",  name:"Ilustración digital"    },
  { id:75, cat:"arte",         icon:"🎭",  name:"Actuación básica"       },
  { id:76, cat:"arte",         icon:"🧵",  name:"Costura básica"         },
  { id:77, cat:"arte",         icon:"🪴",  name:"Cerámica básica"        },
  { id:78, cat:"arte",         icon:"🖌",  name:"Pintura al óleo"        },
  { id:79, cat:"arte",         icon:"✂",  name:"Origami avanzado"        },
  { id:80, cat:"arte",         icon:"🎥",  name:"Guion cinematográfico"  },
  { id:81, cat:"bienestar",    icon:"🧘",  name:"Meditación mindfulness" },
  { id:82, cat:"bienestar",    icon:"😴",  name:"Higiene del sueño"      },
  { id:83, cat:"bienestar",    icon:"🥦",  name:"Nutrición básica"       },
  { id:84, cat:"bienestar",    icon:"🗓",  name:"Gestión del tiempo"     },
  { id:85, cat:"bienestar",    icon:"💆",  name:"Gestión del estrés"     },
  { id:86, cat:"bienestar",    icon:"📓",  name:"Journaling terapéutico" },
  { id:87, cat:"profesional",  icon:"📊",  name:"Análisis de datos"      },
  { id:88, cat:"profesional",  icon:"💰",  name:"Finanzas personales"    },
  { id:89, cat:"profesional",  icon:"📑",  name:"Gestión de proyectos"   },
  { id:90, cat:"profesional",  icon:"🧾",  name:"Contabilidad básica"    },
  { id:91, cat:"profesional",  icon:"⚖",  name:"Derecho laboral básico"  },
  { id:92, cat:"profesional",  icon:"🧑‍🎓", name:"Técnicas de estudio"  },
  { id:93, cat:"profesional",  icon:"🏠",  name:"Primeros auxilios"      },
  { id:94, cat:"profesional",  icon:"📣",  name:"Marketing digital"      },
  { id:95, cat:"profesional",  icon:"🔧",  name:"Bricolaje doméstico"    },
  { id:96, cat:"profesional",  icon:"🌿",  name:"Jardinería básica"       },
  { id:97, cat:"profesional",  icon:"🚗",  name:"Mecánica básica"         },
  { id:98, cat:"profesional",  icon:"🐾",  name:"Cuidado de mascotas"    },
  { id:99, cat:"profesional",  icon:"📸",  name:"Edición fotográfica"    },
  { id:100,cat:"profesional",  icon:"🎙",  name:"Podcasting básico"      },
];

const CAT_LABELS = {
  idiomas:"Idiomas", tecnologia:"Tecnología", musica:"Música",
  comunicacion:"Comunicación", cocina:"Cocina", deporte:"Deporte",
  arte:"Arte", bienestar:"Bienestar", profesional:"Profesional"
};

/* ── Utilidades almacenamiento (localStorage + cookie fallback) ── */
const STORAGE_KEY = "st_adquiridas";
const COOKIE_KEY = "st_adquiridas_cookie";

function readCookie(name) {
  const prefix = name + "=";
  const found = document.cookie.split(";").map(v => v.trim()).find(v => v.startsWith(prefix));
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

function getAdquiridas() {
  let raw = null;
  try { raw = localStorage.getItem(STORAGE_KEY); } catch {}
  if (raw == null) raw = readCookie(COOKIE_KEY);
  try { return normalizeIds(JSON.parse(raw || "[]")); }
  catch { return []; }
}

function setAdquiridas(arr) {
  const safe = normalizeIds(arr);
  const json = JSON.stringify(safe);
  try { localStorage.setItem(STORAGE_KEY, json); } catch {}
  writeCookie(COOKIE_KEY, json, 365);
}

function removeAdquirida(id) {
  const next = getAdquiridas().filter(x => x !== id);
  setAdquiridas(next);

  const instNext = getInst().filter(x => x !== id);
  setInst(instNext);
}

/* ── DOM ── */
const bibEmpty      = document.getElementById("bibEmpty");
const bibContent    = document.getElementById("bibContent");
const bibGroups     = document.getElementById("bibGroups");
const installedList = document.getElementById("installedList");
const almacenList   = document.getElementById("almacenList");
const totalCount    = document.getElementById("totalCount");
const catCount      = document.getElementById("catCount");
const clearLibBtn   = document.getElementById("clearLibrary");
const brainPercent  = document.getElementById("brainPercent");
const brainUsed     = document.getElementById("brainUsed");
const brainTotal    = document.getElementById("brainTotal");
const brainBar      = document.getElementById("brainBar");
const confirmOverlay = document.getElementById("confirmOverlay");
const confirmTitle = document.getElementById("confirmTitle");
const confirmText = document.getElementById("confirmText");
const confirmCancel = document.getElementById("confirmCancel");
const confirmAccept = document.getElementById("confirmAccept");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalCta = document.getElementById("modalCta");
const modalTransfer = document.getElementById("modalTransfer");
const transferCircle = document.getElementById("transferCircle");
const transferPercent = document.getElementById("transferPercent");
const transferText = document.getElementById("transferText");
const transferBubbleLayer = document.getElementById("transferBubbleLayer");
const modalOwnedNote = document.getElementById("modalOwnedNote");
const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalCat = document.getElementById("modalCat");
const modalTime = document.getElementById("modalTime");
const modalDiff = document.getElementById("modalDiff");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");

let transferInterval = null;
let habilidadAbierta = null;

const MB_PER_SKILL = 45;
const TOTAL_MB_KEY = "st_total_mb";
const TOTAL_MB_COOKIE = "st_total_mb_cookie";
const PLAN_NAMES = { "600": "Mentalidad Base", "1000": "Mente Activa", "2000": "Conocimiento Ilimitado" };
const PLAN_PRICES = { "600": "0 €/mes", "1000": "4.99 €/mes", "2000": "9.99 €/mes" };

/* INSTALLED storage (skills currently loaded in brain) */
const INST_KEY = "st_instaladas";
const INST_COOKIE = "st_instaladas_cookie";

let pendingAction = null;

function getTotalMb() {
  let raw = null;
  try { raw = localStorage.getItem(TOTAL_MB_KEY); } catch {}
  if (raw == null) raw = readCookie(TOTAL_MB_COOKIE);
  const n = parseInt(raw, 10);
  return Number.isFinite(n) && n > 0 ? n : 600;
}

function setTotalMb(n) {
  const v = Number(n) || 600;
  try { localStorage.setItem(TOTAL_MB_KEY, String(v)); } catch {}
  writeCookie(TOTAL_MB_COOKIE, String(v), 365);
}

function getInst() {
  let raw = null;
  try { raw = localStorage.getItem(INST_KEY); } catch {}
  if (raw == null) raw = readCookie(INST_COOKIE);
  try { return normalizeIds(JSON.parse(raw || "[]")); }
  catch { return []; }
}

function setInst(arr) {
  const safe = normalizeIds(arr);
  const json = JSON.stringify(safe);
  try { localStorage.setItem(INST_KEY, json); } catch {}
  writeCookie(INST_COOKIE, json, 365);
}

function labelCat(cat) {
  return CAT_LABELS[cat] || cat;
}

function setTransferProgress(value) {
  const pct = Math.max(0, Math.min(100, value));
  if (transferPercent) transferPercent.textContent = `${pct}%`;
  if (transferCircle) transferCircle.style.setProperty("--progress", `${Math.round((pct / 100) * 360)}deg`);
}

function triggerBubbleBurst() {
  if (!transferBubbleLayer) return;

  const total = 18;
  const colors = [
    "rgba(255,140,0,0.95)",
    "rgba(63,52,186,0.9)",
    "rgba(92,82,216,0.9)",
    "rgba(20,169,104,0.85)"
  ];

  for (let i = 0; i < total; i++) {
    const bubble = document.createElement("span");
    const angle = (Math.PI * 2 * i) / total;
    const distance = 52 + Math.random() * 36;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const size = 6 + Math.random() * 12;

    bubble.className = "transfer-bubble";
    bubble.style.setProperty("--dx", `${dx.toFixed(2)}px`);
    bubble.style.setProperty("--dy", `${dy.toFixed(2)}px`);
    bubble.style.setProperty("--size", `${size.toFixed(2)}px`);
    bubble.style.setProperty("--bubble-color", colors[i % colors.length]);

    bubble.addEventListener("animationend", () => bubble.remove());
    transferBubbleLayer.appendChild(bubble);
  }
}

function cerrarModalTransferencia() {
  if (transferInterval) {
    clearInterval(transferInterval);
    transferInterval = null;
  }

  if (modalOverlay) modalOverlay.hidden = true;
  if (document && document.body) document.body.style.overflow = "";

  if (transferCircle) {
    transferCircle.classList.remove("is-loading");
    transferCircle.classList.remove("is-complete");
    transferCircle.style.setProperty("--progress", "0deg");
  }

  if (modalTransfer) modalTransfer.hidden = true;
  if (modalOwnedNote) modalOwnedNote.hidden = true;

  habilidadAbierta = null;
}

function abrirModalTransferencia(h) {
  habilidadAbierta = h;

  const installed = getInst().includes(h.id);

  if (modalIcon) modalIcon.textContent = h.icon;
  if (modalTitle) modalTitle.textContent = h.name;
  if (modalCat) modalCat.textContent = labelCat(h.cat);
  if (modalTime) modalTime.textContent = h.time || "";
  if (modalDiff) modalDiff.textContent = h.diff || "";
  if (modalPrice) modalPrice.textContent = installed ? "Instalada" : `${MB_PER_SKILL} MB`;
  if (modalDesc) modalDesc.textContent = h.name ? `Instalar ${h.name} en tu biblioteca.` : "";

  if (modalCta) {
    modalCta.hidden = false;
    modalCta.disabled = installed;
    modalCta.textContent = installed ? "✓ Habilidad instalada" : "⚡ Descargar habilidad";
    modalCta.style.background = "";
    modalCta.style.cursor = installed ? "not-allowed" : "";
  }

  if (modalOwnedNote) {
    modalOwnedNote.hidden = true;
    modalOwnedNote.textContent = "";
  }

  if (modalTransfer) modalTransfer.hidden = true;

  if (transferCircle) {
    transferCircle.classList.remove("is-complete");
    transferCircle.classList.remove("is-loading");
    transferCircle.style.setProperty("--progress", "0deg");
  }

  if (transferPercent) transferPercent.textContent = "0%";

  if (transferText) {
    transferText.textContent = "Descargando...";
    transferText.style.color = "var(--orange)";
    transferText.style.fontWeight = "800";
  }

  if (transferBubbleLayer) transferBubbleLayer.innerHTML = "";

  if (modalOverlay) modalOverlay.hidden = false;
  if (document && document.body) document.body.style.overflow = "hidden";
}

function installSkill(id) {
  const installed = getInst();

  if (installed.includes(id)) return;

  const totalMb = getTotalMb();

  if ((installed.length + 1) * MB_PER_SKILL > totalMb) {
    openConfirmModal({
      title: "Espacio insuficiente",
      text: "No hay suficiente espacio cerebral para instalar esta habilidad. Libera espacio o activa un plan mayor.",
      onConfirm: null
    });
    return;
  }

  installed.push(id);
  setInst(installed);
  renderBiblioteca();
}

function startInstall(h, btn) {
  if (getInst().includes(h.id)) return;

  if ((getInst().length + 1) * MB_PER_SKILL > getTotalMb()) {
    openConfirmModal({
      title: "Espacio insuficiente",
      text: "No hay suficiente espacio cerebral para instalar esta habilidad. Libera espacio o activa un plan mayor.",
      onConfirm: null
    });
    return;
  }

  abrirModalTransferencia(h);

  if (!modalOverlay || !modalCta || !modalTransfer || !transferCircle) {
    const arr = getAdquiridas();
    if (!arr.includes(h.id)) {
      arr.push(h.id);
      setAdquiridas(arr);
    }
    installSkill(h.id);
    return;
  }

  modalTransfer.hidden = false;
  transferCircle.classList.add("is-loading");

  if (modalOwnedNote) modalOwnedNote.hidden = true;

  if (transferText) {
    transferText.textContent = "Descargando...";
    transferText.style.color = "var(--orange)";
    transferText.style.fontWeight = "800";
  }

  if (modalCta) {
    modalCta.hidden = true;
    modalCta.textContent = "Descargando...";
    modalCta.disabled = true;
  }

  let progress = 0;
  const start = Date.now();
  const duration = 2500;

  transferInterval = setInterval(() => {
    const elapsed = Date.now() - start;
    const t = Math.min(elapsed / duration, 1);
    progress = Math.round((1 - Math.pow(1 - t, 3)) * 100);
    setTransferProgress(progress);

    if (progress >= 100) {
      clearInterval(transferInterval);
      transferInterval = null;

      transferCircle.classList.remove("is-loading");
      transferCircle.classList.add("is-complete");
      triggerBubbleBurst();

      if (transferText) {
        transferText.textContent = "Habilidad instalada";
        transferText.style.color = "#059669";
        transferText.style.fontWeight = "800";
      }

      const arr = getAdquiridas();
      if (!arr.includes(h.id)) {
        arr.push(h.id);
        setAdquiridas(arr);
      }

      const installed = getInst();
      const totalMb = getTotalMb();

      if (!installed.includes(h.id) && (installed.length + 1) * MB_PER_SKILL <= totalMb) {
        installed.push(h.id);
        setInst(installed);
      }

      if (modalCta) {
        modalCta.hidden = true;
        modalCta.textContent = "✓ Habilidad instalada";
        modalCta.style.background = "linear-gradient(110deg,#059669,#10B981)";
      }

      setTimeout(() => {
        cerrarModalTransferencia();
        renderBiblioteca();
      }, 1100);
    }
  }, 40);
}

function cerrarModalSiClickFuera(e) {
  if (e.target === modalOverlay) cerrarModalTransferencia();
}

function uninstallSkill(id) {
  const installed = getInst().filter(x => x !== id);
  setInst(installed);
  renderBiblioteca();
}

function openConfirmModal(config) {
  if (!confirmOverlay || !confirmTitle || !confirmText) return;

  confirmTitle.textContent = config.title;
  confirmText.textContent = config.text;
  pendingAction = config.onConfirm;
  confirmOverlay.hidden = false;
}

function closeConfirmModal() {
  if (confirmOverlay) confirmOverlay.hidden = true;
  pendingAction = null;
}

if (confirmCancel) {
  confirmCancel.addEventListener("click", closeConfirmModal);
}

if (confirmOverlay) {
  confirmOverlay.addEventListener("click", e => {
    if (e.target === confirmOverlay) closeConfirmModal();
  });
}

if (confirmAccept) {
  confirmAccept.addEventListener("click", () => {
    if (pendingAction) pendingAction();
    closeConfirmModal();
  });
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && confirmOverlay && !confirmOverlay.hidden) closeConfirmModal();
});

/* ── Render ── */
function renderBiblioteca() {
  const ids = getAdquiridas();
  const validIds = new Set(TODAS_HABILIDADES.map(h => h.id));
  const cleanIds = ids.filter(id => validIds.has(id));

  if (cleanIds.length !== ids.length) setAdquiridas(cleanIds);

  const installedIds = getInst().filter(id => validIds.has(id));

  if (installedIds.length !== getInst().length) setInst(installedIds);

  const habsInstalled = TODAS_HABILIDADES.filter(h => installedIds.includes(h.id));
  const habsAcqOnly = TODAS_HABILIDADES.filter(h => cleanIds.includes(h.id) && !installedIds.includes(h.id));

  const totalMb = getTotalMb();
  const usedMb = Math.min(habsInstalled.length * MB_PER_SKILL, totalMb);
  const freeMb = Math.max(totalMb - usedMb, 0);
  const freePct = Math.round((freeMb / totalMb) * 100);

  if (totalCount) totalCount.textContent = habsInstalled.length;
  if (brainPercent) brainPercent.textContent = `${freePct}%`;
  if (brainUsed) brainUsed.textContent = usedMb;
  if (brainTotal) brainTotal.textContent = totalMb;
  if (brainBar) brainBar.style.width = `${Math.round((usedMb / totalMb) * 100)}%`;

  if (cleanIds.length === 0) {
    if (bibEmpty) bibEmpty.hidden = false;
    if (bibContent) bibContent.hidden = true;
    if (bibGroups) bibGroups.innerHTML = "";
    if (installedList) installedList.innerHTML = "";
    if (almacenList) almacenList.innerHTML = "";
    if (catCount) catCount.textContent = "0";
    return;
  }

  if (bibEmpty) bibEmpty.hidden = true;
  if (bibContent) bibContent.hidden = false;

  if (installedList) {
    installedList.innerHTML = "";

    habsInstalled.forEach(h => {
      const card = document.createElement("div");
      card.className = "bib-card";
      card.innerHTML = `
        <span class="bib-card-icon">${h.icon}</span>
        <span class="bib-card-name">${h.name}</span>
        <div class="bib-card-bottom">
          <span class="bib-card-time">${h.time || ""}</span>
          <button class="uninstall-btn" aria-label="Desinstalar ${h.name}">−</button>
        </div>`;

      const btn = card.querySelector(".uninstall-btn");
      btn.addEventListener("click", () => {
        openConfirmModal({
          title: "Desinstalar",
          text: `¿Desinstalar ${h.name}?`,
          onConfirm: () => {
            uninstallSkill(h.id);
          }
        });
      });

      installedList.appendChild(card);
    });
  }

  if (almacenList) {
    almacenList.innerHTML = "";

    habsAcqOnly.forEach(h => {
      const card = document.createElement("div");
      card.className = "bib-card";
      card.innerHTML = `
        <span class="bib-card-icon">${h.icon}</span>
        <span class="bib-card-name">${h.name}</span>
        <div class="bib-card-bottom">
          <span class="bib-card-check">✓ Adquirida</span>
          <button class="install-btn" aria-label="Instalar ${h.name}">+</button>
        </div>`;

      const btn = card.querySelector(".install-btn");
      btn.addEventListener("click", () => {
        startInstall(h, btn);
      });

      almacenList.appendChild(card);
    });
  }

  if (bibGroups) bibGroups.innerHTML = "";

  if (catCount) catCount.textContent = String(cleanIds.length || 0);
}

/* ── Vaciar biblioteca ── */
if (clearLibBtn) {
  clearLibBtn.addEventListener("click", () => {
    openConfirmModal({
      title: "Vaciar biblioteca",
      text: "¿Seguro que quieres vaciar tu biblioteca? Esta acción no se puede deshacer.",
      onConfirm: () => {
        setAdquiridas([]);
        setInst([]);
        renderBiblioteca();
      }
    });
  });
}

/* ── Arranque ── */
renderBiblioteca();

window.addEventListener("pageshow", renderBiblioteca);
window.addEventListener("focus", renderBiblioteca);

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) renderBiblioteca();
});

window.addEventListener("storage", e => {
  if (!e.key || e.key === STORAGE_KEY || e.key === INST_KEY || e.key === TOTAL_MB_KEY) {
    renderBiblioteca();
  }
});

/* ── Planes: seleccionar/activar ── */
const plansGrid = document.getElementById("plansGrid");

if (plansGrid) {
  function refreshPlanUI() {
    const current = String(getTotalMb());

    plansGrid.querySelectorAll(".plan-card").forEach(b => {
      const t = b.dataset.total;
      b.setAttribute("aria-pressed", t === current ? "true" : "false");

      const actionEl = b.querySelector(".plan-action");
      if (actionEl) actionEl.textContent = t === current ? "ACTIVO" : "SELECCIONAR";
    });
  }

  const planOverlay = document.getElementById("planOverlay");
  const planSelect = document.getElementById("planSelect");
  const planConfirm = document.getElementById("planConfirm");
  const planModalTitle = document.getElementById("planModalTitle");
  const planModalPrice = document.getElementById("planModalPrice");
  const planModalText = document.getElementById("planModalText");
  const planConfirmBtn = document.getElementById("planConfirmBtn");
  const planCancelBtn = document.getElementById("planCancelBtn");
  const planCancelBtnConfirm = document.getElementById("planCancelBtnConfirm");

  let pendingPlanTotal = null;

  plansGrid.addEventListener("click", e => {
    const btn = e.target.closest(".plan-card");
    if (!btn) return;

    const newTotal = parseInt(btn.dataset.total, 10) || 600;

    if (newTotal === getTotalMb()) return;

    pendingPlanTotal = newTotal;

    if (planModalTitle) planModalTitle.textContent = PLAN_NAMES[String(newTotal)] || btn.textContent.trim();
    if (planModalPrice) planModalPrice.textContent = PLAN_PRICES[String(newTotal)] || "";
    if (planModalText) planModalText.textContent = `Activar este plan establecerá tu espacio cerebral a ${newTotal} MB.`;

    if (planSelect) planSelect.hidden = true;
    if (planConfirm) planConfirm.hidden = false;
    if (planOverlay) planOverlay.hidden = false;
  });

  function closePlanOverlay() {
    if (planOverlay) planOverlay.hidden = true;
    if (planSelect) planSelect.hidden = false;
    if (planConfirm) planConfirm.hidden = true;
    pendingPlanTotal = null;
  }

  if (planCancelBtn) planCancelBtn.addEventListener("click", closePlanOverlay);
  if (planCancelBtnConfirm) planCancelBtnConfirm.addEventListener("click", closePlanOverlay);

  if (planOverlay) {
    planOverlay.addEventListener("click", e => {
      if (e.target === planOverlay) closePlanOverlay();
    });
  }

  if (planConfirmBtn) {
    planConfirmBtn.addEventListener("click", () => {
      if (!pendingPlanTotal) return;

      setTotalMb(pendingPlanTotal);
      renderBiblioteca();

      try {
        localStorage.setItem("st_total_mb_changed_at", Date.now());
      } catch {}

      refreshPlanUI();
      closePlanOverlay();
    });
  }

  refreshPlanUI();
}

/* Expand plans button: show vertical plans + cost info */
const expandBtn = document.getElementById("expandPlansBtn");
const planCostsEl = document.getElementById("planCosts");

if (expandBtn) {
  expandBtn.addEventListener("click", () => {
    const planOverlay = document.getElementById("planOverlay");

    if (planCostsEl) {
      planCostsEl.innerHTML = `
        <ul>
          <li><strong>600 MB</strong><span>${PLAN_PRICES["600"]}</span></li>
          <li><strong>1 GB</strong><span>${PLAN_PRICES["1000"]}</span></li>
          <li><strong>2 GB</strong><span>${PLAN_PRICES["2000"]}</span></li>
        </ul>`;
    }

    if (planOverlay) {
      planOverlay.hidden = false;

      const sel = document.getElementById("planSelect");
      const conf = document.getElementById("planConfirm");

      if (sel) sel.hidden = false;
      if (conf) conf.hidden = true;
    }
  });
}

if (modalClose) modalClose.addEventListener("click", cerrarModalTransferencia);
if (modalOverlay) modalOverlay.addEventListener("click", cerrarModalSiClickFuera);

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modalOverlay && !modalOverlay.hidden) {
    cerrarModalTransferencia();
  }
});