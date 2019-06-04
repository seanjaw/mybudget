<?php
define('fromData',true);

// require the mysql_connect.php file.  Make sure your properly configured it!
require('./mysql_connect.php');
// print_r('this is test');

$deleteQuery = "TRUNCATE TABLE `items`";

mysqli_query($conn,$deleteQuery);

// $postData = json_decode(file_get_contents('php://input'), true);

// print_r($postData);


$description= 'Default Description';
$category = 'Default Category';
$value = 10;
$date = '05/17/2019';

$query= "INSERT INTO `items` SET
    `description` = '$description',
    `category` = '$category',
    `value` = '$value',
    `date` = '$date'
";

$output =[
    'success' => false ,
    'error' => [],
    'data' => [] 
];

$result = mysqli_query($conn,$query);

$addQuery = "SELECT DISTINCT * 
        FROM `items` 
        WHERE `description` = '$description'
        AND `category` = '$category' 
        AND `value` = '$value'
        AND `date` = '$date'
        ";
$addResult = mysqli_query($conn,$addQuery);


if(!empty($result)){
    if(mysqli_affected_rows($conn)){
        $output['success']=true;
        // $output['id'] = mysqli_insert_id($conn);
        // echo $output['id'];
    } else {
        $output['errors'][] = 'invalid query';
    }
    while($row = mysqli_fetch_assoc($addResult)){
        $output['data'][] = $row;
    }
$json_output = json_encode($output);
}
$outputJSON = json_encode($output);
echo $outputJSON;



// //check if you have all the data you need from the client-side call.  
// //if not, add an appropriate error to errors

// //write a query that deletes te student by the given student ID  
// $result = mysqli_query($conn,$deleteQuery);
// $output =[];

// if(mysqli_num_rows($result) > 0) {
//     $output['success'] = false;
//     $output['message'] = 'There was an error trying to delete the data. Please try again';
// } else {
//     $output['success'] = true;
//     $output['message'] = 'Data was deleted successfully';
// }




?>