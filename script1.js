

var rules_modal = document.getElementById("rules-modal");
var hint_modal = document.getElementById("hint-modal");

var rules_button = document.getElementById("rules-button");
var hint_button = document.getElementById("hint-button");

var spans = document.getElementsByClassName("close");

rules_button.onclick = function() {
	rules_modal.style.display = "block";
}

hint_button.onclick = function() {
	hint_modal.style.display = "block";
}

for(var i=0; i < spans.length; i++){
	spans[i].onclick = function() {
		rules_modal.style.display = "none";
		hint_modal.style.display = "none";
	}
}

window.onclick = function(event) {
	if (event.target == rules_modal) {
		rules_modal.style.display = "none";
	}

}
