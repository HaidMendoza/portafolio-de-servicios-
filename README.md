# Portafolio Haid Mendoza - Full Stack Software Architect

Portafolio profesional enterprise diseñado para Haid José Mendoza de Ávila, Ingeniero de Sistemas Full Stack y Arquitecto de Software especializado en sistemas robustos de alta escalabilidad.

## Características Principales

### Diseño UI/UX Enterprise
- **Dark Mode Profundo**: Fondo zinc/slate oscuro (#09090b) con acentos morado neón y esmeralda técnico
- **Tipografía Moderna**: Fuentes sans-serif (Inter) para textos y monoespaciada (JetBrains Mono) para código técnico
- **Iconografía Profesional**: SVGs y logos reales de tecnologías (devicons), sin emojis
- **Micro-interacciones**: Efectos hover, glassmorphism, animaciones scroll y gradientes sutiles
- **Footer Enterprise**: Sección de pie de página profesional con navegación, servicios y contacto

### Secciones Técnicas Especializadas
- **Hero Section**: Propuesta de valor con filosofía de desarrollo (Clean Architecture, SOLID)
- **Perfil Profesional**: Layout reorganizado con visualización de arquitectura por capas y animaciones
- **Stack Tecnológico**: Carrusel interactivo con logos reales de tecnologías por categorías
- **Experiencia en Producción**: Timeline centrado mejorado con diseño alternado
- **Diagrama de Arquitectura**: Flujo visual de sistemas distribuidos enterprise
- **Principios de Diseño**: Clean Code, SOLID, DDD, TDD con iconografía SVG

### Stack Tecnológico Completo con Logos Reales
- **Frontend & UI**: Angular, RxJS, Tailwind CSS, SCSS/Sass, Module Federation, Bootstrap
- **Backend & APIs**: Spring Boot 3, ASP.NET Core, NestJS, Hibernate, Entity Framework, Flyway, Maven
- **Bases de Datos**: PostgreSQL, SQL Server, Oracle, MySQL, Redis, Stored Procedures
- **DevOps & Tools**: Git, Docker, CI/CD Pipelines, Jest, Jasmine, Karma, Mockito, Cypress

## Estructura del Proyecto

```
Portafolio Haid Mendoza/
├── index.html          # Estructura HTML semántica con secciones técnicas
├── styles.css          # Estilos CSS enterprise con animaciones y responsive design
├── script.js           # Interactividad JavaScript incluyendo carrusel de tecnologías
└── README.md           # Documentación del proyecto
```

## Secciones del Portafolio

### 1. Hero Section
- Nombre completo y rol profesional
- Filosofía de desarrollo (Clean Architecture, SOLID)
- Métricas clave (8+ años, 15+ microfrontends, 99.9% uptime)
- Bloque de código TypeScript mostrando arquitectura de sistemas

### 2. Perfil Profesional
- Descripción detallada del enfoque enterprise
- Filosofía: "No parto del framework, parto del problema"
- Highlights técnicos con iconos SVG profesionales

### 3. Stack Tecnológico (Carrusel Interactivo)
- **Frontend & UI**: Angular, RxJS, Tailwind CSS, SCSS, Module Federation, Signals
- **Backend & APIs**: Spring Boot 3, ASP.NET Core, NestJS, Hibernate, Entity Framework
- **Bases de Datos**: PostgreSQL, SQL Server, Oracle, MySQL, Redis, Stored Procedures
- **DevOps & Tools**: Git, Docker, CI/CD, Jest, Jasmine, Karma, Mockito, Cypress

### 4. Experiencia en Producción
- **ERP CAFIP / Sistema Contable** (Mar 2026 – Sep 2026): Microfrontends con Module Federation
- **Sistema Poseidon** (Nov 2025 – Sep 2026): Microservicios y dashboards en Angular
- **Gestión de Datos de Tierras Agrícolas** (2025): Desarrollo end-to-end con optimización DB
- **Software de Liquidaciones** (2023 – 2024): Monolito modular con performance ops

### 5. Arquitectura Enterprise
- Diagrama visual de flujo distribuido
- Host Shell → Microfrontends → Gateway/BFF → Microservicios → Persistencia
- Principios: Clean Code, SOLID, DDD, TDD

### 6. Contacto
- Enlaces profesionales con iconos SVG
- Terminal visual con efecto typing

## 🛠️ Instalación y Ejecución

### Opción 1: Servidor Python (Recomendado)
```bash
cd "c:/Users/Haid/Desktop/Portafolio Haid Mendoza"
python -m http.server 8000
```
Luego abre http://localhost:8000 en tu navegador.

### Opción 2: Servidor Node.js
```bash
cd "c:/Users/Haid/Desktop/Portafolio Haid Mendoza"
npx serve
```

### Opción 3: Abrir directamente
Simplemente abre el archivo `index.html` en tu navegador.

## 🎨 Características Técnicas

### Responsive Design
- Optimizado para móviles (320px+)
- Adaptado para tablets (768px+)
- Pantallas desktop (1024px+)
- Soporte para pantallas ultrawide

### Performance
- CSS optimizado con variables custom
- JavaScript con Intersection Observer para animaciones
- Lazy loading para imágenes
- Debouncing en eventos resize

### Accesibilidad
- Navegación por teclado
- Contraste WCAG AA compliant
- Atributos ARIA apropiados
- Focus management

### Interactividad
- Scroll-based navigation highlighting
- Efecto glow en tarjetas de servicios
- Terminal con typing effect
- Contadores animados para métricas
- Parallax effect en hero gradient

## 🎯 Personalización

### Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --bg-primary: #09090b;
    --accent-purple: #a855f7;
    --accent-emerald: #10b981;
    /* ... más variables */
}
```

### Contenido
Modifica el contenido en `index.html`:
- Actualiza métricas en `.hero-metrics`
- Personaliza servicios en `.services-grid`
- Ajusta el diagrama de arquitectura
- Actualiza información de contacto

### Animaciones
Ajusta timing y efectos en `script.js`:
- Velocidad de scroll animations
- Duración de typing effect
- Configuración de Intersection Observer

## 📱 Vista Previa

El portafolio incluye:
- Navegación fija con glassmorphism
- Hero section con código visual interactivo
- Grid de servicios con efectos hover
- Diagrama de arquitectura animado
- Sección de contacto con terminal visual
- Footer minimalista

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Custom properties, Grid, Flexbox, Animations
- **JavaScript (ES6+)**: Modern JS con APIs nativas
- **Google Fonts**: Inter y JetBrains Mono
- **Sin dependencias**: Todo código vanilla para máximo rendimiento

## 📝 Notas de Desarrollo

### Clean Code Implementation
- Código modular y escalable
- Nombres expresivos en variables y funciones
- Comentarios donde es necesario
- Separación de responsabilidades

### Performance Optimization
- CSS crítico inline
- JavaScript deferido
- Optimización de renderizado
- Event delegation donde es apropiado

### Browser Compatibility
- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Mobile browsers iOS/Android

## 🚀 Próximas Mejoras (Opcionales)

- [ ] Agregar modo claro/light theme toggle
- [ ] Implementar formulario de contacto funcional
- [ ] Agregar proyectos/casos de estudio
- [ ] Integrar analytics
- [ ] PWA support con service worker
- [ ] Multi-language support (i18n)

## 👤 Autor

**Haid Mendoza**  
Full Stack Software Architect  
Especializado en arquitecturas distribuidas y sistemas de alta concurrencia.

---

*Este portafolio fue diseñado siguiendo principios de Clean Code, SOLID y mejores prácticas de UI/UX moderna.*