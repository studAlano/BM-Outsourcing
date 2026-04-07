
function goBack() {
    const navBar = document.querySelector('#mb-nav-bar');

    if (navBar.classList.contains('hidden')) {
        navBar.classList.remove('hidden');
    } else {
        navBar.classList.add('hidden');
    }
}

function closeMobileNav() {
    const navBar = document.querySelector('#mb-nav-bar');
    if (navBar) {
        navBar.classList.add('hidden');
    }
}

function handleMobileAnchor(event) {
    const link = event.currentTarget;
    const href = link.getAttribute('href');

    if (href && href.startsWith('#')) {
        event.preventDefault();
        closeMobileNav();

        const target = document.querySelector(href);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 200);
        }
    } else {
        closeMobileNav();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const mobileLinks = document.querySelectorAll('.mb-anchors .anchor');
    mobileLinks.forEach(link => {
        link.addEventListener('click', handleMobileAnchor);
    });
});