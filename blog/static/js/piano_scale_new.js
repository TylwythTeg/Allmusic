var chromaticNotes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]




var elements = document.querySelectorAll(".pkey");

console.log(elements);



// Initialize key masks
var add_markers = function () {

    var i = 0;
    Array.prototype.forEach.call(elements,  function (item){

        var index = i % 12;
        var marker = document.createElement("div");

        marker.classList.add("mask");

        // If note is black, else is white
        if (chromaticNotes[index].length === 2) {
            marker.classList.add("key_black");
        } else marker.classList.add("key");

        item.appendChild(marker);

        i++;
    });
}

add_markers();

console.log(scale_object)