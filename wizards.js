//wizard rotation
var baldbert = document.getElementById("baldbert");
var carl = document.getElementById("carl");
var frotgar = document.getElementById("frotgar");
var moneybags = document.getElementById("moneybags");
var ogbert = document.getElementById("ogbert");
var prospero = document.getElementById("prospero");
var valentine = document.getElementById("valentine");
var wigbald = document.getElementById("wigbald");

// ------------ BALDBERT ROTATION --------------
function rotate_baldbert_right() {
	//change img src
	if(baldbert.src.match("./pics/wizards/baldbert1.jpeg")){
		baldbert.src = "./pics/wizards/baldbert2.jpeg";
	} else if(baldbert.src.match("./pics/wizards/baldbert2.jpeg")){
		baldbert.src = "./pics/wizards/baldbert3.jpeg";
	} else if(baldbert.src.match("./pics/wizards/baldbert3.jpeg")){
		baldbert.src = "./pics/wizards/baldbert4.jpeg";
	} else if(baldbert.src.match("./pics/wizards/baldbert4.jpeg")){
		baldbert.src = "./pics/wizards/baldbert1.jpeg";
	} 
}

function rotate_baldbert_left(){
	if(baldbert.src.match("./pics/wizards/baldbert1.jpeg")){
		baldbert.src = "./pics/wizards/baldbert4.jpeg";
	} else if(baldbert.src.match("./pics/wizards/baldbert4.jpeg")){
		baldbert.src = "./pics/wizards/baldbert3.jpeg";
	} else if(baldbert.src.match("./pics/wizards/baldbert3.jpeg")){
		baldbert.src = "./pics/wizards/baldbert2.jpeg";
	} else if(baldbert.src.match("./pics/wizards/baldbert2.jpeg")){
		baldbert.src = "./pics/wizards/baldbert1.jpeg";
	} 
}

// --------------- CARL ROTATION ----------------
function rotate_carl_right() {
	if(carl.src.match("./pics/wizards/carl1.jpeg")){
		carl.src = "./pics/wizards/carl2.jpeg";
	} else if(carl.src.match("./pics/wizards/carl2.jpeg")){
		carl.src = "./pics/wizards/carl3.jpeg";
	} else if(carl.src.match("./pics/wizards/carl3.jpeg")){
		carl.src = "./pics/wizards/carl4.jpeg";
	} else if(carl.src.match("./pics/wizards/carl4.jpeg")){
		carl.src = "./pics/wizards/carl1.jpeg";
	} 
}

function rotate_carl_left(){
	if(carl.src.match("./pics/wizards/carl1.jpeg")){
		carl.src = "./pics/wizards/carl4.jpeg";
	} else if(carl.src.match("./pics/wizards/carl4.jpeg")){
		carl.src = "./pics/wizards/carl3.jpeg";
	} else if(carl.src.match("./pics/wizards/carl3.jpeg")){
		carl.src = "./pics/wizards/carl2.jpeg";
	} else if(carl.src.match("./pics/wizards/carl2.jpeg")){
		carl.src = "./pics/wizards/carl1.jpeg";
	} 
}

//------------- FROTGAR ROTATION ------------------
function rotate_frotgar_right(){
	if(frotgar.src.match("./pics/wizards/frotgar1.jpeg")){
		frotgar.src = "./pics/wizards/frotgar2.jpeg";
	} else if(frotgar.src.match("./pics/wizards/frotgar2.jpeg")){
		frotgar.src = "./pics/wizards/frotgar3.jpeg";
	} else if(frotgar.src.match("./pics/wizards/frotgar3.jpeg")){
		frotgar.src = "./pics/wizards/frotgar4.jpeg";
	} else if(frotgar.src.match("./pics/wizards/frotgar4.jpeg")){
		frotgar.src = "./pics/wizards/frotgar1.jpeg";
	}
}

function rotate_frotgar_left(){
	if(frotgar.src.match("./pics/wizards/frotgar1.jpeg")){
		frotgar.src = "./pics/wizards/frotgar4.jpeg";
	} else if(frotgar.src.match("./pics/wizards/frotgar4.jpeg")){
		frotgar.src = "./pics/wizards/frotgar3.jpeg";
	} else if(frotgar.src.match("./pics/wizards/frotgar3.jpeg")){
		frotgar.src = "./pics/wizards/frotgar2.jpeg";
	} else if(frotgar.src.match("./pics/wizards/frotgar2.jpeg")){
		frotgar.src = "./pics/wizards/frotgar1.jpeg";
	}
}

//----------------- MR. MONEYBAGS ROTATION ---------------
function rotate_moneybags_right(){
	if(moneybags.src.match("./pics/wizards/moneybags1.jpeg")){
		moneybags.src = "./pics/wizards/moneybags2.jpeg";
	} else if(moneybags.src.match("./pics/wizards/moneybags2.jpeg")){
		moneybags.src = "./pics/wizards/moneybags3.jpeg";
	} else if(moneybags.src.match("./pics/wizards/moneybags3.jpeg")){
		moneybags.src = "./pics/wizards/moneybags4.jpeg";
	} else if(moneybags.src.match("./pics/wizards/moneybags4.jpeg")){
		moneybags.src = "./pics/wizards/moneybags1.jpeg";
	}
}

function rotate_moneybags_left(){
	if(moneybags.src.match("./pics/wizards/moneybags1.jpeg")){
		moneybags.src = "./pics/wizards/moneybags4.jpeg";
	} else if(moneybags.src.match("./pics/wizards/moneybags4.jpeg")){
		moneybags.src = "./pics/wizards/moneybags3.jpeg";
	} else if(moneybags.src.match("./pics/wizards/moneybags3.jpeg")){
		moneybags.src = "./pics/wizards/moneybags2.jpeg";
	} else if(moneybags.src.match("./pics/wizards/moneybags2.jpeg")){
		moneybags.src = "./pics/wizards/moneybags1.jpeg";
	}
}

