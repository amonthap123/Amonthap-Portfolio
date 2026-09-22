// navbar.js - Fixed version (language system consolidated)
/* ============================================
   NAVBAR SCRIPT - Black & Gold Theme
   Interactive Navigation with Effects
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // DOM ELEMENTS
    // ============================================
    const header = document.querySelector('header');
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelectorAll('.nav-menu li a');
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentFlag = document.getElementById('currentFlag');
    const currentLangLabel = document.getElementById('currentLangLabel');
    
    // ============================================
    // 1. HAMBURGER MENU TOGGLE (Mobile)
    // ============================================
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
            icon.style.color = '#FBBF24';
        } else {
            icon.className = 'fas fa-bars';
            icon.style.color = '';
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!header.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.className = 'fas fa-bars';
            icon.style.color = '';
        }
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.className = 'fas fa-bars';
                icon.style.color = '';
            }
        });
    });
    
    // ============================================
    // 2. ACTIVE NAV LINK (Scroll Spy)
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY + 120;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(updateActiveLink);
    });
    
    updateActiveLink();
    
    // ============================================
    // 3. SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // 4. HEADER SCROLL EFFECT
    // ============================================
    let lastScrollY = 0;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // ============================================
    // 5. LANGUAGE SWITCHER (Dropdown)
    // ============================================
    let isDropdownOpen = false;
    
    langToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        isDropdownOpen = !isDropdownOpen;
        langDropdown.classList.toggle('active');
        langToggle.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
        const langSwitcher = document.getElementById('langSwitcher');
        if (!langSwitcher.contains(e.target) && isDropdownOpen) {
            langDropdown.classList.remove('active');
            langToggle.classList.remove('active');
            isDropdownOpen = false;
        }
    });
    
    // ============================================
    // 6. LANGUAGE CHANGE FUNCTION (SINGLE SOURCE OF TRUTH)
    // ============================================
    const translations = {
        th: {
            'nav-home': 'หน้าแรก',
            'nav-about': 'เกี่ยวกับ',
            'nav-skills': 'ความสามารถ',
            'nav-portfolio': 'ผลงาน',
            'nav-contact': 'ติดต่อ',
            'hero-greeting': 'สวัสดีครับ I\'m',
            'hero-title': 'Full-Stack Developer & Digital Solutions Architect',
            'hero-desc': 'นักพัฒนาซอฟต์แวร์และผู้สร้างโซลูชันดิจิทัล<br />ยินดีต้อนรับสู่เว็บไซต์ Portfolio ของผม',
            'hero-btn-contact': 'ติดต่อฉัน',
            'hero-btn-portfolio': 'ดูผลงาน',
            'about-tag': 'เกี่ยวกับฉัน',
            'about-title': 'เกี่ยวกับฉัน',
            'skills-tag': 'ความสามารถ',
            'skills-title': 'ความสามารถ',
            'portfolio-tag': 'ผลงาน',
            'portfolio-title': 'ผลงาน',
            'contact-tag': 'ติดต่อ',
            'contact-title': 'ติดต่อ',
            'contact-subtitle': 'พูดคุยกับผมได้เลย',
            'contact-desc': 'พร้อมทำงานร่วมกับคุณในโปรเจกต์ถัดไป',
            'contact-email': 'Pa.panya7382@gmail.com',
            'contact-phone': '+66 99 478 8751',
            'contact-line': 'Line: @amonthap',
            'contact-name': 'ชื่อของคุณ',
            'contact-email-label': 'อีเมล',
            'contact-message': 'ข้อความ...',
            'contact-send': 'ส่งข้อความ',
            'footer-text': '© 2026 Amonthap Pakamas. All rights reserved.'
        },
        en: {
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-skills': 'Skills',
            'nav-portfolio': 'Portfolio',
            'nav-contact': 'Contact',
            'hero-greeting': 'Hello, I\'m',
            'hero-title': 'Full-Stack Developer & Digital Solutions Architect',
            'hero-desc': 'Software developer and digital solutions creator<br />Welcome to my Portfolio website',
            'hero-btn-contact': 'Contact Me',
            'hero-btn-portfolio': 'View Work',
            'about-tag': 'About Me',
            'about-title': 'About Me',
            'skills-tag': 'Skills',
            'skills-title': 'Skills',
            'portfolio-tag': 'Portfolio',
            'portfolio-title': 'Portfolio',
            'contact-tag': 'Contact',
            'contact-title': 'Contact',
            'contact-subtitle': 'Let\'s Talk',
            'contact-desc': 'Ready to work with you on your next project',
            'contact-email': 'Pa.panya7382@gmail.com',
            'contact-phone': '+66 99 478 8751',
            'contact-line': 'Line: @amonthap',
            'contact-name': 'Your Name',
            'contact-email-label': 'Email',
            'contact-message': 'Message...',
            'contact-send': 'Send Message',
            'footer-text': '© 2026 Amonthap Pakamas. All rights reserved.'
        }
    };
    
    let currentLanguage = 'th';
    
    function changeLanguage(lang) {
        currentLanguage = lang;
        
        // Update data-key elements
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                // Preserve HTML in elements that need it (like hero-desc)
                if (key === 'hero-desc') {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // Update hero buttons specifically (they have icons)
        const heroBtns = document.querySelectorAll('.hero-buttons .btn');
        if (heroBtns.length >= 2) {
            heroBtns[0].innerHTML = `<i class="fas fa-paper-plane"></i> ${translations[lang]['hero-btn-contact']}`;
            heroBtns[1].innerHTML = `<i class="fas fa-code"></i> ${translations[lang]['hero-btn-portfolio']}`;
        }
        
        // Update contact info list items
        const contactInfoLis = document.querySelectorAll('.contact-info ul li');
        if (contactInfoLis.length >= 3) {
            contactInfoLis[0].innerHTML = `<i class="fas fa-envelope"></i> ${translations[lang]['contact-email']}`;
            contactInfoLis[1].innerHTML = `<i class="fas fa-phone-alt"></i> ${translations[lang]['contact-phone']}`;
            contactInfoLis[2].innerHTML = `<i class="fab fa-line"></i> ${translations[lang]['contact-line']}`;
        }
        
        // Update contact form placeholders
        const formInputs = document.querySelectorAll('#contactForm input');
        const formTextarea = document.querySelector('#contactForm textarea');
        const submitBtn = document.querySelector('#contactForm .btn-primary');
        
        if (formInputs.length >= 2) {
            formInputs[0].placeholder = translations[lang]['contact-name'];
            formInputs[1].placeholder = translations[lang]['contact-email-label'];
        }
        if (formTextarea) {
            formTextarea.placeholder = translations[lang]['contact-message'];
        }
        if (submitBtn) {
            submitBtn.innerHTML = `<i class="fas fa-paper-plane"></i> ${translations[lang]['contact-send']}`;
        }
        
        // Update contact info h3 and p
        const contactInfoH3 = document.querySelector('.contact-info h3');
        const contactInfoP = document.querySelector('.contact-info p');
        if (contactInfoH3) contactInfoH3.textContent = translations[lang]['contact-subtitle'];
        if (contactInfoP) contactInfoP.textContent = translations[lang]['contact-desc'];
        
        // Update footer
        const footerP = document.querySelector('footer p');
        if (footerP) footerP.textContent = translations[lang]['footer-text'];
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // === DISPATCH CUSTOM EVENT FOR PORTFOLIO.JS ===
        document.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: lang } 
        }));
        
        console.log(`🌐 Language changed to: ${lang}`);
    }
    
    // Language selection from dropdown
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            const flag = this.querySelector('.lang-flag').textContent;
            const label = lang === 'th' ? 'TH' : 'EN';
            
            currentFlag.textContent = flag;
            currentLangLabel.textContent = label;
            
            langOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            langDropdown.classList.remove('active');
            langToggle.classList.remove('active');
            isDropdownOpen = false;
            
            changeLanguage(lang);
        });
    });
    
    // ============================================
    // 7. KEYBOARD SHORTCUT (Alt+L)
    // ============================================
    document.addEventListener('keydown', function(e) {
        if (e.altKey && e.key === 'l') {
            e.preventDefault();
            langToggle.click();
        }
    });
    
    // ============================================
    // 8. RESIZE HANDLER
    // ============================================
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.className = 'fas fa-bars';
                icon.style.color = '';
            }
        }, 250);
    });
    
    // ============================================
    // 9. NAVBAR HOVER ANIMATION
    // ============================================
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px rgba(212,175,55,0.2)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });
    
    // ============================================
    // 10. HEADER GRADIENT ANIMATION
    // ============================================
    let headerPulseState = 0;
    setInterval(() => {
        headerPulseState = (headerPulseState + 1) % 3;
        const opacities = [0.1, 0.25, 0.1];
        header.style.borderBottom = `1px solid rgba(212,175,55,${opacities[headerPulseState]})`;
    }, 3000);
    
    // ============================================
    // INITIALIZATION
    // ============================================
    console.log('🚀 Navbar initialized successfully!');
    
    // Set default language to Thai
    changeLanguage('th');
    document.querySelector('.lang-option[data-lang="th"]')?.classList.add('active');
    
    // Expose for debugging
    window.__navbar = {
        changeLanguage,
        currentLanguage: () => currentLanguage,
        translations
    };
    
});