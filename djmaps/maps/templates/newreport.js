function submit(filename) {
	var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://localhost:8000/crimePred/append/" + filename, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
