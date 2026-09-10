/* ===================================================================
 * Monica 1.0.0 - Main JS
 *
 * ------------------------------------------------------------------- */

(function(html) {

    'use strict';

    const cfg = {

        // MailChimp URL
        mailChimpURL : 'https://facebook.us1.list-manage.com/subscribe/post?u=1abf75f6981256963a47d197a&amp;id=37c6d8f4d6' 

    };


   /* language toggle
    * -------------------------------------------------- */
    const ssLanguageToggle = function() {

        const toggle = document.querySelector('.language-toggle');
        if (!toggle) return;

        const translations = {
            en: {
                'meta.title': 'Pablo Vecilla | Full-Stack Developer',
                'meta.description': 'Pablo Vecilla is a full-stack developer with a background in advertising, building user-focused digital products from backend logic to responsive interfaces.',
                'meta.socialDescription': 'Full-stack developer with an advertising background and a user-first mindset.',
                'meta.imageAlt': 'Pablo Vecilla — Full-stack developer with an advertising background.',
                'menu.label': 'Menu',
                'nav.projects': 'Projects',
                'nav.about': 'About',
                'nav.skills': 'Skills',
                'nav.contact': 'Contact',
                'header.cta': "Let's talk",
                'header.home': 'Pablo Vecilla home',
                'header.openMenu': 'Open menu',
                'header.navigation': 'Primary navigation',
                'hero.pretitle': "Hi, I'm Pablo",
                'hero.title': 'Full-stack developer<br>with an advertising<br>background and a<br>user-first mindset.',
                'hero.imageAlt': 'Portrait of Pablo Vecilla',
                'hero.scroll': 'Scroll to explore',
                'projects.label': 'Projects',
                'projects.heading': 'From useful ideas to working products.',
                'projects.introOne': 'Three hands-on applications shaped around real users: clearer workouts, useful forecasts and an organised film library.',
                'projects.introTwo': 'Each project connects responsive interfaces with purposeful backend logic, secure access and the right data architecture for the job.',
                'projects.workout.title': 'Workout Bud',
                'projects.workout.text': 'A responsive, mobile-first SPA that generates customised workout programmes for gym newcomers, backed by secure authentication and a containerised relational database.',
                'projects.workout.stack': 'React · Node.js · Express · JWT · PostgreSQL · Sequelize · Docker',
                'projects.weather.title': 'Weather App',
                'projects.weather.text': 'A clean forecast application that uses geolocation and the OpenWeather API to deliver real-time climate data through a responsive interface.',
                'projects.weather.stack': 'React · Vite · Axios · OpenWeather API',
                'projects.movie.title': 'Movie App',
                'projects.movie.text': 'A film repository with user and admin roles, full CRUD capabilities and a hybrid database architecture for core records and dynamic assets.',
                'projects.movie.stack': 'React · Express · Sequelize · SQL · Mongoose · MongoDB',
                'about.label': 'About me',
                'about.textOne': 'Full-stack developer with a background in advertising and high-end event management. I apply business knowledge to backend logic, and design and communication skills to build user-centric interfaces.',
                'about.textTwo': 'I bring high-energy collaboration, creative problem-solving and an empathic mindset to every development team.',
                'about.email': 'Email',
                'skills.label': 'Skills · Stack',
                'skills.heading': 'From interface to infrastructure.',
                'skills.intro': 'A practical toolkit for building accessible, responsive products and the APIs, databases and workflows behind them.',
                'skills.backend.title': 'Backend & Databases',
                'skills.backend.text': 'Node.js · Express.js · RESTful APIs · JWT Authentication · Axios · SQL · MySQL · PostgreSQL · Sequelize ORM · MongoDB · Mongoose · PHP',
                'skills.frontend.title': 'Frontend',
                'skills.frontend.text': 'React.js · Vite · Responsive Design · CSS Modules · HTML5 · CSS3 · UI/UX Accessibility · SSR with PHP and EJS',
                'skills.devops.title': 'DevOps & Tools',
                'skills.devops.text': 'Docker · Git/GitHub · Version Control · Branch Management · Deployment with Netlify and Render',
                'skills.methods.title': 'Ways of Working',
                'skills.methods.text': 'Agile/Scrum · Sprint Planning · Trello · Daily Stand-ups · Collaborative Problem-solving',
                'footer.line': 'Pablo Vecilla · Full-stack developer · Madrid, Spain',
                'footer.contact': 'Contact',
                'footer.backToTop': 'Back to top'
            },
            es: {
                'meta.title': 'Pablo Vecilla | Desarrollador Full-Stack',
                'meta.description': 'Pablo Vecilla es desarrollador full-stack con experiencia en publicidad y crea productos digitales centrados en las personas, desde la lógica backend hasta interfaces responsive.',
                'meta.socialDescription': 'Desarrollador full-stack con experiencia en publicidad y una mirada centrada en las personas.',
                'meta.imageAlt': 'Pablo Vecilla — Desarrollador full-stack con experiencia en publicidad.',
                'menu.label': 'Menú',
                'nav.projects': 'Proyectos',
                'nav.about': 'Sobre mí',
                'nav.skills': 'Habilidades',
                'nav.contact': 'Contacto',
                'header.cta': 'Hablemos',
                'header.home': 'Inicio de Pablo Vecilla',
                'header.openMenu': 'Abrir menú',
                'header.navigation': 'Navegación principal',
                'hero.pretitle': 'Hola, soy Pablo',
                'hero.title': 'Desarrollador full-stack<br>con experiencia en<br>publicidad y una mirada<br>centrada en las personas.',
                'hero.imageAlt': 'Retrato de Pablo Vecilla',
                'hero.scroll': 'Desliza para descubrir',
                'projects.label': 'Proyectos',
                'projects.heading': 'De ideas útiles a productos que funcionan.',
                'projects.introOne': 'Tres aplicaciones prácticas pensadas para personas reales: mejores rutinas, pronósticos útiles y una filmoteca organizada.',
                'projects.introTwo': 'Cada proyecto conecta interfaces responsive con lógica backend, acceso seguro y la arquitectura de datos adecuada para cada reto.',
                'projects.workout.title': 'Workout Bud',
                'projects.workout.text': 'Una SPA responsive y mobile-first que genera rutinas personalizadas para quienes empiezan en el gimnasio, con autenticación segura y una base de datos relacional en contenedores.',
                'projects.workout.stack': 'React · Node.js · Express · JWT · PostgreSQL · Sequelize · Docker',
                'projects.weather.title': 'Weather App',
                'projects.weather.text': 'Una aplicación de pronóstico limpia que usa geolocalización y la API de OpenWeather para mostrar datos climáticos en tiempo real.',
                'projects.weather.stack': 'React · Vite · Axios · API de OpenWeather',
                'projects.movie.title': 'Movie App',
                'projects.movie.text': 'Una filmoteca con roles de usuario y administrador, operaciones CRUD completas y una arquitectura híbrida para datos principales y recursos dinámicos.',
                'projects.movie.stack': 'React · Express · Sequelize · SQL · Mongoose · MongoDB',
                'about.label': 'Sobre mí',
                'about.textOne': 'Soy desarrollador full-stack con experiencia en publicidad y gestión de eventos de alto nivel. Aplico mi visión de negocio a la lógica backend, y mis habilidades de diseño y comunicación a interfaces centradas en las personas.',
                'about.textTwo': 'Aporto energía, resolución creativa de problemas y una mentalidad empática a cada equipo de desarrollo.',
                'about.email': 'Correo',
                'skills.label': 'Habilidades · Stack',
                'skills.heading': 'De la interfaz a la infraestructura.',
                'skills.intro': 'Un conjunto práctico de herramientas para crear productos accesibles y responsive, junto con sus APIs, bases de datos y flujos de trabajo.',
                'skills.backend.title': 'Backend y bases de datos',
                'skills.backend.text': 'Node.js · Express.js · APIs RESTful · Autenticación JWT · Axios · SQL · MySQL · PostgreSQL · Sequelize ORM · MongoDB · Mongoose · PHP',
                'skills.frontend.title': 'Frontend',
                'skills.frontend.text': 'React.js · Vite · Diseño responsive · CSS Modules · HTML5 · CSS3 · Accesibilidad UI/UX · SSR con PHP y EJS',
                'skills.devops.title': 'DevOps y herramientas',
                'skills.devops.text': 'Docker · Git/GitHub · Control de versiones · Gestión de ramas · Despliegue con Netlify y Render',
                'skills.methods.title': 'Formas de trabajo',
                'skills.methods.text': 'Agile/Scrum · Planificación de sprints · Trello · Daily stand-ups · Resolución colaborativa de problemas',
                'footer.line': 'Pablo Vecilla · Desarrollador full-stack · Madrid, España',
                'footer.contact': 'Contacto',
                'footer.backToTop': 'Volver arriba'
            }
        };

        const setLanguage = function(language) {
            const copy = translations[language];

            document.documentElement.lang = language;
            document.querySelectorAll('[data-i18n]').forEach(function(element) {
                const value = copy[element.dataset.i18n];
                if (value) element.textContent = value;
            });
            document.querySelectorAll('[data-i18n-html]').forEach(function(element) {
                const value = copy[element.dataset.i18nHtml];
                if (value) element.innerHTML = value;
            });
            document.querySelectorAll('[data-i18n-alt]').forEach(function(element) {
                const value = copy[element.dataset.i18nAlt];
                if (value) element.alt = value;
            });
            document.querySelectorAll('[data-i18n-title]').forEach(function(element) {
                const value = copy[element.dataset.i18nTitle];
                if (value) element.title = value;
            });
            document.querySelectorAll('[data-i18n-aria-label]').forEach(function(element) {
                const value = copy[element.dataset.i18nAriaLabel];
                if (value) element.setAttribute('aria-label', value);
            });

            document.title = copy['meta.title'];
            document.querySelector('meta[name="description"]').content = copy['meta.description'];
            document.querySelector('meta[property="og:title"]').content = copy['meta.title'];
            document.querySelector('meta[property="og:description"]').content = copy['meta.socialDescription'];
            document.querySelector('meta[property="og:image:alt"]').content = copy['meta.imageAlt'];
            document.querySelector('meta[name="twitter:title"]').content = copy['meta.title'];
            document.querySelector('meta[name="twitter:description"]').content = copy['meta.socialDescription'];
            document.querySelector('meta[name="twitter:image:alt"]').content = copy['meta.imageAlt'];

            toggle.textContent = language === 'en' ? 'ES' : 'EN';
            toggle.setAttribute('aria-label', language === 'en' ? 'Cambiar idioma a español' : 'Switch language to English');
            toggle.dataset.language = language;

            try {
                window.localStorage.setItem('pablo-language', language);
            } catch (error) {
                // The language switch still works when storage is unavailable.
            }
        };

        let initialLanguage = 'en';
        try {
            initialLanguage = window.localStorage.getItem('pablo-language') || 'en';
        } catch (error) {
            initialLanguage = 'en';
        }

        setLanguage(translations[initialLanguage] ? initialLanguage : 'en');

        toggle.addEventListener('click', function() {
            setLanguage(toggle.dataset.language === 'en' ? 'es' : 'en');
        });

    }; // end ssLanguageToggle


   /* preloader
    * -------------------------------------------------- */
    const ssPreloader = function() {

        const siteBody = document.querySelector('body');
        const preloader = document.querySelector('#preloader');
        if (!preloader) return;

        html.classList.add('ss-preload');
        
        window.addEventListener('load', function() {
            html.classList.remove('ss-preload');
            html.classList.add('ss-loaded');
            
            preloader.addEventListener('transitionend', function afterTransition(e) {
                if (e.target.matches('#preloader'))  {
                    siteBody.classList.add('ss-show');
                    e.target.style.display = 'none';
                    preloader.removeEventListener(e.type, afterTransition);
                }
            });
        });

    }; // end ssPreloader


   /* mobile menu
    * ---------------------------------------------------- */ 
    const ssMobileMenu = function() {

        const toggleButton = document.querySelector('.s-header__menu-toggle');
        const mainNavWrap = document.querySelector('.s-header__nav');
        const siteBody = document.querySelector('body');

        if (!(toggleButton && mainNavWrap)) return;

        toggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            toggleButton.classList.toggle('is-clicked');
            siteBody.classList.toggle('menu-is-open');
        });

        mainNavWrap.querySelectorAll('.s-header__nav a').forEach(function(link) {

            link.addEventListener("click", function(event) {

                // at 900px and below
                if (window.matchMedia('(max-width: 900px)').matches) {
                    toggleButton.classList.toggle('is-clicked');
                    siteBody.classList.toggle('menu-is-open');
                }
            });
        });

        window.addEventListener('resize', function() {

            // above 900px
            if (window.matchMedia('(min-width: 901px)').matches) {
                if (siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
                if (toggleButton.classList.contains('is-clicked')) toggleButton.classList.remove('is-clicked');
            }
        });

    }; // end ssMobileMenu


   /* swiper
    * ------------------------------------------------------ */ 
    const ssSwiper = function() {

        const homeSliderSwiper = new Swiper('.home-slider', {

            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                // when window width is > 400px
                401: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is > 800px
                801: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                // when window width is > 1330px
                1331: {
                    slidesPerView: 3,
                    spaceBetween: 48
                },
                // when window width is > 1773px
                1774: {
                    slidesPerView: 4,
                    spaceBetween: 48
                }
            }
        });

        const pageSliderSwiper = new Swiper('.page-slider', {

            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                // when window width is > 400px
                401: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is > 800px
                801: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                // when window width is > 1240px
                1241: {
                    slidesPerView: 3,
                    spaceBetween: 48
                }
            }
        });

    }; // end ssSwiper


   /* mailchimp form
    * ---------------------------------------------------- */ 
    const ssMailChimpForm = function() {

        const mcForm = document.querySelector('#mc-form');

        if (!mcForm) return;

        // Add novalidate attribute
        mcForm.setAttribute('novalidate', true);

        // Field validation
        function hasError(field) {

            // Don't validate submits, buttons, file and reset inputs, and disabled fields
            if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') return;

            // Get validity
            let validity = field.validity;

            // If valid, return null
            if (validity.valid) return;

            // If field is required and empty
            if (validity.valueMissing) return 'Please enter an email address.';

            // If not the right type
            if (validity.typeMismatch) {
                if (field.type === 'email') return 'Please enter a valid email address.';
            }

            // If pattern doesn't match
            if (validity.patternMismatch) {

                // If pattern info is included, return custom error
                if (field.hasAttribute('title')) return field.getAttribute('title');

                // Otherwise, generic error
                return 'Please match the requested format.';
            }

            // If all else fails, return a generic catchall error
            return 'The value you entered for this field is invalid.';

        };

        // Show error message
        function showError(field, error) {

            // Get field id or name
            let id = field.id || field.name;
            if (!id) return;

            let errorMessage = field.form.querySelector('.mc-status');

            // Update error message
            errorMessage.classList.remove('success-message');
            errorMessage.classList.add('error-message');
            errorMessage.innerHTML = error;

        };

        // Display form status (callback function for JSONP)
        window.displayMailChimpStatus = function (data) {

            // Make sure the data is in the right format and that there's a status container
            if (!data.result || !data.msg || !mcStatus ) return;

            // Update our status message
            mcStatus.innerHTML = data.msg;

            // If error, add error class
            if (data.result === 'error') {
                mcStatus.classList.remove('success-message');
                mcStatus.classList.add('error-message');
                return;
            }

            // Otherwise, add success class
            mcStatus.classList.remove('error-message');
            mcStatus.classList.add('success-message');
        };

        // Submit the form 
        function submitMailChimpForm(form) {

            let url = cfg.mailChimpURL;
            let emailField = form.querySelector('#mce-EMAIL');
            let serialize = '&' + encodeURIComponent(emailField.name) + '=' + encodeURIComponent(emailField.value);

            if (url == '') return;

            url = url.replace('/post?u=', '/post-json?u=');
            url += serialize + '&c=displayMailChimpStatus';

            // Create script with url and callback (if specified)
            var ref = window.document.getElementsByTagName( 'script' )[ 0 ];
            var script = window.document.createElement( 'script' );
            script.src = url;

            // Create global variable for the status container
            window.mcStatus = form.querySelector('.mc-status');
            window.mcStatus.classList.remove('error-message', 'success-message')
            window.mcStatus.innerText = 'Submitting...';

            // Insert script tag into the DOM
            ref.parentNode.insertBefore( script, ref );

            // After the script is loaded (and executed), remove it
            script.onload = function () {
                this.remove();
            };

        };

        // Check email field on submit
        mcForm.addEventListener('submit', function (event) {

            event.preventDefault();

            let emailField = event.target.querySelector('#mce-EMAIL');
            let error = hasError(emailField);

            if (error) {
                showError(emailField, error);
                emailField.focus();
                return;
            }

            submitMailChimpForm(this);

        }, false);

    }; // end ssMailChimpForm


   /* alert boxes
    * ------------------------------------------------------ */
    const ssAlertBoxes = function() {

        const boxes = document.querySelectorAll('.alert-box');
  
        boxes.forEach(function(box){

            box.addEventListener('click', function(e) {
                if (e.target.matches('.alert-box__close')) {
                    e.stopPropagation();
                    e.target.parentElement.classList.add('hideit');

                    setTimeout(function() {
                        box.style.display = 'none';
                    }, 500)
                }
            });
        })

    }; // end ssAlertBoxes


    /* Back to Top
    * ------------------------------------------------------ */
    const ssBackToTop = function() {

        const pxShow = 900;
        const goTopButton = document.querySelector(".ss-go-top");

        if (!goTopButton) return;

        // Show or hide the button
        if (window.scrollY >= pxShow) goTopButton.classList.add("link-is-visible");

        window.addEventListener('scroll', function() {
            if (window.scrollY >= pxShow) {
                if(!goTopButton.classList.contains('link-is-visible')) goTopButton.classList.add("link-is-visible")
            } else {
                goTopButton.classList.remove("link-is-visible")
            }
        });

    }; // end ssBackToTop


   /* smoothscroll
    * ------------------------------------------------------ */
    const ssMoveTo = function() {

        const easeFunctions = {
            easeInQuad: function (t, b, c, d) {
                t /= d;
                return c * t * t + b;
            },
            easeOutQuad: function (t, b, c, d) {
                t /= d;
                return -c * t* (t - 2) + b;
            },
            easeInOutQuad: function (t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t + b;
                t--;
                return -c/2 * (t*(t-2) - 1) + b;
            },
            easeInOutCubic: function (t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t*t + b;
                t -= 2;
                return c/2*(t*t*t + 2) + b;
            }
        }

        const triggers = document.querySelectorAll('.smoothscroll');
        
        const moveTo = new MoveTo({
            tolerance: 0,
            duration: 1200,
            easing: 'easeInOutCubic',
            container: window
        }, easeFunctions);

        triggers.forEach(function(trigger) {
            moveTo.registerTrigger(trigger);
        });

    }; // end ssMoveTo


   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssLanguageToggle();
        ssPreloader();
        ssMobileMenu();
        ssSwiper();
        ssMailChimpForm();
        ssAlertBoxes();
        ssMoveTo();

    })();

})(document.documentElement);
