var blackKeys = ["A#", "C#", "D#", "F#", "G#"];
var chromaticNotes = ["C", "C#", "D", "D#", "E", "F",  "F#", "G", "G#", "A", "A#", "B"];
console.log(blackKeys);


var noteElements = $('.pkey');



/* Assign notes to each key starting left with C going upward in succession */
function setNotes() {
    var i = 0;
    noteElements.each(function(){
        this.setAttribute('data-note', chromaticNotes[i % 12]);
        i++;
    });
}




/* showNotes all the notes */
function showNotes() {
    var i = 0;
    noteElements.each(function(){
        var note = this.getAttribute('data-note');

        /* if note does not exist in scale, move on to next key*/
        if (!scale_object.notes.includes(note))
            return;


        /*set class text based on key */
        if (blackKeys.includes(note)) {
            classText = "mask key_black";
        } else {
            classText = "mask key"
        }


        /* Create new Div with note name */
        jQuery('<div/>', {
            "class": classText,
            "text": note,
        }).appendTo(this);

        i++;
    });


}

setNotes();
showNotes();