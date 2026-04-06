
function goBack() {
     const navBar = document.querySelector('#mb-nav-bar');

    if (navBar.classList.contains('hidden')) {
        navBar.classList.remove('hidden');
    } else {
        navBar.classList.add('hidden');
    }

}