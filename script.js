// ===== Navigation Toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===== Scroll-based Navigation Highlight =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Intersection Observer for Scroll Animations =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// ===== Service Card Glow Effect =====
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
    });
});

// ===== Tech Item Antigravity Effect =====
const techItems = document.querySelectorAll('.tech-item');

techItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        item.style.setProperty('--mouse-x', `${x}%`);
        item.style.setProperty('--mouse-y', `${y}%`);
    });
});

// ===== Code Block Copy Functionality =====
const codeActionButtons = document.querySelectorAll('.code-action');

codeActionButtons.forEach(button => {
    button.addEventListener('click', async () => {
        const codeBlock = button.closest('.code-block');
        const codeContent = codeBlock.querySelector('.code-content').textContent;
        
        try {
            await navigator.clipboard.writeText(codeContent);
            
            // Visual feedback
            const originalHTML = button.innerHTML;
            button.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M5 13l4 4L19 7"/>
                </svg>
            `;
            button.style.color = 'var(--accent-emerald)';
            
            setTimeout(() => {
                button.innerHTML = originalHTML;
                button.style.color = '';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    });
});

// ===== Navbar Background on Scroll =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(9, 9, 11, 0.95)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(18, 18, 20, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// ===== Terminal Typing Effect =====
const terminalLines = document.querySelectorAll('.terminal-line');
let currentLine = 0;

function typeTerminal() {
    if (currentLine < terminalLines.length) {
        terminalLines[currentLine].style.opacity = '1';
        currentLine++;
        setTimeout(typeTerminal, 500);
    }
}

// Start typing effect when terminal is visible
const terminalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            terminalLines.forEach(line => line.style.opacity = '0');
            currentLine = 0;
            setTimeout(typeTerminal, 500);
            terminalObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const terminal = document.querySelector('.terminal');
if (terminal) {
    terminalObserver.observe(terminal);
}

// ===== Counter Animation for Metrics =====
const metrics = document.querySelectorAll('.metric-value');

const metricObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = target.textContent;
            const isPercentage = finalValue.includes('%');
            const isPlus = finalValue.includes('+');
            const numericValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));
            
            let current = 0;
            const increment = numericValue / 50;
            const duration = 2000;
            const stepTime = duration / 50;
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    current = numericValue;
                    clearInterval(counter);
                }
                
                let displayValue = isPercentage ? 
                    `${current.toFixed(1)}%` : 
                    `${Math.floor(current)}${isPlus ? '+' : ''}`;
                
                target.textContent = displayValue;
            }, stepTime);
            
            metricObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

metrics.forEach(metric => metricObserver.observe(metric));

// ===== Parallax Effect for Hero Gradient =====
const heroGradient = document.querySelector('.hero-gradient');

window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 10;
    const y = (e.clientY / window.innerHeight) * 10;
    
    if (heroGradient) {
        heroGradient.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    }
});

// ===== Architecture Node Interactive States =====
const archNodes = document.querySelectorAll('.arch-node');

archNodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
        // Add active state to connected nodes
        const nextNode = node.nextElementSibling;
        if (nextNode && nextNode.classList.contains('arch-connector')) {
            nextNode.querySelector('.arch-line').style.background = 
                'linear-gradient(to bottom, var(--accent-purple-light), var(--accent-emerald-light))';
        }
    });
    
    node.addEventListener('mouseleave', () => {
        // Reset connector styles
        const connectors = document.querySelectorAll('.arch-line');
        connectors.forEach(connector => {
            connector.style.background = 'linear-gradient(to bottom, var(--accent-purple), var(--accent-emerald))';
        });
    });
});

// ===== Button Ripple Effect =====
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== Lazy Loading for Performance =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== Contact Form Handling (Placeholder) =====
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = '¡Mensaje enviado!';
            submitBtn.style.background = 'var(--gradient-emerald)';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                contactForm.reset();
            }, 2000);
        }, 1500);
    });
}

// ===== Performance Optimization: Debounce Resize Events =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle resize events with debounce
const handleResize = debounce(() => {
    // Reset any resize-dependent calculations
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
}, 250);

window.addEventListener('resize', handleResize);

// ===== Accessibility: Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
    // Handle Escape key to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
    
    // Handle Tab key for focus management
    if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});

// ===== Tech Stack Carousel Functionality =====
class TechCarousel {
    constructor() {
        this.initTabs();
        this.initCarousels();
    }

    initTabs() {
        const tabs = document.querySelectorAll('.tech-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const category = tab.dataset.category;
                this.switchCategory(category);
                
                // Update active tab with Tailwind classes
                tabs.forEach(t => {
                    t.classList.remove('active', 'bg-purple-600', 'text-white', 'border-purple-500', 'shadow-lg', 'shadow-purple-500/20');
                    t.classList.add('bg-zinc-800', 'text-zinc-300', 'border-zinc-700');
                });
                tab.classList.remove('bg-zinc-800', 'text-zinc-300', 'border-zinc-700');
                tab.classList.add('active', 'bg-purple-600', 'text-white', 'border-purple-500', 'shadow-lg', 'shadow-purple-500/20');
            });
        });
    }

    switchCategory(category) {
        // Hide all carousel containers
        document.querySelectorAll('.tech-carousel-container').forEach(container => {
            container.classList.remove('active');
        });
        
        // Show selected category carousel
        const targetCarousel = document.getElementById(`${category}-carousel`);
        if (targetCarousel) {
            targetCarousel.classList.add('active');
        }
    }

    initCarousels() {
        const carousels = document.querySelectorAll('.tech-carousel');
        carousels.forEach(carousel => {
            this.initSingleCarousel(carousel);
        });
    }

    initSingleCarousel(carousel) {
        const slides = carousel.querySelectorAll('.tech-slide');
        const container = carousel.parentElement;
        const buttons = container.querySelectorAll('.carousel-btn');
        const prevBtn = buttons[0];
        const nextBtn = buttons[1];
        const dotsContainer = container.querySelector('.carousel-dots');
        
        let currentIndex = 0;
        const totalSlides = slides.length;

        // Clear existing dots and create new ones
        if (dotsContainer) {
            dotsContainer.innerHTML = '';
            slides.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.classList.add('carousel-dot', 'w-2.5', 'h-2.5', 'rounded-full', 'bg-zinc-600', 'transition-all', 'duration-300', 'hover:bg-purple-500');
                if (index === 0) {
                    dot.classList.add('active', 'bg-purple-500', 'w-6');
                }
                dot.addEventListener('click', () => goToSlide(index));
                dotsContainer.appendChild(dot);
            });
        }

        // Navigation functions
        const goToSlide = (index) => {
            slides.forEach(slide => {
                slide.classList.remove('active');
                slide.style.display = 'none';
            });
            if (dotsContainer) {
                const dots = dotsContainer.querySelectorAll('.carousel-dot');
                dots.forEach(dot => {
                    dot.classList.remove('active', 'bg-purple-500', 'w-6');
                    dot.classList.add('bg-zinc-600', 'w-2.5');
                });
                if (dots[index]) {
                    dots[index].classList.remove('bg-zinc-600', 'w-2.5');
                    dots[index].classList.add('active', 'bg-purple-500', 'w-6');
                }
            }
            slides[index].classList.add('active');
            slides[index].style.display = 'block';
            currentIndex = index;
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            goToSlide(currentIndex);
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            goToSlide(currentIndex);
        };

        // Event listeners
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);

        // Auto-slide (optional - comment out if not desired)
        let autoSlideInterval = setInterval(nextSlide, 5000);

        // Pause on hover
        carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        carousel.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(nextSlide, 5000);
        });

        // Keyboard navigation
        carousel.parentElement.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });
    }
}

// ===== Tech Stack Carousel & Tab Controller =====
class TechStackCarousel {
    constructor() {
        this.tabs = document.querySelectorAll('#stack-tabs .stack-tab');
        this.panels = document.querySelectorAll('#stack-carousel-container .stack-panel');
        this.dots = document.querySelectorAll('#stack-dots .stack-dot');
        this.prevBtn = document.getElementById('stack-prev');
        this.nextBtn = document.getElementById('stack-next');
        this.counter = document.getElementById('stack-counter');
        this.container = document.getElementById('stack-carousel-container');
        this.currentIndex = 0;
        this.total = this.panels.length;

        if (this.total === 0) return;
        this.init();
    }

    init() {
        this.tabs.forEach((tab, idx) => {
            tab.addEventListener('click', () => this.goTo(idx));
        });

        this.dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => this.goTo(idx));
        });

        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }

        // Keyboard arrow navigation
        window.addEventListener('keydown', (e) => {
            const rect = this.container ? this.container.getBoundingClientRect() : null;
            if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
                if (e.key === 'ArrowLeft') this.prev();
                if (e.key === 'ArrowRight') this.next();
            }
        });

        // Touch swipe support
        if (this.container) {
            let startX = 0;
            this.container.addEventListener('touchstart', (e) => {
                startX = e.changedTouches[0].screenX;
            }, { passive: true });

            this.container.addEventListener('touchend', (e) => {
                const endX = e.changedTouches[0].screenX;
                const diff = startX - endX;
                if (Math.abs(diff) > 40) {
                    if (diff > 0) this.next();
                    else this.prev();
                }
            }, { passive: true });
        }
    }

    goTo(index) {
        if (index < 0 || index >= this.total) return;
        this.currentIndex = index;

        // Update tabs
        this.tabs.forEach((tab, idx) => {
            if (idx === index) {
                tab.classList.add('stack-tab-active');
            } else {
                tab.classList.remove('stack-tab-active');
            }
        });

        // Update panels with antigravity entrance animation
        this.panels.forEach((panel, idx) => {
            if (idx === index) {
                panel.classList.remove('hidden');
                panel.classList.remove('antigravity-panel-enter');
                void panel.offsetWidth; // trigger reflow
                panel.classList.add('antigravity-panel-enter');
            } else {
                panel.classList.add('hidden');
                panel.classList.remove('antigravity-panel-enter');
            }
        });

        // Update indicator dots
        this.dots.forEach((dot, idx) => {
            if (idx === index) {
                dot.classList.remove('w-2', 'bg-zinc-300', 'dark:bg-zinc-700');
                dot.classList.add('w-6', 'bg-purple-500');
            } else {
                dot.classList.remove('w-6', 'bg-purple-500');
                dot.classList.add('w-2', 'bg-zinc-300', 'dark:bg-zinc-700');
            }
        });

        // Update counter
        if (this.counter) {
            this.counter.textContent = `0${index + 1} / 0${this.total}`;
        }
    }

    next() {
        const nextIdx = (this.currentIndex + 1) % this.total;
        this.goTo(nextIdx);
    }

    prev() {
        const prevIdx = (this.currentIndex - 1 + this.total) % this.total;
        this.goTo(prevIdx);
    }
}

// ===== Projects Carousel Controller =====
class ProjectsCarousel {
    constructor() {
        this.track = document.getElementById('proj-track');
        this.viewport = document.getElementById('proj-viewport');
        this.prevBtn = document.getElementById('proj-prev');
        this.nextBtn = document.getElementById('proj-next');
        this.dots = document.querySelectorAll('#proj-dots .proj-dot');
        this.counter = document.getElementById('proj-counter');
        this.slides = document.querySelectorAll('.proj-card-slide');
        this.currentIndex = 0;
        this.total = this.slides.length;

        if (!this.track || this.total === 0) return;
        this.init();
    }

    getVisibleCount() {
        if (window.innerWidth >= 1200) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }

    getMaxIndex() {
        const visible = this.getVisibleCount();
        return Math.max(0, this.total - visible);
    }

    init() {
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());

        this.dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => this.goTo(idx));
        });

        // Touch Swipe
        if (this.viewport) {
            let startX = 0;
            this.viewport.addEventListener('touchstart', (e) => {
                startX = e.changedTouches[0].screenX;
            }, { passive: true });

            this.viewport.addEventListener('touchend', (e) => {
                const endX = e.changedTouches[0].screenX;
                const diff = startX - endX;
                if (Math.abs(diff) > 40) {
                    if (diff > 0) this.next();
                    else this.prev();
                }
            }, { passive: true });
        }

        window.addEventListener('resize', () => {
            this.goTo(Math.min(this.currentIndex, this.getMaxIndex()));
        });
    }

    goTo(index) {
        const max = this.getMaxIndex();
        this.currentIndex = Math.max(0, Math.min(index, max));

        const visible = this.getVisibleCount();
        const slideWidthPercent = 100 / visible;
        this.track.style.transform = `translateX(-${this.currentIndex * slideWidthPercent}%)`;

        // Update Dots
        this.dots.forEach((dot, idx) => {
            if (idx === this.currentIndex) {
                dot.classList.remove('w-2', 'bg-zinc-300', 'dark:bg-zinc-700');
                dot.classList.add('w-6', 'bg-purple-500');
            } else {
                dot.classList.remove('w-6', 'bg-purple-500');
                dot.classList.add('w-2', 'bg-zinc-300', 'dark:bg-zinc-700');
            }
        });

        // Update Counter
        if (this.counter) {
            this.counter.textContent = `0${this.currentIndex + 1} / 0${this.total}`;
        }
    }

    next() {
        const max = this.getMaxIndex();
        if (this.currentIndex >= max) {
            this.goTo(0);
        } else {
            this.goTo(this.currentIndex + 1);
        }
    }

    prev() {
        const max = this.getMaxIndex();
        if (this.currentIndex <= 0) {
            this.goTo(max);
        } else {
            this.goTo(this.currentIndex - 1);
        }
    }
}

// ===== Antigravity Interactive Particle Canvas Engine (Enhanced Nodal Density) =====
class AntigravityCanvasEngine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.maxParticles = window.innerWidth < 768 ? 55 : 110;
        this.mouse = { x: -1000, y: -1000, radius: 160 };
        this.animationFrameId = null;
        this.isRunning = false;

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        window.addEventListener('mouseleave', () => {
            this.mouse.x = -1000;
            this.mouse.y = -1000;
        });

        // Gravitational impulse on click
        window.addEventListener('mousedown', (e) => {
            for (let p of this.particles) {
                const dx = p.x - e.clientX;
                const dy = p.y - e.clientY;
                const dist = Math.hypot(dx, dy);
                if (dist < 220 && dist > 0) {
                    const force = (1 - dist / 220) * 10;
                    p.vx += (dx / dist) * force;
                    p.vy += (dy / dist) * force;
                }
            }
        });

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stop();
            } else {
                this.start();
            }
        });

        this.createParticles();
        this.start();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 2 + 1,
                vx: (Math.random() - 0.5) * 0.45,
                vy: -(Math.random() * 0.6 + 0.25), // gentle upward levitation
                baseVx: (Math.random() - 0.5) * 0.45,
                baseVy: -(Math.random() * 0.6 + 0.25),
                alpha: Math.random() * 0.55 + 0.25
            });
        }
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.animate();
        }
    }

    stop() {
        this.isRunning = false;
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }

    animate() {
        if (!this.isRunning) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        const particleColor = isDark ? '168, 85, 247' : '99, 102, 241';
        const lineColor = isDark ? '147, 51, 234' : '79, 70, 229';

        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];

            p.x += p.vx;
            p.y += p.vy;

            p.vx += (p.baseVx - p.vx) * 0.04;
            p.vy += (p.baseVy - p.vy) * 0.04;

            if (p.y < -10) {
                p.y = this.canvas.height + 10;
                p.x = Math.random() * this.canvas.width;
            }
            if (p.x < -10) p.x = this.canvas.width + 10;
            if (p.x > this.canvas.width + 10) p.x = -10;

            // Cursor repulsive gravity
            const dx = p.x - this.mouse.x;
            const dy = p.y - this.mouse.y;
            const dist = Math.hypot(dx, dy);

            if (dist < this.mouse.radius && dist > 0) {
                const force = (1 - dist / this.mouse.radius) * 3.5;
                p.vx += (dx / dist) * force;
                p.vy += (dy / dist) * force;
            }

            // Draw glowing node
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${particleColor}, ${p.alpha})`;
            this.ctx.fill();

            // Connect nearby constellation nodes
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const cdx = p.x - p2.x;
                const cdy = p.y - p2.y;
                const cdist = Math.hypot(cdx, cdy);

                if (cdist < 110) {
                    const lineAlpha = (1 - cdist / 110) * 0.24;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = `rgba(${lineColor}, ${lineAlpha})`;
                    this.ctx.lineWidth = 0.8;
                    this.ctx.stroke();
                }
            }
        }

        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }
}

// ===== Antigravity 3D Magnetic Card Tilt & Specular Shine =====
function initAntigravity3DTilt() {
    const tiltCards = document.querySelectorAll('.tech-category-card, .project-card, .code-block, .service-card, .antigravity-floating-badge, .tech-item-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;

            card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
            card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
            card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });
}

// ===== Initialize Everything on DOM Ready =====
function initAll() {
    new TechStackCarousel();
    new ProjectsCarousel();
    new AntigravityCanvasEngine('antigravity-canvas');
    initAntigravity3DTilt();
}

document.addEventListener('DOMContentLoaded', initAll);
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initAll();
}

// ===== Initialize: Console Welcome Message =====
console.log('%c Haid José Mendoza de Ávila - Full Stack Software Architect', 'font-size: 20px; font-weight: bold; color: #a855f7;');
console.log('%cBuilding robust enterprise systems with Clean Architecture & SOLID principles', 'font-size: 14px; color: #10b981;');
console.log('%cSpecialized in microfrontends, high-concurrency systems, and domain-driven design', 'font-size: 12px; color: #71717a;');