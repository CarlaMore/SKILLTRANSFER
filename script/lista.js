/* ===== SkillTransfer — lista.js ===== */

/* ── Datos del catálogo (100 habilidades) ──────────────────────────────── */
const HABILIDADES = [
  /* ── IDIOMAS ─────────────────────────────────────────── */
  { id:1,  cat:"idiomas",      icon:"🗣",  name:"Inglés B2",              time:"~8 s",  diff:"Media",  price:"120 €", desc:"Domina el inglés a nivel B2. Comprensión lectora, oral y escrita para entornos profesionales y académicos." },
  { id:2,  cat:"idiomas",      icon:"🇫🇷",  name:"Francés A2",             time:"~6 s",  diff:"Baja",   price:"80 €",  desc:"Comunicación básica en francés: saludos, presentaciones, peticiones cotidianas y vocabulario esencial." },
  { id:3,  cat:"idiomas",      icon:"🇩🇪",  name:"Alemán A1",              time:"~5 s",  diff:"Baja",   price:"70 €",  desc:"Primeros pasos en alemán. Fonética, alfabeto y expresiones de uso diario." },
  { id:4,  cat:"idiomas",      icon:"🇯🇵",  name:"Japonés básico",         time:"~10 s", diff:"Alta",   price:"150 €", desc:"Hiragana, katakana y expresiones cotidianas en japonés. Ideal para viajes y cultura." },
  { id:5,  cat:"idiomas",      icon:"🇵🇹",  name:"Portugués B1",           time:"~7 s",  diff:"Baja",   price:"90 €",  desc:"Conversación fluida en portugués europeo y brasileño para contextos sociales y laborales." },
  { id:6,  cat:"idiomas",      icon:"🇨🇳",  name:"Chino mandarín A1",      time:"~12 s", diff:"Alta",   price:"180 €", desc:"Introducción a los tonos del mandarín, pinyin y caracteres básicos." },
  { id:7,  cat:"idiomas",      icon:"🇮🇹",  name:"Italiano A2",            time:"~6 s",  diff:"Baja",   price:"75 €",  desc:"Base conversacional en italiano para viajes y negocios." },
  { id:8,  cat:"idiomas",      icon:"🇷🇺",  name:"Ruso A1",                time:"~9 s",  diff:"Alta",   price:"130 €", desc:"Alfabeto cirílico, fonética y frases de supervivencia en ruso." },
  { id:9,  cat:"idiomas",      icon:"🇰🇷",  name:"Coreano básico",         time:"~9 s",  diff:"Alta",   price:"140 €", desc:"Hangul, pronunciación y vocabulario esencial del coreano moderno." },
  { id:10, cat:"idiomas",      icon:"🇦🇷",  name:"Español avanzado C1",    time:"~8 s",  diff:"Media",  price:"100 €", desc:"Registro formal, jerga regional y escritura académica en español de alto nivel." },
  { id:11, cat:"idiomas",      icon:"🇸🇦",  name:"Árabe estándar A1",      time:"~11 s", diff:"Alta",   price:"160 €", desc:"Alfabeto árabe, lectura básica y frases de uso diario en árabe moderno estándar." },
  { id:12, cat:"idiomas",      icon:"🇳🇱",  name:"Neerlandés A2",          time:"~7 s",  diff:"Baja",   price:"85 €",  desc:"Gramática y vocabulario básico del neerlandés para comunicación cotidiana." },
  { id:13, cat:"idiomas",      icon:"🇸🇪",  name:"Sueco A2",               time:"~6 s",  diff:"Baja",   price:"80 €",  desc:"Pronunciación característica y estructuras básicas del sueco." },
  { id:14, cat:"idiomas",      icon:"🇬🇷",  name:"Griego moderno A1",      time:"~8 s",  diff:"Media",  price:"95 €",  desc:"Alfabeto griego y expresiones cotidianas del griego moderno." },

  /* ── TECNOLOGÍA ──────────────────────────────────────── */
  { id:15, cat:"tecnologia",   icon:"💻",  name:"Python básico",          time:"~12 s", diff:"Media",  price:"100 €", desc:"Variables, bucles, funciones y manejo de ficheros en Python 3. Base para automatización y análisis." },
  { id:16, cat:"tecnologia",   icon:"📊",  name:"Excel avanzado",         time:"~6 s",  diff:"Media",  price:"75 €",  desc:"Tablas dinámicas, fórmulas complejas (BUSCARV, ÍNDICE) y macros básicas en Excel." },
  { id:17, cat:"tecnologia",   icon:"🎨",  name:"Diseño en Figma",        time:"~9 s",  diff:"Media",  price:"110 €", desc:"Wireframes, prototipos interactivos y sistemas de diseño en Figma." },
  { id:18, cat:"tecnologia",   icon:"🌐",  name:"HTML & CSS básico",      time:"~8 s",  diff:"Baja",   price:"70 €",  desc:"Estructura y estilo de páginas web con HTML5 y CSS3 modernos." },
  { id:19, cat:"tecnologia",   icon:"🗄",  name:"SQL esencial",           time:"~7 s",  diff:"Media",  price:"90 €",  desc:"Consultas SELECT, filtros WHERE, JOIN y GROUP BY para bases de datos relacionales." },
  { id:20, cat:"tecnologia",   icon:"🤖",  name:"Prompting IA",           time:"~4 s",  diff:"Baja",   price:"40 €",  desc:"Técnicas de prompting avanzado para LLMs. Maximiza la calidad de tus respuestas con IA." },
  { id:21, cat:"tecnologia",   icon:"⚙",  name:"JavaScript básico",      time:"~10 s", diff:"Media",  price:"95 €",  desc:"Variables, funciones, eventos DOM y fetch para páginas web interactivas." },
  { id:22, cat:"tecnologia",   icon:"📱",  name:"Diseño UI móvil",        time:"~8 s",  diff:"Media",  price:"105 €", desc:"Principios de diseño para apps iOS y Android: jerarquía visual, tipografía y componentes nativos." },
  { id:23, cat:"tecnologia",   icon:"🔒",  name:"Ciberseguridad básica",  time:"~9 s",  diff:"Media",  price:"120 €", desc:"Contraseñas seguras, reconocimiento de phishing, VPN y protección de datos personales." },
  { id:24, cat:"tecnologia",   icon:"☁",  name:"Google Workspace",       time:"~5 s",  diff:"Baja",   price:"50 €",  desc:"Docs, Sheets, Slides y Drive. Colaboración en tiempo real y organización en la nube." },
  { id:25, cat:"tecnologia",   icon:"📈",  name:"Power BI básico",        time:"~8 s",  diff:"Media",  price:"90 €",  desc:"Importación de datos, relaciones, medidas DAX básicas y dashboards interactivos." },
  { id:26, cat:"tecnologia",   icon:"🐧",  name:"Linux terminal",         time:"~9 s",  diff:"Media",  price:"85 €",  desc:"Comandos básicos del terminal Linux: navegación, gestión de ficheros, permisos y scripts bash." },
  { id:27, cat:"tecnologia",   icon:"🧩",  name:"WordPress",              time:"~6 s",  diff:"Baja",   price:"60 €",  desc:"Instalación, temas, plugins y gestión de contenidos para crear sitios web sin programar." },
  { id:28, cat:"tecnologia",   icon:"🎬",  name:"Edición de vídeo",       time:"~10 s", diff:"Media",  price:"95 €",  desc:"Corte, transiciones, música y exportación en DaVinci Resolve para creadores de contenido." },
  { id:29, cat:"tecnologia",   icon:"🖨",  name:"Impresión 3D básica",    time:"~8 s",  diff:"Media",  price:"80 €",  desc:"Parámetros de laminado, tipos de filamento y solución de errores comunes en impresoras FDM." },
  { id:30, cat:"tecnologia",   icon:"📡",  name:"Redes domésticas",       time:"~6 s",  diff:"Baja",   price:"55 €",  desc:"Configuración de router, Wi-Fi, IP estática y solución de problemas de conectividad." },

  /* ── MÚSICA ──────────────────────────────────────────── */
  { id:31, cat:"musica",       icon:"🎵",  name:"Lectura musical",        time:"~15 s", diff:"Alta",   price:"130 €", desc:"Solfeo, figuras rítmicas, claves de Sol y Fa e intervalos básicos para cualquier instrumento." },
  { id:32, cat:"musica",       icon:"🎹",  name:"Piano principiante",     time:"~14 s", diff:"Alta",   price:"140 €", desc:"Posición de manos, escalas mayores y menores, y los primeros acordes para empezar a tocar." },
  { id:33, cat:"musica",       icon:"🎸",  name:"Guitarra acústica",      time:"~13 s", diff:"Alta",   price:"120 €", desc:"Acordes abiertos, digitación básica y strumming para acompañar canciones populares." },
  { id:34, cat:"musica",       icon:"🥁",  name:"Ritmo y percusión",      time:"~10 s", diff:"Media",  price:"95 €",  desc:"Compases de 4/4 y 3/4, rudimentos básicos y coordinación mano-pie." },
  { id:35, cat:"musica",       icon:"🎺",  name:"Trompeta básica",        time:"~12 s", diff:"Alta",   price:"115 €", desc:"Embocadura, primeras notas y escala de Do mayor en trompeta." },
  { id:36, cat:"musica",       icon:"🎻",  name:"Violín principiante",    time:"~14 s", diff:"Alta",   price:"145 €", desc:"Sujeción del arco, postura y primeras melodías en violín con afinación básica." },
  { id:37, cat:"musica",       icon:"🎙",  name:"Canto básico",           time:"~10 s", diff:"Media",  price:"100 €", desc:"Técnica vocal, respiración diafragmática y afinación para cantar individualmente." },
  { id:38, cat:"musica",       icon:"🎧",  name:"Producción musical DAW", time:"~12 s", diff:"Media",  price:"120 €", desc:"Estructura de un proyecto en Ableton Live o GarageBand, loops, MIDI y mezcla básica." },
  { id:39, cat:"musica",       icon:"🎷",  name:"Saxofón básico",         time:"~13 s", diff:"Alta",   price:"130 €", desc:"Digitación de las primeras notas, respiración y primeras melodías en saxofón alto." },
  { id:40, cat:"musica",       icon:"🪗",  name:"Acordeón principiante",  time:"~11 s", diff:"Alta",   price:"110 €", desc:"Fuelle, bajos y primeros acordes de acompañamiento en acordeón diatónico." },

  /* ── COMUNICACIÓN ────────────────────────────────────── */
  { id:41, cat:"comunicacion", icon:"🎤",  name:"Oratoria pública",       time:"~10 s", diff:"Media",  price:"100 €", desc:"Control de la voz, gestión del miedo escénico y estructura de un discurso persuasivo." },
  { id:42, cat:"comunicacion", icon:"✍",  name:"Escritura creativa",      time:"~8 s",  diff:"Media",  price:"80 €",  desc:"Narración, punto de vista, diálogo y técnicas de edición para relato corto y microficción." },
  { id:43, cat:"comunicacion", icon:"🤝",  name:"Negociación",            time:"~9 s",  diff:"Media",  price:"110 €", desc:"Técnicas BATNA, anclaje y escucha activa para negociaciones laborales y comerciales." },
  { id:44, cat:"comunicacion", icon:"📧",  name:"Redacción profesional",  time:"~5 s",  diff:"Baja",   price:"50 €",  desc:"Correos, informes y presentaciones claras y concisas para el entorno laboral." },
  { id:45, cat:"comunicacion", icon:"🧠",  name:"Escucha activa",         time:"~6 s",  diff:"Baja",   price:"55 €",  desc:"Técnicas de paráfrasis, validación emocional y preguntas abiertas para comunicarte mejor." },
  { id:46, cat:"comunicacion", icon:"🎯",  name:"Elevator pitch",         time:"~5 s",  diff:"Baja",   price:"60 €",  desc:"Presenta tu idea, producto o candidatura en menos de 60 segundos de forma memorable." },
  { id:47, cat:"comunicacion", icon:"📢",  name:"Community management",   time:"~7 s",  diff:"Media",  price:"80 €",  desc:"Calendario editorial, tono de marca y métricas básicas en redes sociales." },
  { id:48, cat:"comunicacion", icon:"🗞",  name:"Periodismo básico",      time:"~8 s",  diff:"Media",  price:"75 €",  desc:"Pirámide invertida, verificación de fuentes y redacción de noticias para medios digitales." },
  { id:49, cat:"comunicacion", icon:"🧑‍💼", name:"Liderazgo de equipos",  time:"~9 s",  diff:"Media",  price:"115 €", desc:"Delegación, feedback constructivo y gestión de conflictos para líderes de pequeños equipos." },
  { id:50, cat:"comunicacion", icon:"💬",  name:"Mediación y arbitraje",  time:"~10 s", diff:"Alta",   price:"130 €", desc:"Principios de mediación, imparcialidad y técnicas de resolución de conflictos." },

  /* ── COCINA ──────────────────────────────────────────── */
  { id:51, cat:"cocina",       icon:"🍳",  name:"Cocina básica",          time:"~5 s",  diff:"Baja",   price:"45 €",  desc:"Técnicas esenciales: sofrito, cocción al vapor, salteado y emplatado básico." },
  { id:52, cat:"cocina",       icon:"🍞",  name:"Panadería artesanal",    time:"~8 s",  diff:"Media",  price:"70 €",  desc:"Amasado, fermentación y horneado de panes con levadura natural y masa madre." },
  { id:53, cat:"cocina",       icon:"🍰",  name:"Repostería",             time:"~7 s",  diff:"Media",  price:"65 €",  desc:"Bizcochos, cremas y decoración básica de tartas. Domina tiempos y temperaturas de horno." },
  { id:54, cat:"cocina",       icon:"🍣",  name:"Sushi básico",           time:"~9 s",  diff:"Media",  price:"80 €",  desc:"Preparación del arroz, técnica de enrollado y presentación de nigiri y maki caseros." },
  { id:55, cat:"cocina",       icon:"🍕",  name:"Pizza napolitana",       time:"~7 s",  diff:"Media",  price:"60 €",  desc:"Masa de larga fermentación, salsa base y cocción en horno doméstico." },
  { id:56, cat:"cocina",       icon:"🥩",  name:"Técnicas de asado",      time:"~6 s",  diff:"Media",  price:"65 €",  desc:"Marinados, puntos de cocción y sellado de carnes a la parrilla y al horno." },
  { id:57, cat:"cocina",       icon:"🥗",  name:"Cocina vegetariana",     time:"~6 s",  diff:"Baja",   price:"55 €",  desc:"Bases proteicas vegetales, aliños y elaboración de platos equilibrados sin carne." },
  { id:58, cat:"cocina",       icon:"🍜",  name:"Pasta fresca",           time:"~7 s",  diff:"Media",  price:"60 €",  desc:"Masa de pasta al huevo, laminado, corte y salsas clásicas italianas." },
  { id:59, cat:"cocina",       icon:"🍫",  name:"Chocolatería básica",    time:"~6 s",  diff:"Media",  price:"70 €",  desc:"Atemperado del chocolate, moldes, ganaches y trufas artesanales." },
  { id:60, cat:"cocina",       icon:"🥘",  name:"Cocina de temporada",    time:"~5 s",  diff:"Baja",   price:"45 €",  desc:"Planificación de menús según producto de temporada para ahorrar y comer mejor." },

  /* ── DEPORTE ─────────────────────────────────────────── */
  { id:61, cat:"deporte",      icon:"⚽",  name:"Técnica de fútbol",      time:"~11 s", diff:"Alta",   price:"90 €",  desc:"Control del balón, pase, regate y posicionamiento táctico básico." },
  { id:62, cat:"deporte",      icon:"🏊",  name:"Natación crol",          time:"~10 s", diff:"Alta",   price:"100 €", desc:"Técnica de brazada, patada y respiración lateral para nadar de forma eficiente." },
  { id:63, cat:"deporte",      icon:"🧘",  name:"Yoga principiante",      time:"~6 s",  diff:"Baja",   price:"55 €",  desc:"Posturas básicas (asanas), respiración pranayama y rutina de 20 minutos diarios." },
  { id:64, cat:"deporte",      icon:"🚴",  name:"Ciclismo de ruta",       time:"~7 s",  diff:"Media",  price:"70 €",  desc:"Posición en la bicicleta, cadencia, gestión del esfuerzo y lectura de rutas." },
  { id:65, cat:"deporte",      icon:"🥊",  name:"Boxeo básico",           time:"~9 s",  diff:"Media",  price:"85 €",  desc:"Guardia, jab, cross, gancho y desplazamiento básico para fitness y defensa personal." },
  { id:66, cat:"deporte",      icon:"🏋",  name:"Levantamiento de pesas", time:"~10 s", diff:"Alta",   price:"100 €", desc:"Técnica de sentadilla, peso muerto y press banca para sala de musculación." },
  { id:67, cat:"deporte",      icon:"🧗",  name:"Escalada básica",        time:"~10 s", diff:"Alta",   price:"95 €",  desc:"Técnica de pie, equilibrio, lectura de vías y aseguramiento en rocódromo." },
  { id:68, cat:"deporte",      icon:"🤸",  name:"Flexibilidad y movilidad",time:"~6 s", diff:"Baja",   price:"50 €",  desc:"Rutina de estiramientos progresivos para mejorar movilidad articular y prevenir lesiones." },
  { id:69, cat:"deporte",      icon:"🏃",  name:"Running técnico",        time:"~7 s",  diff:"Media",  price:"65 €",  desc:"Cadencia, pisada, respiración y plan de entrenamiento de 5 km para corredores populares." },
  { id:70, cat:"deporte",      icon:"🎾",  name:"Tenis básico",           time:"~10 s", diff:"Media",  price:"90 €",  desc:"Golpe de derecha, revés, servicio y posicionamiento en pista para iniciarse en el tenis." },

  /* ── ARTE ────────────────────────────────────────────── */
  { id:71, cat:"arte",         icon:"✏",  name:"Dibujo a lápiz",          time:"~12 s", diff:"Alta",   price:"110 €", desc:"Proporción, perspectiva, sombreado y retrato básico. Aprende a trasladar lo que ves al papel." },
  { id:72, cat:"arte",         icon:"🎨",  name:"Acuarela básica",        time:"~10 s", diff:"Media",  price:"90 €",  desc:"Mezcla de colores, técnica húmedo sobre húmedo y aguadas para paisajes y bocetos." },
  { id:73, cat:"arte",         icon:"📷",  name:"Fotografía básica",      time:"~7 s",  diff:"Media",  price:"75 €",  desc:"Triángulo de exposición (ISO, apertura, velocidad), composición y edición en Lightroom." },
  { id:74, cat:"arte",         icon:"🖥",  name:"Ilustración digital",    time:"~11 s", diff:"Alta",   price:"120 €", desc:"Uso de capas, pinceles y paletas en Procreate e Illustrator para ilustraciones vectoriales." },
  { id:75, cat:"arte",         icon:"🎭",  name:"Actuación básica",       time:"~10 s", diff:"Media",  price:"95 €",  desc:"Técnica Stanislavski, improvisación y trabajo corporal para actores principiantes." },
  { id:76, cat:"arte",         icon:"🧵",  name:"Costura básica",         time:"~8 s",  diff:"Media",  price:"70 €",  desc:"Punto de bastilla, pespunte, uso de máquina de coser y patronaje básico." },
  { id:77, cat:"arte",         icon:"🪴",  name:"Cerámica básica",        time:"~11 s", diff:"Alta",   price:"105 €", desc:"Centrado de arcilla, levantado de paredes y técnicas de alisado en torno de alfarero." },
  { id:78, cat:"arte",         icon:"🖌",  name:"Pintura al óleo",        time:"~12 s", diff:"Alta",   price:"125 €", desc:"Imprimación, mezcla de pigmentos, capas de veladura y técnica alla prima en óleo." },
  { id:79, cat:"arte",         icon:"✂",  name:"Origami avanzado",        time:"~8 s",  diff:"Media",  price:"55 €",  desc:"Bases intermedias del origami, pliegues en zigzag y modelos modulares de geometría avanzada." },
  { id:80, cat:"arte",         icon:"🎥",  name:"Guion cinematográfico",  time:"~10 s", diff:"Media",  price:"100 €", desc:"Estructura de tres actos, desarrollo de personajes y formato de guion profesional." },

  /* ── BIENESTAR ───────────────────────────────────────── */
  { id:81, cat:"bienestar",    icon:"🧘",  name:"Meditación mindfulness", time:"~5 s",  diff:"Baja",   price:"45 €",  desc:"Técnica de atención plena, respiración consciente y rutina de 10 minutos para reducir el estrés." },
  { id:82, cat:"bienestar",    icon:"😴",  name:"Higiene del sueño",      time:"~4 s",  diff:"Baja",   price:"35 €",  desc:"Rutinas de relajación, control de luz azul y hábitos nocturnos para dormir mejor." },
  { id:83, cat:"bienestar",    icon:"🥦",  name:"Nutrición básica",       time:"~6 s",  diff:"Baja",   price:"55 €",  desc:"Macronutrientes, micronutrientes y planificación de menús saludables sencillos." },
  { id:84, cat:"bienestar",    icon:"🗓",  name:"Gestión del tiempo",     time:"~5 s",  diff:"Baja",   price:"50 €",  desc:"Técnica Pomodoro, matriz de Eisenhower y planificación semanal para ser más productivo." },
  { id:85, cat:"bienestar",    icon:"💆",  name:"Gestión del estrés",     time:"~5 s",  diff:"Baja",   price:"50 €",  desc:"Respiración 4-7-8, reestructuración cognitiva y hábitos de recuperación." },
  { id:86, cat:"bienestar",    icon:"📓",  name:"Journaling terapéutico", time:"~4 s",  diff:"Baja",   price:"30 €",  desc:"Técnicas de escritura expresiva, gratitud y reflexión para mejorar la claridad mental." },

  /* ── PROFESIONAL ─────────────────────────────────────── */
  { id:87, cat:"profesional",  icon:"📊",  name:"Análisis de datos",      time:"~10 s", diff:"Media",  price:"115 €", desc:"Estadística descriptiva, limpieza de datos y visualización básica con Python/Pandas." },
  { id:88, cat:"profesional",  icon:"💰",  name:"Finanzas personales",    time:"~6 s",  diff:"Baja",   price:"60 €",  desc:"Presupuesto mensual, fondo de emergencia, deuda y primeros pasos en inversión." },
  { id:89, cat:"profesional",  icon:"📑",  name:"Gestión de proyectos",   time:"~8 s",  diff:"Media",  price:"95 €",  desc:"Metodología Scrum, Kanban, definición de alcance y gestión de riesgos." },
  { id:90, cat:"profesional",  icon:"🧾",  name:"Contabilidad básica",    time:"~8 s",  diff:"Media",  price:"90 €",  desc:"Asientos contables, balance, cuenta de resultados y declaraciones simples para autónomos." },
  { id:91, cat:"profesional",  icon:"⚖",  name:"Derecho laboral básico",  time:"~7 s",  diff:"Media",  price:"80 €",  desc:"Derechos y deberes del trabajador, tipos de contrato, despido y baja médica." },
  { id:92, cat:"profesional",  icon:"🧑‍🎓", name:"Técnicas de estudio",  time:"~5 s",  diff:"Baja",   price:"45 €",  desc:"Método Cornell, mapas mentales, espaciado repetición y técnica Feynman." },
  { id:93, cat:"profesional",  icon:"🏠",  name:"Primeros auxilios",      time:"~8 s",  diff:"Media",  price:"85 €",  desc:"RCP básica, maniobra de Heimlich, atención a heridas y protocolo de emergencia." },
  { id:94, cat:"profesional",  icon:"📣",  name:"Marketing digital básico",time:"~7 s", diff:"Media",  price:"80 €",  desc:"SEO on-page, Google Ads básico, email marketing y métricas de conversión." },
  { id:95, cat:"profesional",  icon:"🔧",  name:"Bricolaje doméstico",    time:"~6 s",  diff:"Baja",   price:"50 €",  desc:"Uso de herramientas básicas, taladro, anclajes y reparaciones menores en el hogar." },
  { id:96, cat:"profesional",  icon:"🌿",  name:"Jardinería básica",      time:"~5 s",  diff:"Baja",   price:"40 €",  desc:"Sustrato, riego, poda y control de plagas para mantener un jardín o terraza en buen estado." },
  { id:97, cat:"profesional",  icon:"🚗",  name:"Mecánica básica",        time:"~8 s",  diff:"Media",  price:"75 €",  desc:"Cambio de rueda, revisión de fluidos, lectura de averías OBD2 y mantenimiento del coche." },
  { id:98, cat:"profesional",  icon:"🐾",  name:"Cuidado de mascotas",    time:"~5 s",  diff:"Baja",   price:"40 €",  desc:"Alimentación, higiene, vacunas y señales de salud básicas para perros y gatos." },
  { id:99, cat:"profesional",  icon:"📸",  name:"Edición fotográfica",    time:"~7 s",  diff:"Media",  price:"70 €",  desc:"Ajuste de exposición, color, recorte y retoque básico en Lightroom para redes sociales." },
  { id:100,cat:"profesional",  icon:"🎙",  name:"Podcasting básico",      time:"~6 s",  diff:"Media",  price:"65 €",  desc:"Grabación con micrófono USB, edición en Audacity y publicación en Spotify for Podcasters." },
];

