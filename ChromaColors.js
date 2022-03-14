outlets = 2;

function list() {
	
	//get the array of notes by midi pitch number (0-127)	 
	var pitches = arrayfromargs( arguments );

	//sort highest to lowest	
	pitches.sort( function( a , b ) { return a - b } );
	
	//get the Chroma note number. Since sorting is done beforehand,
	//lower octave notes will still be displayed first in the list
 	//even if their chroma number is higher than the others.
	var colorList = pitches.map( function(note) { return note % 12 } );
		

	//output RGB color
	outlet( 0 , colorList );	
	outlet( 1 , pitches );
	
}

