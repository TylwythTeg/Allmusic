
document.addEventListener("DOMContentLoaded", function() {
    var clickable = document.getElementById("soundkey-object-name");
    var sidebar = document.getElementById("chord-scale-sidebar");
    var callback = function (event) {
        sidebar.classList.toggle("visible");   
    };
    clickable.addEventListener("click", callback);

    var close = document.getElementById("close-menu-button");
    close.addEventListener("click", callback);







    /* This is the collapsable submenus */
    var menu = document.getElementsByClassName("main-menu")[0];
    var submenus = document.getElementsByClassName("menu-level-2");
    var items = document.getElementsByClassName("menu-level-3");

    var unfurl = function(event) {
        if(!event.target.parentElement.classList.contains("menu-level-2")) {
            return;
        }
        event.target.parentElement.nextElementSibling.classList.toggle("items-visible");
        event.stopPropogation();
    };
    menu.addEventListener("click",unfurl);
    /*  This is the collapsable submenus */


});











