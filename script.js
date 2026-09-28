/* =========================================================
   MONTFORT SCHOOL
   PREMIUM WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LOADER
    ===================================================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 900);

    });


    /* =====================================================
       NAVBAR
    ===================================================== */

    const navbar = document.getElementById("navbar");

    function updateNavbar() {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    menuBtn.addEventListener("click", () => {

        const opened = navMenu.classList.toggle("open");

        menuBtn.setAttribute(
            "aria-expanded",
            opened
        );

    });


    document.querySelectorAll(".nav-link").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    /* =====================================================
       THEME TOGGLE
    ===================================================== */

    const themeToggle = document.getElementById("themeToggle");

    const savedTheme =
        localStorage.getItem("montfort-theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

    }


    function updateThemeIcon() {

        const icon =
            themeToggle.querySelector("i");

        if (document.body.classList.contains("dark")) {

            icon.className =
                "fa-solid fa-sun";

        } else {

            icon.className =
                "fa-solid fa-moon";

        }

    }

    updateThemeIcon();


    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const dark =
            document.body.classList.contains("dark");

        localStorage.setItem(
            "montfort-theme",
            dark ? "dark" : "light"
        );

        updateThemeIcon();

    });


    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    const scrollProgress =
        document.getElementById("scrollProgress");

    function updateProgress() {

        const scrollTop =
            window.scrollY;

        const scrollHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            scrollHeight > 0
                ? (scrollTop / scrollHeight) * 100
                : 0;

        scrollProgress.style.width =
            `${percentage}%`;

    }

    window.addEventListener(
        "scroll",
        updateProgress
    );


    /* =====================================================
       REVEAL ANIMATIONS
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       COUNTERS
    ===================================================== */

    const counters =
        document.querySelectorAll(".stat-number");

    const counterObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const counter =
                        entry.target;

                    const target =
                        Number(
                            counter.dataset.target
                        );

                    let current = 0;

                    const duration = 1500;

                    const stepTime =
                        Math.max(
                            10,
                            duration / target
                        );

                    const timer =
                        setInterval(() => {

                            current +=
                                Math.ceil(
                                    target / 80
                                );

                            if (current >= target) {

                                current = target;

                                clearInterval(timer);

                            }

                            counter.textContent =
                                current;

                        }, stepTime);

                    counterObserver.unobserve(
                        counter
                    );

                });

            },
            {
                threshold: .6
            }
        );


    counters.forEach(counter => {

        counterObserver.observe(counter);

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    const navObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    const id =
                        entry.target.id;

                    navLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                        if (
                            link.getAttribute(
                                "href"
                            ) === `#${id}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                });

            },
            {
                threshold: .25,
                rootMargin:
                    "-20% 0px -60% 0px"
            }
        );


    sections.forEach(section => {

        navObserver.observe(section);

    });


    /* =====================================================
       SUBJECT TABS
    ===================================================== */

    const subjectTabs =
        document.querySelectorAll(
            ".subject-tab"
        );

    const subjectPanels =
        document.querySelectorAll(
            ".subject-panel"
        );


    subjectTabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const target =
                tab.dataset.subject;

            subjectTabs.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });

            subjectPanels.forEach(panel => {

                panel.classList.remove(
                    "active"
                );

            });

            tab.classList.add("active");

            const panel =
                document.getElementById(target);

            if (panel) {

                panel.classList.add(
                    "active"
                );

            }

        });

    });


    /* =====================================================
       STUDENT LIFE TABS
    ===================================================== */

    const studentButtons =
        document.querySelectorAll(
            ".student-menu-item"
        );

    const studentContents =
        document.querySelectorAll(
            ".student-content"
        );


    studentButtons.forEach(button => {

        button.addEventListener("click", () => {

            const target =
                button.dataset.student;

            studentButtons.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });

            studentContents.forEach(content => {

                content.classList.remove(
                    "active"
                );

            });

            button.classList.add("active");

            const content =
                document.getElementById(
                    `${target}-student`
                );

            if (content) {

                content.classList.add(
                    "active"
                );

            }

        });

    });


    /* =====================================================
       EVENT FILTER
    ===================================================== */

    const eventFilters =
        document.querySelectorAll(
            ".event-filter"
        );

    const eventCards =
        document.querySelectorAll(
            ".event-card"
        );


    eventFilters.forEach(filter => {

        filter.addEventListener("click", () => {

            const category =
                filter.dataset.filter;

            eventFilters.forEach(button => {

                button.classList.remove(
                    "active"
                );

            });

            filter.classList.add("active");


            eventCards.forEach(card => {

                const cardCategory =
                    card.dataset.category;

                if (
                    category === "all" ||
                    category === cardCategory
                ) {

                    card.classList.remove(
                        "hide"
                    );

                } else {

                    card.classList.add(
                        "hide"
                    );

                }

            });

        });

    });


    /* =====================================================
       FAQ
    ===================================================== */

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );


    faqItems.forEach(item => {

        const question =
            item.querySelector(
                ".faq-question"
            );

        question.addEventListener(
            "click",
            () => {

                faqItems.forEach(other => {

                    if (
                        other !== item
                    ) {

                        other.classList.remove(
                            "active"
                        );

                    }

                });

                item.classList.toggle(
                    "active"
                );

            }
        );

    });


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById(
            "contactForm"
        );

    const formMessage =
        document.getElementById(
            "formMessage"
        );


    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            formMessage.textContent =
                "Thank you! Your enquiry has been recorded locally. Connect this form to a backend or form service to receive real submissions.";

            formMessage.classList.add(
                "show"
            );

            contactForm.reset();

        }
    );


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backTop =
        document.getElementById(
            "backTop"
        );


    function updateBackTop() {

        if (window.scrollY > 600) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }


    window.addEventListener(
        "scroll",
        updateBackTop
    );


    backTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =====================================================
       CURSOR GLOW
    ===================================================== */

    const cursorGlow =
        document.getElementById(
            "cursorGlow"
        );


    if (
        window.matchMedia(
            "(pointer:fine)"
        ).matches
    ) {

        document.addEventListener(
            "mousemove",
            event => {

                cursorGlow.style.left =
                    `${event.clientX}px`;

                cursorGlow.style.top =
                    `${event.clientY}px`;

            }
        );

    } else {

        cursorGlow.style.display =
            "none";

    }


    /* =====================================================
       BUTTON RIPPLE
    ===================================================== */

    document.querySelectorAll(
        ".btn, .nav-cta"
    ).forEach(button => {

        button.addEventListener(
            "click",
            event => {

                const ripple =
                    document.createElement(
                        "span"
                    );

                ripple.style.position =
                    "absolute";

                ripple.style.width =
                    "5px";

                ripple.style.height =
                    "5px";

                ripple.style.borderRadius =
                    "50%";

                ripple.style.background =
                    "rgba(255,255,255,.35)";

                ripple.style.pointerEvents =
                    "none";

                const rect =
                    button.getBoundingClientRect();

                ripple.style.left =
                    `${event.clientX - rect.left}px`;

                ripple.style.top =
                    `${event.clientY - rect.top}px`;

                ripple.style.transform =
                    "scale(0)";

                ripple.style.animation =
                    "ripple .6s ease-out";

                button.style.position =
                    "relative";

                button.style.overflow =
                    "hidden";

                button.appendChild(ripple);

                setTimeout(() => {

                    ripple.remove();

                }, 700);

            }
        );

    });


    /* =====================================================
       CARD TILT
    ===================================================== */

    const tiltCards =
        document.querySelectorAll(
            ".glance-card, .faculty-card, .news-card"
        );


    tiltCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                if (
                    !window.matchMedia(
                        "(pointer:fine)"
                    ).matches
                ) {
                    return;
                }

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    (y - centerY) /
                    25;

                const rotateY =
                    (centerX - x) /
                    25;

                card.style.transform =
                    `perspective(700px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });


    /* =====================================================
       KEYBOARD ESCAPE
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                navMenu.classList.remove(
                    "open"
                );

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const year =
        document.getElementById(
            "year"
        );

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       RIPPLE ANIMATION STYLE
    ===================================================== */

    const style =
        document.createElement("style");

    style.textContent = `

        @keyframes ripple {

            to {

                transform: scale(60);

                opacity: 0;

            }

        }

    `;

    document.head.appendChild(style);


    /* =====================================================
       SMOOTH HASH NAVIGATION
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );

                if (
                    targetId === "#" ||
                    targetId.length < 2
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


    /* =====================================================
       INITIAL UPDATE
    ===================================================== */

    updateProgress();
    updateBackTop();

});