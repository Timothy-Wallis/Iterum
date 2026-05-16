const MOBILE_BREAKPOINT = 768;

function initSidebarAndNavigation() {
    if (window.__iterumSidebarInitialized) {
        return;
    }
    window.__iterumSidebarInitialized = true;

    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menuBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    if (!sidebar || !menuBtn) {
        return;
    }

    function isMobile() {
        return window.innerWidth <= MOBILE_BREAKPOINT;
    }

    function syncAria(isOpen) {
        menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    function closeSidebar() {
        sidebar.classList.remove('mobile-open');
        if (sidebarOverlay) {
            sidebarOverlay.classList.remove('active');
        }

        if (!isMobile()) {
            document.body.classList.add('sidebar-collapsed');
        }

        syncAria(false);
    }

    function openSidebar() {
        if (isMobile()) {
            sidebar.classList.add('mobile-open');
            if (sidebarOverlay) {
                sidebarOverlay.classList.add('active');
            }
        } else {
            document.body.classList.remove('sidebar-collapsed');
        }

        syncAria(true);
    }

    function toggleSidebar() {
        const desktopOpen = !document.body.classList.contains('sidebar-collapsed');
        const mobileOpen = sidebar.classList.contains('mobile-open');
        const currentlyOpen = isMobile() ? mobileOpen : desktopOpen;

        if (currentlyOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    function resetSidebarState() {
        sidebar.classList.remove('mobile-open');
        if (sidebarOverlay) {
            sidebarOverlay.classList.remove('active');
        }

        if (isMobile()) {
            document.body.classList.remove('sidebar-collapsed');
        } else {
            document.body.classList.add('sidebar-collapsed');
        }

        syncAria(false);
    }

    function handleResize() {
        if (!isMobile()) {
            sidebar.classList.remove('mobile-open');
            if (sidebarOverlay) {
                sidebarOverlay.classList.remove('active');
            }
        } else {
            document.body.classList.remove('sidebar-collapsed');
        }
    }

    menuBtn.addEventListener('click', toggleSidebar);
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    window.addEventListener('resize', handleResize);

    // Close/reset when leaving and when returning to the page.
    window.addEventListener('pagehide', resetSidebarState);
    window.addEventListener('beforeunload', resetSidebarState);
    window.addEventListener('pageshow', resetSidebarState);
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            resetSidebarState();
        }
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#')) {
                return;
            }

            event.preventDefault();
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');

            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            if (isMobile()) {
                closeSidebar();
            }
        });
    });

    resetSidebarState();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSidebarAndNavigation, { once: true });
} else {
    initSidebarAndNavigation();
}
