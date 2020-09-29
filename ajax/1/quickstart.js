// Stores the reference to the XMLHttpRequest object
var xmlHttp = createXmlHttpRequestObject();

// Retrieves the XMLHttpRequest object
function createXmlHttpRequestObject(){
	// Stores the reference to the XMLHttpRequest object
	var xmlHttp;
	//if running Internet Explorer 6 or older
	if(window.ActiveXObject){
		try{
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			xmlHttp = false;
		}
	}else {	// If running Mozilla or other browsers
		try {
			xmlHttp = new XMLHttpRequest();
		} catch (e){
			xmlHttp = false;
		}
	}
	// Return the created object or display an error message
	if(!xmlHttp){
		alert("Error creating the XMLHttpRequest object.");
	}else{
		return xmlHttp;
	}
}

// Make asynchronous HTTP request using the XMLHttpRequest object
function process(){
	// Proceed only if the xmlHttp object isn't busy
	if(xmlHttp.readyState == 4 || xmlHttp.readyState == 0){
		// Retrieve the nema typed by the user on the form
		name = encodeURIComponent(document.getElementById("myName").value);
		// Execute the quickstart.php page from the server
		xmlHttp.open("GET", "quickstart.php?name=" + name, true);
		// Define the method to handle server responses
		xmlHttp.onreadystatechange = handleServerResponse;
		// Make the server request
		xmlHttp.send(null);
	}else{
		// If the connection is busy, try again after one second
		setTimeout('process()', 1000);
	}
}

// Callback function executed when a message is received from the server
function handleServerResponse(){
	// Move forward only if the transaction has completed
	if(xmlHttp.readyState == 4){
		// Status of 200 indicates the trnsaction completed succesfully
		if(xmlHttp.status == 200){
			// Extract the XML retrieved from the server
			xmlResponse = xmlHttp.responseXML;
			// Obtain the document element (the root element) of the XML structure
			xmlDocumentElement = xmlResponse.documentElement;
			// Get the text message, which is in the first child of the document element
			helloMessage = xmlDocumentElement.firstChild.data;
			// Display the data received from the server
			document.getElementById("divMessage").innerHTML = '<i>'+helloMessage+'</i>';
			// Restart sequence
			setTimeout('process()', 1000);
		}else{	// A HTTP status different than 200 signals an error
			alert("There was a problem accessing the server: " + xmlHttp.statusText);
		}
	}
}