/* ── Configuración paginación ──────────────────────────────────────────── */
const POR_PAGINA = 18;

/* ── Estado ────────────────────────────────────────────────────────────── */
let filtroActivo     = "all";
let busqueda         = "";
let paginaActual     = 1;
let habilidadAbierta = null;

/* ── Utilidades almacenamiento (localStorage + cookie fallback) ─────────── */
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
function estaAdquirida(id) { return getAdquiridas().includes(id); }
function getUsedMb() { return getAdquiridas().length * MB_PER_SKILL; }
function canAcquireOneMore() { return getUsedMb() + MB_PER_SKILL <= getTotalMb(); }

/* ── DOM refs ──────────────────────────────────────────────────────────── */
const grid         = document.getElementById("catalogGrid");
const noResults    = document.getElementById("noResults");
const resultsCount = document.getElementById("resultsCount");
const searchInput  = document.getElementById("searchInput");
const searchClear  = document.getElementById("searchClear");
const resetSearch  = document.getElementById("resetSearch");
const filterBtns   = document.querySelectorAll(".filter-btn");
const paginationEl = document.getElementById("pagination");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose   = document.getElementById("modalClose");
const modalCta     = document.getElementById("modalCta");
const modalTransfer = document.getElementById("modalTransfer");
const transferCircle = document.getElementById("transferCircle");
const transferPercent = document.getElementById("transferPercent");
const transferText = document.getElementById("transferText");
const transferBubbleLayer = document.getElementById("transferBubbleLayer");
const modalOwnedNote = document.getElementById("modalOwnedNote");

