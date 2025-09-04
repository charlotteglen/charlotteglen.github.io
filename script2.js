var baldbert_modal = document.getElementById("baldbert-modal");
var carl_modal = document.getElementById("carl-modal");
var frotgar_modal = document.getElementById("frotgar-modal");
var moneybags_modal = document.getElementById("moneybags-modal");
var ogbert_modal = document.getElementById("ogbert-modal");
var prospero_modal = document.getElementById("prospero-modal");
var valentine_modal = document.getElementById("valentine-modal");
var wigbald_modal = document.getElementById("wigbald-modal");

var baldbert = document.getElementById("baldbert");
var carl = document.getElementById("carl");
var frotgar = document.getElementById("frotgar");
var moneybags = document.getElementById("moneybags");
var ogbert = document.getElementById("ogbert");
var prospero = document.getElementById("prospero");
var valentine = document.getElementById("valentine");
var wigbald = document.getElementById("wigbald");

var spans = document.getElementsByClassName("close");

baldbert.onclick = function() {
	baldbert_modal.style.display = "block";
}

carl.onclick = function() {
	carl_modal.style.display = "block";
}

frotgar.onclick = function() {
	frotgar_modal.style.display = "block";
}

moneybags.onclick = function() {
	moneybags_modal.style.display = "block";
}

ogbert.onclick = function() {
	ogbert_modal.style.display = "block";
}

prospero.onclick = function(){
	prospero_modal.style.display = "block";
}

valentine.onclick = function(){
	valentine_modal.style.display = "block";
}

wigbald.onclick = function(){
	wigbald_modal.style.display = "block";
}

for(var i=0; i < spans.length; i++){
	spans[i].onclick = function() {
		baldbert_modal.style.display = "none";
		carl_modal.style.display = "none";
		frotgar_modal.style.display = "none";
		moneybags_modal.style.display = "none";
		ogbert_modal.style.display = "none";
		prospero_modal.style.display = "none";
		valentine_modal.style.display = "none";
		wigbald_modal.style.display = "none";
	}
}

window.onclick = function(event) {
	if (event.target == rules_modal) {
		baldbert_modal.style.display = "none";
	}

}