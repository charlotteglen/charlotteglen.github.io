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
	if(baldbert.src.match("./pics/wizards/baldbert1.JPEG")){
		baldbert.src = "./pics/wizards/baldbert2.JPEG";
	} else if(baldbert.src.match("./pics/wizards/baldbert2.JPEG")){
		baldbert.src = "./pics/wizards/baldbert3.JPEG";
	} else if(baldbert.src.match("./pics/wizards/baldbert3.JPEG")){
		baldbert.src = "./pics/wizards/baldbert4.JPEG";
	} else if(baldbert.src.match("./pics/wizards/baldbert4.JPEG")){
		baldbert.src = "./pics/wizards/baldbert1.JPEG";
	} 
}

function rotate_baldbert_left(){
	if(baldbert.src.match("./pics/wizards/baldbert1.JPEG")){
		baldbert.src = "./pics/wizards/baldbert4.JPEG";
	} else if(baldbert.src.match("./pics/wizards/baldbert4.JPEG")){
		baldbert.src = "./pics/wizards/baldbert3.JPEG";
	} else if(baldbert.src.match("./pics/wizards/baldbert3.JPEG")){
		baldbert.src = "./pics/wizards/baldbert2.JPEG";
	} else if(baldbert.src.match("./pics/wizards/baldbert2.JPEG")){
		baldbert.src = "./pics/wizards/baldbert1.JPEG";
	} 
}

// --------------- CARL ROTATION ----------------
function rotate_carl_right() {
	if(carl.src.match("./pics/wizards/carl1.JPEG")){
		carl.src = "./pics/wizards/carl2.JPEG";
	} else if(carl.src.match("./pics/wizards/carl2.JPEG")){
		carl.src = "./pics/wizards/carl3.JPEG";
	} else if(carl.src.match("./pics/wizards/carl3.JPEG")){
		carl.src = "./pics/wizards/carl4.JPEG";
	} else if(carl.src.match("./pics/wizards/carl4.JPEG")){
		carl.src = "./pics/wizards/carl1.JPEG";
	} 
}

function rotate_carl_left(){
	if(carl.src.match("./pics/wizards/carl1.JPEG")){
		carl.src = "./pics/wizards/carl4.JPEG";
	} else if(carl.src.match("./pics/wizards/carl4.JPEG")){
		carl.src = "./pics/wizards/carl3.JPEG";
	} else if(carl.src.match("./pics/wizards/carl3.JPEG")){
		carl.src = "./pics/wizards/carl2.JPEG";
	} else if(carl.src.match("./pics/wizards/carl2.JPEG")){
		carl.src = "./pics/wizards/carl1.JPEG";
	} 
}

//------------- FROTGAR ROTATION ------------------
function rotate_frotgar_right(){
	if(frotgar.src.match("./pics/wizards/frotgar1.JPEG")){
		frotgar.src = "./pics/wizards/frotgar2.JPEG";
	} else if(frotgar.src.match("./pics/wizards/frotgar2.JPEG")){
		frotgar.src = "./pics/wizards/frotgar3.JPEG";
	} else if(frotgar.src.match("./pics/wizards/frotgar3.JPEG")){
		frotgar.src = "./pics/wizards/frotgar4.JPEG";
	} else if(frotgar.src.match("./pics/wizards/frotgar4.JPEG")){
		frotgar.src = "./pics/wizards/frotgar1.JPEG";
	}
}

function rotate_frotgar_left(){
	if(frotgar.src.match("./pics/wizards/frotgar1.JPEG")){
		frotgar.src = "./pics/wizards/frotgar4.JPEG";
	} else if(frotgar.src.match("./pics/wizards/frotgar4.JPEG")){
		frotgar.src = "./pics/wizards/frotgar3.JPEG";
	} else if(frotgar.src.match("./pics/wizards/frotgar3.JPEG")){
		frotgar.src = "./pics/wizards/frotgar2.JPEG";
	} else if(frotgar.src.match("./pics/wizards/frotgar2.JPEG")){
		frotgar.src = "./pics/wizards/frotgar1.JPEG";
	}
}

//----------------- MR. MONEYBAGS ROTATION ---------------
function rotate_moneybags_right(){
	if(moneybags.src.match("./pics/wizards/moneybags1.JPEG")){
		moneybags.src = "./pics/wizards/moneybags2.JPEG";
	} else if(moneybags.src.match("./pics/wizards/moneybags2.JPEG")){
		moneybags.src = "./pics/wizards/moneybags3.JPEG";
	} else if(moneybags.src.match("./pics/wizards/moneybags3.JPEG")){
		moneybags.src = "./pics/wizards/moneybags4.JPEG";
	} else if(moneybags.src.match("./pics/wizards/moneybags4.JPEG")){
		moneybags.src = "./pics/wizards/moneybags1.JPEG";
	}
}

function rotate_moneybags_left(){
	if(moneybags.src.match("./pics/wizards/moneybags1.JPEG")){
		moneybags.src = "./pics/wizards/moneybags4.JPEG";
	} else if(moneybags.src.match("./pics/wizards/moneybags4.JPEG")){
		moneybags.src = "./pics/wizards/moneybags3.JPEG";
	} else if(moneybags.src.match("./pics/wizards/moneybags3.JPEG")){
		moneybags.src = "./pics/wizards/moneybags2.JPEG";
	} else if(moneybags.src.match("./pics/wizards/moneybags2.JPEG")){
		moneybags.src = "./pics/wizards/moneybags1.JPEG";
	}
}

