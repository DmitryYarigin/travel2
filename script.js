const iconMenu = document.querySelector('.burger-icon');
const menuBoody = document.querySelector('.nav-link');
const menuLinks = document.querySelectorAll('.link');

if(iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBoody.classList.toggle('_active');

    })
    menuLinks.forEach(menuLink => {

        menuLink.addEventListener("click", function(e) {
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBoody.classList.remove('_active');
            }
        })
    })
}