
document.addEventListener("DOMContentLoaded", function() {
    var clickable = document.getElementsByClassName("menu_click")[0];
    var bottom = document.getElementsByClassName("bottom_nav")[0];

    var callback = function (event) {
        bottom.classList.toggle("show");   
    }

    clickable.addEventListener("click", callback);


    var unfurlMenu = function (event) {
        var s = event.target.parentElement.nextElementSibling;
        console.log(event.target);
        s.classList.toggle("show_menu");
    }

    var headings = document.getElementsByClassName("section");
    for (var i = 0; i < headings.length; i++) {
        headings[i].addEventListener("click", unfurlMenu)
    }


});