let transferInterval = null;
const MB_PER_SKILL = 45;
const TOTAL_MB_KEY = 'st_total_mb';
const TOTAL_MB_COOKIE = 'st_total_mb_cookie';

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

/* ── Filtrado ──────────────────────────────────────────────────────────── */
function filtrar() {
  return HABILIDADES.filter(h => {
    const matchCat    = filtroActivo === "all" || h.cat === filtroActivo;
    const q           = busqueda.toLowerCase();
    const matchSearch = !q || h.name.toLowerCase().includes(q) || h.desc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
}

/* ── Render ────────────────────────────────────────────────────────────── */
function render() {
  const total    = filtrar();
  const inicio   = (paginaActual - 1) * POR_PAGINA;
  const pagina   = total.slice(inicio, inicio + POR_PAGINA);
  const totalPag = Math.ceil(total.length / POR_PAGINA);

  grid.innerHTML = "";

  if (total.length === 0) {
    noResults.hidden         = false;
    resultsCount.textContent = "";
    paginationEl.innerHTML   = "";
    return;
  }

  noResults.hidden         = true;
  resultsCount.textContent = total.length === 1
    ? "1 habilidad encontrada"
    : `${total.length} habilidades encontradas`;

  const adquiridas = getAdquiridas();

  pagina.forEach(h => {
    const owned = adquiridas.includes(h.id);
    const card  = document.createElement("div");
    card.className = "cat-card" + (owned ? " cat-card--owned" : "");
    card.dataset.cat = h.cat;
    card.tabIndex   = 0;
    card.setAttribute("role", "listitem");

    card.innerHTML = `
      <span class="cat-card-icon">${h.icon}</span>
      <span class="cat-card-name">${h.name}</span>
      <span class="cat-card-tag">${labelCat(h.cat)}</span>
      ${owned ? '<span class="cat-card-owned-badge">✓ Adquirida</span>' : ""}
      <div class="cat-card-bottom">
        <span class="cat-card-time">⚡ ${h.time}</span>
        <span class="cat-card-price">${owned ? "—" : h.price}</span>
      </div>`;

    card.addEventListener("click",   () => abrirModal(h));
    card.addEventListener("keydown", e  => { if (e.key === "Enter") abrirModal(h); });
    grid.appendChild(card);
  });

  renderPaginacion(totalPag);
}

/* ── Paginación ────────────────────────────────────────────────────────── */
function renderPaginacion(total) {
  if (total <= 1) { paginationEl.innerHTML = ""; return; }

  const pages = paginasVisibles(paginaActual, total);
  let html = "";

  html += `<button class="pag-btn${paginaActual===1?" pag-btn--disabled":""}"
    data-page="${paginaActual-1}" aria-label="Anterior"${paginaActual===1?" disabled":""}>‹</button>`;

  let prev = null;
  pages.forEach(p => {
    if (prev !== null && p - prev > 1) html += `<span class="pag-dots" aria-hidden="true">…</span>`;
    html += `<button class="pag-btn${p===paginaActual?" pag-btn--active":""}"
      data-page="${p}" aria-label="Página ${p}" aria-current="${p===paginaActual?"page":"false"}">${p}</button>`;
    prev = p;
  });

  html += `<button class="pag-btn${paginaActual===total?" pag-btn--disabled":""}"
    data-page="${paginaActual+1}" aria-label="Siguiente"${paginaActual===total?" disabled":""}>›</button>`;

  paginationEl.innerHTML = html;
  paginationEl.querySelectorAll(".pag-btn:not([disabled])").forEach(btn => {
    btn.addEventListener("click", () => {
      paginaActual = parseInt(btn.dataset.page);
      render();
      grid.scrollIntoView({ behavior:"smooth", block:"start" });
    });
  });
}

function paginasVisibles(actual, total) {
  const s = new Set([1, total]);
  for (let i = Math.max(1,actual-1); i <= Math.min(total,actual+1); i++) s.add(i);
  return [...s].sort((a,b) => a-b);
}

/* ── Etiquetas categoría ───────────────────────────────────────────────── */
function labelCat(cat) {
  return { idiomas:"Idiomas", tecnologia:"Tecnología", musica:"Música",
    comunicacion:"Comunicación", cocina:"Cocina", deporte:"Deporte",
    arte:"Arte", bienestar:"Bienestar", profesional:"Profesional" }[cat] || cat;
}

/* ── Modal ─────────────────────────────────────────────────────────────── */
function abrirModal(h) {
  habilidadAbierta = h;
  const owned      = estaAdquirida(h.id);

  document.getElementById("modalIcon").textContent  = h.icon;
  document.getElementById("modalTitle").textContent = h.name;
  document.getElementById("modalCat").textContent   = labelCat(h.cat);
  document.getElementById("modalTime").textContent  = h.time;
  document.getElementById("modalDiff").textContent  = h.diff;
  document.getElementById("modalPrice").textContent = owned ? "Ya adquirida" : h.price;
  document.getElementById("modalDesc").textContent  = h.desc;

  modalCta.style.background = "";
  modalCta.style.cursor     = "";
  modalOverlay.classList.remove("transferring");
  modalTransfer.hidden = true;
  modalOwnedNote.hidden = true;
  modalOwnedNote.classList.remove("is-warning");
  transferCircle.classList.remove("is-complete");
  transferCircle.classList.remove("is-loading");
  transferCircle.style.setProperty("--progress", "0deg");
  transferPercent.textContent = "0%";
  transferText.textContent = "Descargando habilidad...";
  transferBubbleLayer.innerHTML = "";

  if (owned) {
    modalCta.hidden = true;
    modalOwnedNote.hidden = false;
    modalOwnedNote.textContent = "Esta habilidad ya esta integrada en tu biblioteca.";
  } else {
    if (!canAcquireOneMore()) {
      modalCta.hidden = true;
      modalOwnedNote.hidden = false;
      modalOwnedNote.classList.add("is-warning");
      modalOwnedNote.textContent = "No se puede comprar: se supera el limite de espacio cerebral. Borra una habilidad en tu biblioteca para continuar.";
    } else {
      modalCta.hidden = false;
      modalCta.textContent = `⚡ Descargar habilidad — ${h.price}`;
      modalCta.disabled    = false;
    }
  }

  modalOverlay.hidden          = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function cerrarModal() {
  if (transferInterval) {
    clearInterval(transferInterval);
    transferInterval = null;
  }
  transferCircle.classList.remove("is-loading");
  modalOverlay.hidden          = true;
  document.body.style.overflow = "";
  habilidadAbierta             = null;
}

function setTransferProgress(value) {
  const pct = Math.max(0, Math.min(100, value));
  transferPercent.textContent = `${pct}%`;
  transferCircle.style.setProperty("--progress", `${Math.round((pct / 100) * 360)}deg`);
}

function triggerBubbleBurst() {
  const total = 18;
  const colors = ["rgba(255,140,0,0.95)", "rgba(63,52,186,0.9)", "rgba(92,82,216,0.9)", "rgba(20,169,104,0.85)"];

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

modalCta.addEventListener("click", () => {
  if (!habilidadAbierta || estaAdquirida(habilidadAbierta.id)) return;
  if (!canAcquireOneMore()) {
    modalTransfer.hidden = true;
    modalCta.hidden = true;
    modalOwnedNote.hidden = false;
    modalOwnedNote.classList.add("is-warning");
    modalOwnedNote.textContent = "No se puede comprar: se supera el limite de espacio cerebral. Borra una habilidad en tu biblioteca para continuar.";
    return;
  }

  modalOverlay.classList.add("transferring");
  modalTransfer.hidden = false;
  modalOwnedNote.hidden = true;
  transferCircle.classList.remove("is-complete");
  transferCircle.classList.add("is-loading");
  transferBubbleLayer.innerHTML = "";
  transferText.textContent = "Descargando habilidad...";
  modalCta.textContent = "Descargando...";
  modalCta.disabled    = true;

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
      transferText.textContent = "Habilidad instalada con exito";

      const arr = getAdquiridas();
      if (!arr.includes(habilidadAbierta.id)) {
        arr.push(habilidadAbierta.id);
        setAdquiridas(arr);
        // Try to install immediately if there is room
        try {
          let installed = [];
          if (typeof getInst === 'function') installed = getInst();
          else installed = JSON.parse(localStorage.getItem('st_instaladas') || '[]');
          const totalMb = getTotalMb();
          if (!installed.includes(habilidadAbierta.id) && (installed.length + 1) * MB_PER_SKILL <= totalMb) {
            installed.push(habilidadAbierta.id);
            if (typeof setInst === 'function') setInst(installed);
            else { try { localStorage.setItem('st_instaladas', JSON.stringify(installed)); } catch {} writeCookie('st_instaladas_cookie', JSON.stringify(installed), 365); }
          }
        } catch(e) { /* ignore */ }
      }

      modalCta.textContent      = "✓ Habilidad transferida";
      modalCta.style.background = "linear-gradient(110deg,#059669,#10B981)";

      setTimeout(() => {
        cerrarModal();
        render();
      }, 1100);
    }
  }, 40);
});

modalClose.addEventListener("click", cerrarModal);
modalOverlay.addEventListener("click", e => { if (e.target === modalOverlay) cerrarModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !modalOverlay.hidden) cerrarModal(); });

/* ── Filtros ───────────────────────────────────────────────────────────── */
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filtroActivo = btn.dataset.cat;
    paginaActual = 1;
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    render();
  });
});

/* ── Búsqueda ──────────────────────────────────────────────────────────── */
searchInput.addEventListener("input", () => {
  busqueda           = searchInput.value.trim();
  paginaActual       = 1;
  searchClear.hidden = !busqueda;
  render();
});

searchClear.addEventListener("click", () => {
  searchInput.value  = "";
  busqueda           = "";
  paginaActual       = 1;
  searchClear.hidden = true;
  searchInput.focus();
  render();
});

if (resetSearch) {
  resetSearch.addEventListener("click", () => {
    busqueda = ""; filtroActivo = "all"; paginaActual = 1;
    searchInput.value = ""; searchClear.hidden = true;
    filterBtns.forEach(b => b.classList.toggle("active", b.dataset.cat==="all"));
    render();
  });
}

/* ── Arranque ──────────────────────────────────────────────────────────── */
render();
window.addEventListener('storage', e => {
  if (!e.key || e.key === 'st_total_mb' || e.key === 'st_total_mb_changed_at') render();
});