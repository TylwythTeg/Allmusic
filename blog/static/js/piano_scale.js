var blackKeys = ["A#", "C#", "D#", "F#", "G#"];
var chromaticNotes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

var keys = jQuery(".pkey");
var board = jQuery(".set");
console.log(scale_object);



/* Assign notes to each key starting left with C going upward in succession */
function setNotes() {
    var i = 0;
    keys.each(function(){
        this.setAttribute("data-note", chromaticNotes[i % 12]);
        i++;
    });
}




/* show notes from scale */
function showNotes() {
    keys.each(function(){
        var note = this.getAttribute("data-note");

        /* if note does not exist in scale, move on to next key*/
        if (!scale_object.notes.includes(note)){
            return;
        }


        /*set class text based on key */
        if (blackKeys.includes(note)) {
            classText = "mask key_black";
        } else {
            classText = "mask key";
        }


        /* Create new Div with circle around note text */
        jQuery("<div/>", {
            "class": classText,
            "text": note
        }).appendTo(this);

    });


}





/* highlights triad*/
function highlightTriad() {
    /*
    scale_object.triads.each(function(){
        this.setAttribute("data-note", chromaticNotes[i % 12]);
    });
    */


    console.log(scale_object.triads);
    triads = scale_object.triads;
    root = scale_object.notes[0];

    triads = JSON.parse(triads[root]);

    first_triad = triads[0];

    console.log("sdf");
    console.log(triads[0]);
    console.log("sdf");

    /* iterate through scale.triads keys */
    Object.keys(scale_object.triads).forEach(function(note){
        triads = scale_object.triads[note]
        

        triads_array = JSON.parse(triads);
        console.log(note, triads_array);

        first_triad = triads_array[0];
        first_triad = JSON.stringify(first_triad, null, 4);
        console.log("first" + first_triad);


        var chord = first_triad;
        
        console.log("the_chord", chord);
        colorNotes(chord);
        
        

    });




}


function colorNotes(chord) {
    /* iterate through key markers, change color*/
    var note_dobj = jQuery(".mask");
    note_dobj.each(function(){

        if (chord === undefined){
            console.log("No triads for this note");
            return;
        }

        this_note = this.parentElement.getAttribute("data-note");
        console.log("chord" + chord.notes + "includes" + this_note)

        if (chord.notes.includes(this_note)) {
            this.style.backgroundColor = "#7aceef";
        }
    });

    resetNoteColor(chord, note_dobj);
}


function resetNoteColor(chord, note_dobj) {
    note_dobj.each(function(){

        if (chord === undefined){
            console.log("No triads for this note1");
            return;
        }

        this_note = this.parentElement.getAttribute("data-note");

        //console.log("est");
        //console.log(this_note);
        console.log("bluing non-:" + chord);

        /* non chord notes*/
        if (!chord.notes.includes(this_note)) {
            this.style.backgroundColor = "#fa990f";
        }
    });
}

$( document ).ready(function() {
    console.log( "ready!" );
    setNotes();
    showNotes();
    //highlightTriad();
    //f_colorNotes();
});



/*function doButtonPress() {
    console.log("hi");
}
*/


global_variable = jQuery(".mask").first();

first_one = true;



/* create first triad array (stupid) */
first_triad_array = [];
Object.keys(scale_object.triads).forEach(function(note){
            triads = scale_object.triads[note]
            

            triads_array = JSON.parse(triads);

            first_triad = triads_array[0];
            first_triad = JSON.stringify(first_triad, null, 4);


            var chord = first_triad;

            first_triad_array.push(first_triad);
            
            console.log("the_chord", chord); 
});



index_track = 0;
jQuery(".thisButton").on("click", function () {
            console.log("hi" + index_track);


            if(index_track >= first_triad_array.length) {
                index_track = 0;
            }

            chord = first_triad_array[index_track];
            chord = JSON.parse(chord);
            index_track++;

            colorNotes(chord);

            /* so that I can access chord.name WTF????????? */
            
            console.log("mychord" + chord.name);
            console.log( "happy" + jQuery(".triad_name"));


            jQuery(".triad_name").text(chord.name);

            rearrangeKeys(chord);

});
/* Previous */
jQuery(".prevButton").on("click", function () {
            console.log("hi");


            if(index_track <= 0) {
                index_track = first_triad_array.length - 1;
            }

            chord = first_triad_array[index_track];
            chord = JSON.parse(chord);
            index_track--;

            colorNotes(chord);

            /* so that I can access chord.name WTF????????? */
            
            console.log("mychord" + chord.name);
            console.log( "happy" + jQuery(".triad_name"));


            jQuery(".triad_name").text(chord.name);

            rearrangeKeys(chord);

});






function rearrangeKeys(chord) {
    new_obj = false;

    flag = false;
    second = false;

    var keys = jQuery(".pkey");
    keys.each(function(){


        var el = jQuery(this);
        console.log(el.text());

        if (this.getAttribute("data-note") === chord.root) {


            

            if (flag === false) {
                console.log("sdfsdf")
                console.log(el);
                jQuery(new_obj).detach();
                board.append(new_obj);
                console.log("Ended on" + el.text());
                flag = true;
            } else {
                return;
            }



            //remove
        } else {
            if (new_obj === false) {
                new_obj = [el];
                second = true;
            } else {
                new_obj.push(el);
                second = false;
            }
        }
        
    });

}
