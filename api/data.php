<?php
define('fromData',true);

if(empty($_GET['action'])){
	exit('no action specified');
}

// require the mysql_connect.php file.  Make sure your properly configured it!
require('./mysql_connect.php');

$output = [
	'success'=> false, //we assume we will fail
	'errors'=>[]
];

switch($_GET['action']){
	case 'readAll':
		require('./phpApi/read.php');
		break;
	case 'insert':
		require('./phpApi/create.php');
		break;
	case 'delete':
		require('./phpApi/delete.php');
		break;
	case 'update':
		require('./dataApi/update.php');
		break;
}

//convert the $output variable to json, store the result in $outputJSON

$outputJSON = json_encode($output);

echo $outputJSON;
//print $outputJSON

//end

?>