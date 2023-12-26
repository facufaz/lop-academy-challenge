function toggleSidebar() {
    var menu = document.getElementById("side-menu");
    menu.classList.toggle('hidden');
    menu.classList.toggle('side-menu');

    
    
    var menuToggle = document.getElementById('menu-toggle');
    
    menuToggle.addEventListener('click', function () {
        toggleSidebar();
    });
    ;
}