currentVersion = 32; /* Must be updated often */
function versionPrompt() {
	var yourVers = localStorage.getItem("vers");
	if ( yourVers == null || yourVers == "null" ) {
		var vers = prompt("Please enter your BatchX version that you are using. Use only numbers. Enter in '0' if you do not have BatchX.");
		localStorage.setItem("vers", vers);
		} else {
		if ( parseInt(yourVers, 10) < currentVersion ) {
			document.getElementById("warning").innerHTML = "You are currently using an outdated version of BatchX (" + yourVers + "), and the most recent" +
			" is " + currentVersion + ". Please <a href='batchx/update.html' onclick='updated();'>update</a>.";
			}
		}
	}

function updated() {
	localStorage.setItem("vers", currentVersion);
}