<?php
$postData = json_decode(file_get_contents('php://input'), true);
print_r($postData);

$id = $postData['id'];

$deleteQuery = "DELETE FROM `items`
WHERE `items`.`id`='{$id}'
";


mysqli_query($conn,$deleteQuery);


$query = "SELECT DISTINCT *
FROM items
WHERE id ='$id'
";



//check if you have all the data you need from the client-side call.  
//if not, add an appropriate error to errors

//write a query that deletes the student by the given student ID  
$result = mysqli_query($conn,$query);
$output =[];

if(mysqli_num_rows($result) > 0) {
    $output['success'] = false;
    $output['message'] = 'There was an error trying to delete the data. Please try again';
} else {
    $output['success'] = true;
    $output['message'] = 'Data was deleted successfully';
}


?>