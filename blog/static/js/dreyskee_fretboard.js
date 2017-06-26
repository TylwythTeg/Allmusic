/* Dreyskee */

var slideSpeed = 300;
var noteToShow = "All";
var notesToShow = textNotes["notes"];
var canClick = true;

console.log(scale_obj)



//to do with colors
function interval_to_color(interval) {
    switch(interval) {

        
        case "Unison":
            return jQuery.Color(" rgba(213,92,92,1) ");
            break;
        case "Minor Second":
            return jQuery.Color(" rgba(212,124,84,1) ");
            break;
        case "Second":
            return jQuery.Color(" rgba(212,147,84,1) ");
            break;
        case "Minor Third":
            return jQuery.Color(" rgba(212,160,84,1) ");
            break;//
        case "Major Third":
            return jQuery.Color(" rgba(212,183,84,1) ");
            break;
        case "Fourth":
            return jQuery.Color(" rgba(124,212,84,1) ");
            break;
        case "Diminished Fifth":
            return jQuery.Color(" rgba(84,212,139,1) ");
            break;
        case "Fifth":
            return jQuery.Color(" rgba(84,211,181,1) ");
            break;
        case "Minor Sixth":
            return jQuery.Color(" rgba(84,181,211,1) ");
            break;
        case "Sixth":
            return jQuery.Color(" rgba(84,137,211,1) ");
            break;
        case "Dominant Seventh":
            return jQuery.Color(" rgba(112,84,211,1) ");
            break;
        case "Major Seventh":
            return jQuery.Color(" rgba(211,84,164,1) ");
            break;
        default:
            return jQuery.Color(" rgba(213,92,92,1) ");
            break;
            //code block
    }


    
}








//Use Fretboard.py to return array 
/* */

console.log(fretboard)
console.log(fretboard.strings[0].frets[1])
//document.write(fretboard.strings[0].frets[1])



function build_fretboard() {

    //this is for a dynamic fretboard, where, from bottom to top fretboardStrings[0] is the strings
    fretboardStrings = {}

    for(var i=0; i < fretboard.strings.length; i++) {

        fretboardStrings[i] = fretboard.strings[i].frets
        frets_count = fretboard.strings[i].frets.length
    }
    console.log(fretboardStrings)

}



function mark_notes() {

    //dynamically apply appropriate notes to strings on the fretboard from bottom to top
    //var frets = notes.e.length
    var frets = frets_count
    console.log(frets)
    console.log(fretboardStrings.length)


    var these_strings = {
        0: 'low-e',
        1: 'a',
        2: 'd',
        3: 'g',
        4: 'b',
        5: 'high-e',
    }




    var strings_length = Object.keys(fretboardStrings).length
    for (var fret = 0; fret < frets; fret++) {
        for (var string = 0;string < strings_length;string++) {
            $('.mask.' + these_strings[string] + ' ul').append('<li note='+fretboardStrings[string][fret]+'>'+fretboardStrings[string][fret]+'</li>')


            //change color based interval
            //$('.mask.' + these_strings[string] + ' ul li').animate({
            //    backgroundColor: jQuery.Color(" rgba(255,0,0,1) ")
            //}, 0);

           

        }
    }





    //update open notes
    for (var i = 0; i < 6; i++) {
        console.log('.open_' + these_strings[i]);
        //document.write(these_strings[i])
        $('.open_' + these_strings[i]).text(fretboardStrings[i][0]);
    }



    color_notes();
}