//--------------- OGBERT ROTATION --------------------
function rotate_ogbert_right(){
	if(ogbert.src.match("./pics/wizards/ogbert1.JPEG")){
		ogbert.src = "./pics/wizards/ogbert2.JPEG";
	} else if(ogbert.src.match("./pics/wizards/ogbert2.JPEG")){
		ogbert.src = "./pics/wizards/ogbert3.JPEG";
	} else if(ogbert.src.match("./pics/wizards/ogbert3.JPEG")){
		ogbert.src = "./pics/wizards/ogbert4.JPEG";
	} else if(ogbert.src.match("./pics/wizards/ogbert4.JPEG")){
		ogbert.src = "./pics/wizards/ogbert1.JPEG";
	}
}

function rotate_ogbert_left(){
	if(ogbert.src.match("./pics/wizards/ogbert1.JPEG")){
		ogbert.src = "./pics/wizards/ogbert4.JPEG";
	} else if(ogbert.src.match("./pics/wizards/ogbert4.JPEG")){
		ogbert.src = "./pics/wizards/ogbert3.JPEG";
	} else if(ogbert.src.match("./pics/wizards/ogbert3.JPEG")){
		ogbert.src = "./pics/wizards/ogbert2.JPEG";
	} else if(ogbert.src.match("./pics/wizards/ogbert2.JPEG")){
		ogbert.src = "./pics/wizards/ogbert1.JPEG";
	}
}

//-------------- PROSPERO ROTATION ------------------
function rotate_prospero_right(){
	if(prospero.src.match("./pics/wizards/prospero1.JPEG")){
		prospero.src = "./pics/wizards/prospero2.JPEG";
	} else if(prospero.src.match("./pics/wizards/prospero2.JPEG")){
		prospero.src = "./pics/wizards/prospero3.JPEG";
	} else if(prospero.src.match("./pics/wizards/prospero3.JPEG")){
		prospero.src = "./pics/wizards/prospero4.JPEG";
	} else if(prospero.src.match("./pics/wizards/prospero4.JPEG")){
		prospero.src = "./pics/wizards/prospero1.JPEG";
	}
}

function rotate_prospero_left(){
	if(prospero.src.match("./pics/wizards/prospero1.JPEG")){
		prospero.src = "./pics/wizards/prospero4.JPEG";
	} else if(prospero.src.match("./pics/wizards/prospero4.JPEG")){
		prospero.src = "./pics/wizards/prospero3.JPEG";
	} else if(prospero.src.match("./pics/wizards/prospero3.JPEG")){
		prospero.src = "./pics/wizards/prospero2.JPEG";
	} else if(prospero.src.match("./pics/wizards/prospero2.JPEG")){
		prospero.src = "./pics/wizards/prospero1.JPEG";
	}
}

//-------------- VALENTINE ROTATION -------------------
function rotate_valentine_right(){
	if(valentine.src.match("./pics/wizards/valentine1.JPEG")){
		valentine.src = "./pics/wizards/valentine2.JPEG";
	} else if(valentine.src.match("./pics/wizards/valentine2.JPEG")){
		valentine.src = "./pics/wizards/valentine3.JPEG";
	} else if(valentine.src.match("./pics/wizards/valentine3.JPEG")){
		valentine.src = "./pics/wizards/valentine4.JPEG";
	} else if(valentine.src.match("./pics/wizards/valentine4.JPEG")){
		valentine.src = "./pics/wizards/valentine1.JPEG";
	}
}

function rotate_valentine_left(){
	if(valentine.src.match("./pics/wizards/valentine1.JPEG")){
		valentine.src = "./pics/wizards/valentine4.JPEG";
	} else if(valentine.src.match("./pics/wizards/valentine4.JPEG")){
		valentine.src = "./pics/wizards/valentine3.JPEG";
	} else if(valentine.src.match("./pics/wizards/valentine3.JPEG")){
		valentine.src = "./pics/wizards/valentine2.JPEG";
	} else if(valentine.src.match("./pics/wizards/valentine2.JPEG")){
		valentine.src = "./pics/wizards/valentine1.JPEG";
	}
}

//-------------- WIGBALD ROTATION --------------------
function rotate_wigbald_right(){
	if(wigbald.src.match("./pics/wizards/wigbald1.JPEG")){
		wigbald.src = "./pics/wizards/wigbald2.JPEG";
	} else if(wigbald.src.match("./pics/wizards/wigbald2.JPEG")){
		wigbald.src = "./pics/wizards/wigbald3.JPEG";
	} else if(wigbald.src.match("./pics/wizards/wigbald3.JPEG")){
		wigbald.src = "./pics/wizards/wigbald4.JPEG";
	} else if(wigbald.src.match("./pics/wizards/wigbald4.JPEG")){
		wigbald.src = "./pics/wizards/wigbald1.JPEG";
	}
}

function rotate_wigbald_left(){
	if(wigbald.src.match("./pics/wizards/wigbald1.JPEG")){
		wigbald.src = "./pics/wizards/wigbald4.JPEG";
	} else if(wigbald.src.match("./pics/wizards/wigbald4.JPEG")){
		wigbald.src = "./pics/wizards/wigbald3.JPEG";
	} else if(wigbald.src.match("./pics/wizards/wigbald3.JPEG")){
		wigbald.src = "./pics/wizards/wigbald2.JPEG";
	} else if(wigbald.src.match("./pics/wizards/wigbald2.JPEG")){
		wigbald.src = "./pics/wizards/wigbald1.JPEG";
	}

}
