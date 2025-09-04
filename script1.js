

var rules_modal = document.getElementById("rules-modal");

var rules_button = document.getElementById("rules-button");

var span = document.getElementsByClassName("close")[0];

rules_button.onclick = function() {
	rules_modal.style.display = "block";
}

span.onclick = function() {
	rules_modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == rules_modal) {
		rules_modal.style.display = "none";
	}

}