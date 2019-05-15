<?php

$postData = json_decode(file_get_contents('php://input'), true);

print_r($postData);



$description= $postData['description'];
$category = $postData['category'];
$value = $postData['value'];
$date = $postData['date'];


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


//check if you have all the data you need from the client-side call.  
//if not, add an appropriate error to errors

//write a query that inserts the data into the database.  remember that ID doesn't need to be set as it is auto incrementing
$result = mysqli_query($conn,$query);

$addQuery = "SELECT DISTINCT * 
        FROM `items` 
        WHERE `description` = '$description'
        AND `category` = '$category' 
        AND `value` = '$value'
        AND `date` = '$date'
        ";
$addResult = mysqli_query($conn,$addQuery);

// echo mysqli_affected_rows($conn);

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

// print($json_output);
//send the query to the database, store the result of the query into $result


//check if $result is empty.  
	//if it is, add 'database error' to errors
//else: 
	//check if the number of affected rows is 1
		//if it did, change output success to true
		//get the insert ID of the row that was added
		//add 'insertID' to $outut and set the value to the row's insert ID
	//if not, add to the errors: 'insert error'

?>