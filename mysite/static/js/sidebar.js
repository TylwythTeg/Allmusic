
document.addEventListener("DOMContentLoaded", function() {
    var clickable = document.getElementById("soundkey-object-name");
    var sidebar = document.getElementById("chord-scale-sidebar");
    var callback = function (event) {
        sidebar.classList.toggle("visible");   
    }
    clickable.addEventListener("click", callback);





});