//--------------- OGBERT ROTATION --------------------
function rotate_ogbert_right(){
	if(ogbert.src.match("./pics/wizards/ogbert1.jpeg")){
		ogbert.src = "./pics/wizards/ogbert2.jpeg";
	} else if(ogbert.src.match("./pics/wizards/ogbert2.jpeg")){
		ogbert.src = "./pics/wizards/ogbert3.jpeg";
	} else if(ogbert.src.match("./pics/wizards/ogbert3.jpeg")){
		ogbert.src = "./pics/wizards/ogbert4.jpeg";
	} else if(ogbert.src.match("./pics/wizards/ogbert4.jpeg")){
		ogbert.src = "./pics/wizards/ogbert1.jpeg";
	}
}

function rotate_ogbert_left(){
	if(ogbert.src.match("./pics/wizards/ogbert1.jpeg")){
		ogbert.src = "./pics/wizards/ogbert4.jpeg";
	} else if(ogbert.src.match("./pics/wizards/ogbert4.jpeg")){
		ogbert.src = "./pics/wizards/ogbert3.jpeg";
	} else if(ogbert.src.match("./pics/wizards/ogbert3.jpeg")){
		ogbert.src = "./pics/wizards/ogbert2.jpeg";
	} else if(ogbert.src.match("./pics/wizards/ogbert2.jpeg")){
		ogbert.src = "./pics/wizards/ogbert1.jpeg";
	}
}

//-------------- PROSPERO ROTATION ------------------
function rotate_prospero_right(){
	if(prospero.src.match("./pics/wizards/prospero1.jpeg")){
		prospero.src = "./pics/wizards/prospero2.jpeg";
	} else if(prospero.src.match("./pics/wizards/prospero2.jpeg")){
		prospero.src = "./pics/wizards/prospero3.jpeg";
	} else if(prospero.src.match("./pics/wizards/prospero3.jpeg")){
		prospero.src = "./pics/wizards/prospero4.jpeg";
	} else if(prospero.src.match("./pics/wizards/prospero4.jpeg")){
		prospero.src = "./pics/wizards/prospero1.jpeg";
	}
}

function rotate_prospero_left(){
	if(prospero.src.match("./pics/wizards/prospero1.jpeg")){
		prospero.src = "./pics/wizards/prospero4.jpeg";
	} else if(prospero.src.match("./pics/wizards/prospero4.jpeg")){
		prospero.src = "./pics/wizards/prospero3.jpeg";
	} else if(prospero.src.match("./pics/wizards/prospero3.jpeg")){
		prospero.src = "./pics/wizards/prospero2.jpeg";
	} else if(prospero.src.match("./pics/wizards/prospero2.jpeg")){
		prospero.src = "./pics/wizards/prospero1.jpeg";
	}
}

//-------------- VALENTINE ROTATION -------------------
function rotate_valentine_right(){
	if(valentine.src.match("./pics/wizards/valentine1.jpeg")){
		valentine.src = "./pics/wizards/valentine2.jpeg";
	} else if(valentine.src.match("./pics/wizards/valentine2.jpeg")){
		valentine.src = "./pics/wizards/valentine3.jpeg";
	} else if(valentine.src.match("./pics/wizards/valentine3.jpeg")){
		valentine.src = "./pics/wizards/valentine4.jpeg";
	} else if(valentine.src.match("./pics/wizards/valentine4.jpeg")){
		valentine.src = "./pics/wizards/valentine1.jpeg";
	}
}

function rotate_valentine_left(){
	if(valentine.src.match("./pics/wizards/valentine1.jpeg")){
		valentine.src = "./pics/wizards/valentine4.jpeg";
	} else if(valentine.src.match("./pics/wizards/valentine4.jpeg")){
		valentine.src = "./pics/wizards/valentine3.jpeg";
	} else if(valentine.src.match("./pics/wizards/valentine3.jpeg")){
		valentine.src = "./pics/wizards/valentine2.jpeg";
	} else if(valentine.src.match("./pics/wizards/valentine2.jpeg")){
		valentine.src = "./pics/wizards/valentine1.jpeg";
	}
}

//-------------- WIGBALD ROTATION --------------------
function rotate_wigbald_right(){
	if(wigbald.src.match("./pics/wizards/wigbald1.jpeg")){
		wigbald.src = "./pics/wizards/wigbald2.jpeg";
	} else if(wigbald.src.match("./pics/wizards/wigbald2.jpeg")){
		wigbald.src = "./pics/wizards/wigbald3.jpeg";
	} else if(wigbald.src.match("./pics/wizards/wigbald3.jpeg")){
		wigbald.src = "./pics/wizards/wigbald4.jpeg";
	} else if(wigbald.src.match("./pics/wizards/wigbald4.jpeg")){
		wigbald.src = "./pics/wizards/wigbald1.jpeg";
	}
}

function rotate_wigbald_left(){
	if(wigbald.src.match("./pics/wizards/wigbald1.jpeg")){
		wigbald.src = "./pics/wizards/wigbald4.jpeg";
	} else if(wigbald.src.match("./pics/wizards/wigbald4.jpeg")){
		wigbald.src = "./pics/wizards/wigbald3.jpeg";
	} else if(wigbald.src.match("./pics/wizards/wigbald3.jpeg")){
		wigbald.src = "./pics/wizards/wigbald2.jpeg";
	} else if(wigbald.src.match("./pics/wizards/wigbald2.jpeg")){
		wigbald.src = "./pics/wizards/wigbald1.jpeg";
	}
}