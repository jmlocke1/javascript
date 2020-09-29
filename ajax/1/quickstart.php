<?php
// We'll generate XML output
header('Content-Type: text/xml');
// Generate XML header
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
// Create the <response> element
echo '<response>';
// Retrieve the user name
$name = $_GET['name'];
// Generate output depending on the user name received from client
$userNames = array('YODA', 'AUDRA', 'BOGDAN', 'CRISTIAN', 'JOSEMI');
if($index = in_array(strtoupper($name), $userNames)){
	echo $index.'- Hello, master '. htmlentities($name).'!';
}else if(trim($name) == ''){
	echo 'Stranger, please tell me your name!';
}else{
	echo htmlentities($name). ', I don\'t know you!';
}
// close the <response> element
echo '</response>';