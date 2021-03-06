outlets = 2;

function list() {
	
	//get the array of notes by midi pitch number (0-127)	 
	var pitches = arrayfromargs( arguments );

	//sort highest to lowest	
	pitches.sort( function( a , b ) { return a - b } );
	
	//get the Chroma note number. Since sorting is done beforehand,
	//lower octave notes will still be displayed first in the list
 	//even if their chroma number is higher than the others.
	var chromaList = pitches.map( function(note) { return note % 12 } );

    var chromaAverage = getChromaAverage(chromaList);
    
    var color = getColor(chromaAverage);


	//output RGB color
	outlet( 0 , color );	
	outlet( 1 , chromaAverage );
	
}

function getColor(chromaAverage){
    var color = [0,0,0]
    switch(chromaAverage){
        case 0: color = [204,0,0]; break; //red
        case 1: color = [204,102,0]; break; //orange
        case 2: color = [204,170,0]; break; //gold
        case 3: color = [255,255,0]; break; //yellow
        case 4: color = [212,255,0]; break; //lime
        case 5: color = [115,230,0]; break; //lawn green
        case 6: color = [0,255,0]; break; //green
        case 7: color = [0,153,51]; break; //dark green
        case 8: color = [25,255,255]; break; //cyan
		case 9: color = [0,170,255]; break; //capri
        case 10: color = [0,0,255]; break; //blue
 		case 11: color = [89,0,179]; break; //violet
    }
	var floatColor = color.map( function(rgbComponent) { return rgbComponent / 255 } );
    return floatColor;
}

function getChromaAverage(chromaList){
	
	var chromaAverage = 0;
	
	for (var iter = 0; iter < chromaList.length; iter++){
        chromaAverage += chromaList[iter];
    }

    chromaAverage = Math.round(chromaAverage / chromaList.length);
	
	return chromaAverage;
}
	