function color_notes() {
    var these_strings = {
        0: 'low-e',
        1: 'a',
        2: 'd',
        3: 'g',
        4: 'b',
        5: 'high-e',
    }




    for (i = 0; i < scale_obj.notes.length; i++) {
        if (i === 0) 
            continue;
        
        console.log(scale_obj.intervals[i-1]);

        //$('.mask.' + these_strings[0] + ' ul li').animate({
         //       backgroundColor: interval_to_color(scale_obj.intervals[i-1])
        //    }, 0);

                note_elements = $('.' + these_strings[0] + ' ul li');
                console.log("h9i");
                console.log(note_elements);

                for(jams = 0; jams < note_elements.length; jams++) {
                    //note_elements[jams].animate({
                    //    backgroundColor: interval_to_color(scale_obj.intervals[jams-1])
                    //}, 0);


                    console.log("found");
                    console.log(note_elements[jams]);
                    //note_elements[jams].style.backgroundColor = interval_to_color(scale_obj.intervals[jams-1])

                    var the_noted = note_elements[jams].innerText;
                    console.log(the_noted);
                    console.log(scale_obj.interval_dict[the_noted]);
                    note_elements[jams].style.backgroundColor = interval_to_color(scale_obj.interval_dict[the_noted])
                }
                //srting 2
                note_elements = $('.' + these_strings[1] + ' ul li');
                console.log("h9i");
                console.log(note_elements);

                for(jams = 0; jams < note_elements.length; jams++) {
                    //note_elements[jams].animate({
                    //    backgroundColor: interval_to_color(scale_obj.intervals[jams-1])
                    //}, 0);


                    console.log("found");
                    console.log(note_elements[jams]);
                    //note_elements[jams].style.backgroundColor = interval_to_color(scale_obj.intervals[jams-1])

                    var the_noted = note_elements[jams].innerText;
                    console.log(the_noted);
                    console.log(scale_obj.interval_dict[the_noted]);
                    note_elements[jams].style.backgroundColor = interval_to_color(scale_obj.interval_dict[the_noted])
                }
                //srting 3
                note_elements = $('.' + these_strings[2] + ' ul li');
                console.log("h9i");
                console.log(note_elements);

                for(jams = 0; jams < note_elements.length; jams++) {
                    //note_elements[jams].animate({
                    //    backgroundColor: interval_to_color(scale_obj.intervals[jams-1])
                    //}, 0);


                    console.log("found");
                    console.log(note_elements[jams]);
                    //note_elements[jams].style.backgroundColor = interval_to_color(scale_obj.intervals[jams-1])

                    var the_noted = note_elements[jams].innerText;
                    console.log(the_noted);
                    console.log(scale_obj.interval_dict[the_noted]);
                    note_elements[jams].style.backgroundColor = interval_to_color(scale_obj.interval_dict[the_noted])
                }
                //srting 4
                note_elements = $('.' + these_strings[3] + ' ul li');
                console.log("h9i");
                console.log(note_elements);

                for(jams = 0; jams < note_elements.length; jams++) {
                    //note_elements[jams].animate({
                    //    backgroundColor: interval_to_color(scale_obj.intervals[jams-1])
                    //}, 0);


                    console.log("found");
                    console.log(note_elements[jams]);
                    //note_elements[jams].style.backgroundColor = interval_to_color(scale_obj.intervals[jams-1])

                    var the_noted = note_elements[jams].innerText;
                    console.log(the_noted);
                    console.log(scale_obj.interval_dict[the_noted]);
                    note_elements[jams].style.backgroundColor = interval_to_color(scale_obj.interval_dict[the_noted])
                }
                //srting 5
                note_elements = $('.' + these_strings[4] + ' ul li');
                console.log("h9i");
                console.log(note_elements);

                for(jams = 0; jams < note_elements.length; jams++) {
                    //note_elements[jams].animate({
                    //    backgroundColor: interval_to_color(scale_obj.intervals[jams-1])
                    //}, 0);


                    console.log("found");
                    console.log(note_elements[jams]);
                    //note_elements[jams].style.backgroundColor = interval_to_color(scale_obj.intervals[jams-1])

                    var the_noted = note_elements[jams].innerText;
                    console.log(the_noted);
                    console.log(scale_obj.interval_dict[the_noted]);
                    note_elements[jams].style.backgroundColor = interval_to_color(scale_obj.interval_dict[the_noted])
                }
                //srting 6
                note_elements = $('.' + these_strings[5] + ' ul li');
                console.log("h9i");
                console.log(note_elements);

                for(jams = 0; jams < note_elements.length; jams++) {
                    //note_elements[jams].animate({
                    //    backgroundColor: interval_to_color(scale_obj.intervals[jams-1])
                    //}, 0);


                    console.log("found");
                    console.log(note_elements[jams]);
                    //note_elements[jams].style.backgroundColor = interval_to_color(scale_obj.intervals[jams-1])

                    var the_noted = note_elements[jams].innerText;
                    console.log(the_noted);
                    console.log(scale_obj.interval_dict[the_noted]);
                    note_elements[jams].style.backgroundColor = interval_to_color(scale_obj.interval_dict[the_noted])
                }
        /*
        $('.' + these_strings[0] + ' ul li').animate({
                backgroundColor: interval_to_color(scale_obj.intervals[i-1])
            }, 0);*/

        //$('.' + []).animate({
         //       backgroundColor: interval_to_color(scale_obj.intervals[i-1])
        //    }, 0);

    }



}








