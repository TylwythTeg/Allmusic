

/*

//Tune Down
var downButton = $('.controls a.down');

downButton.click(function(){
	if(!canClick){return false;}
	canClick = false;

	$('.mask').each(function(){
		var el = $(this);
		var nextNote = el.find('li:nth-child(12)').text();

		el.animate({right: -268}, slideSpeed);
		setTimeout(function(){
			el.find('ul').prepend( "<li note="+nextNote+">"+nextNote+"</li>" );
			el.find('li:last-child').remove();
			el.css({right: -189});
		}, slideSpeed+20)
	});

	setTimeout(function(){
		changeOpenNotes();
		//showNote(noteToShow);
		canClick = true;
	}, slideSpeed+20)


	showNote(noteToShow);
	
	return false;
});
*/


//showNotes(textNotes["notes"]);

set_fretboard(textNotes["notes"]);

//document.write(textNotes["notes"]);
//document.write("hey");
//document.write(textNotes["notes"].length);


/*for(var i = 0; i < textNotes["notes"].length; i++)
{
	//Why is this function plural anyway? Kind of odd. Might want to change that
	showNote(textNote["notes"][i]);
}*/




