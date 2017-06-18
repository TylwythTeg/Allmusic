/* Dreyskee */

var slideSpeed = 300;
var noteToShow = "All";
var notesToShow = textNotes["notes"];
var canClick = true;



//Use Fretboard.py to return array 


console.log(fretboard)
console.log(fretboard.strings[0].frets[1])
//document.write(fretboard.strings[0].frets[1])



function build_fretboard() {
    /*
    notes = {
        e: fretboard.strings[0].frets,
        a: fretboard.strings[1].frets,
        d: fretboard.strings[2].frets,
        g: fretboard.strings[3].frets,
        b: fretboard.strings[4].frets,
    }*/



    //this is for a dynamic fretboard, where, from bottom to top fretboardStrings[0] is the strings
    fretboardStrings = {}

    for(var i=0; i < fretboard.strings.length; i++) {

        fretboardStrings[i] = fretboard.strings[i].frets
        frets_count = fretboard.strings[i].frets.length
    }
    console.log(fretboardStrings)

}

//swap e a d g b for 0-5
function change_class_names_for_masks() {
    /*
    $('.mask.low-e ul').toggleClass('.mask.low-e mask.' + 0 );
    $('.mask.a ul').toggleClass('mask.a .mask.' + 1 );
    $('.mask.d ul').toggleClass('mask.d .mask.' + 2 );
    $('.mask.g ul').toggleClass('mask.g .mask.' + 3 );
    $('.mask.b ul').toggleClass('mask.b .mask.' + 4 );
    $('.mask.high-e ul').toggleClass('maskhigh-e mask.' + 5 );
    */


    /*
    $('.mask.low-e').toggleClass('low-e string' + 0 );
    $('.mask.a').toggleClass('a string' + 1 );
    $('.mask.d').toggleClass('d string' + 2 );
    $('.mask.g').toggleClass('g string' + 3 );
    $('.mask.b').toggleClass('b string' + 4 );
    $('.mask.high-e').toggleClass('high-e string' + 5 );
    */
    //document.write("sdf")
    //document.write("sdf")
}





function mark_notes() {
    /*
    for (var i=0; i < notes.e.length; i++){
        $('.mask.low-e ul').append('<li note='+notes.e[i]+'>'+notes.e[i]+'</li>')
        $('.mask.a ul').append('<li note='+notes.a[i]+'>'+notes.a[i]+'</li>')
        $('.mask.d ul').append('<li note='+notes.d[i]+'>'+notes.d[i]+'</li>')
        $('.mask.g ul').append('<li note='+notes.g[i]+'>'+notes.g[i]+'</li>')
        $('.mask.b ul').append('<li note='+notes.b[i]+'>'+notes.b[i]+'</li>')
        $('.mask.high-e ul').append('<li note='+notes.e[i]+'>'+notes.e[i]+'</li>')
    }  */
    

    //what I'm missing is dynamically GENERATING the HTML objects for each string



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
        }
    }




    //update open notes
    for (var i = 0; i < 6; i++) {
        console.log('.open_' + these_strings[i]);
        //document.write(these_strings[i])
        $('.open_' + these_strings[i]).text(fretboardStrings[i][0]);
    }
}

build_fretboard();
change_class_names_for_masks();
mark_notes();


/*
var notes = {
    e: ['E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E'],
    a: ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#',"A"],
    d: ['D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D'],
    g: ['G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G'],
    b: ['B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
}*/








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






function showNote(noteToShow){
    if(noteToShow == "All"){
        $('.guitar-neck .notes li').animate({opacity:1}, 500);
    } else {
        $('.guitar-neck .notes li').not('[note="'+noteToShow+'"]').animate({opacity:0}, 500);
        $('.guitar-neck .notes li[note="'+noteToShow+'"]').animate({opacity:1}, 500);   
    }   
}







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