build_fretboard();
mark_notes();






//Tune Down
$('.controls a.down').click(function(){
    if(!canClick){return false;}
    canClick = false;

    //what function is this
    $('.mask').each(function(){
        var el = $(this);
        var nextNote = el.find('li:nth-child(12)').text();



            /*
            this_note = el.find('li:nth-child(2)').text();
            if (-1 == $.inArray(this_note, notesToShow) ) {
            //window.alert("hey");
            window.alert(nextNote);
                hideNotes(el.find('li:nth-child(2)'));
            
            }*/

        el.animate({right: -268}, slideSpeed);

        //if nextNote is in the notes we want to show
        if (-1 != $.inArray(nextNote, notesToShow) ) {
            //window.alert("hey");
            //window.alert(nextNote);
            
        }




        setTimeout(function(){
            el.find('ul').prepend( "<li note="+nextNote+">"+nextNote+"</li>" );
            el.find('li:last-child').remove();




            el.css({right: -189});
        }, slideSpeed+20)
    });

    setTimeout(function(){
        changeOpenNotes();
        canClick = true;
    }, slideSpeed+20)

    set_fretboard(notesToShow);
    
    return false;
});

//Tone Up
$('.controls a.up').click(function(){
    if(!canClick){return false;}
    canClick = false;

    $('.mask').each(function(){
        var el = $(this);
        var nextNote = el.find('li:nth-child(2)').text();

        //window.print(nextNote);
        //window.alert(nextNote);

        $( "<li note="+nextNote+">"+nextNote+"</li>" ).appendTo(el.find('ul'));

        /*if 

        for(i=0;i< notesToShow.length;i++) {
            if (nextNote == notesToShow[i]) {

            }
        }*/


        //if nextNote is in the notes we want to show
        if (-1 != $.inArray(nextNote, notesToShow) ) {
            //window.alert("hey");
            //window.alert(nextNote);
            
        }


        el.css({right: -268});
        el.find('li:first-child').remove();
        el.animate({right: -189}, slideSpeed);
        
    });

    changeOpenNotes();

    setTimeout(function(){
        canClick = true;
    }, slideSpeed+20)

    set_fretboard(notesToShow);
    return false;
    
});

//Show only this note on the fretboard (vs. All)
$('.controls li').click(function(){
    noteToShow = $(this).text();
    showNote(noteToShow);
});





//right now only called when showing only 1 specific note
function showNote(noteToShow){
    if(noteToShow == "All"){
        $('.guitar-neck .notes li').animate({opacity:1}, 500);
    } else {
        $('.guitar-neck .notes li').not('[note="'+noteToShow+'"]').animate({opacity:0}, 500);
        $('.guitar-neck .notes li[note="'+noteToShow+'"]').animate({opacity:1}, 500);   
    }   
}






//Used to change the open notes when tuning is tuned up or tuned down
function changeOpenNotes(){
    //console.log("In Change Open Notes");

    $('.notes .mask').each(function(){
        
        var el = $(this);
        //console.log(this);
        var elClass = el.attr('class').split(' ')[1];
        //console.log("elClass: " + elClass);
        var note = el.find('li:last-child').text();

        //console.log("new note: " + note)


        //console.log($('.open-notes .'+elClass));
        $('.open-notes .open_'+elClass).text(note);
    });

}







//pure
function showNotes(notes) {
    for (var i = 0; i < notes.length; i++){
        $('.guitar-neck .notes li[note="'+notes[i]+'"]').animate({opacity:1}, 500);
    }
}

function hideNotes(notes){
    notes.animate({opacity:0}, 500);
}

//Returns a list of note DOMs that are NOT in the series of notes given
function notesNotIn(notes) {
    nonNotes = $('.guitar-neck .notes li');

    for (var i = 0; i < notes.length; i++){
        nonNotes = nonNotes.not('[note="'+ notes[i] +'"]');
    }

    return nonNotes;
}

//Set the fretboard to make only notes in the given series visible
function set_fretboard(notes) {

    non_notes = notesNotIn(notes);
    hideNotes(non_notes);

    showNotes(notes);

}