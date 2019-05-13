<?php
$postData = json_decode(file_get_contents('php://input'), true);
print_r($postData);
$id = $postData['id'];
$description= $postData['description'];
$category = $postData['category'];
$value = $postData['value'];
$date = $postData['date'];

$updateQuery = "UPDATE `items`
SET `description` = '{$description}',
`category` = '{$category}',
`value` = '{$value}',
`date` = '{$date}'
WHERE `items`.`id`  = '{$id}'
"; 

mysqli_query($conn,$updateQuery);

$query = "SELECT DISTINCT * 
        FROM `items` 
        WHERE `id`= '$id' 
        AND `description` = '$description'
        AND `category` = '$category' 
        AND `value` = '$value'
        AND `date` = '$date'
        ";
$result = mysqli_query($conn,$query);

$output = [];

if(mysqli_num_rows($result) > 0) {
    $output['success'] = true;
    $output['message'] = 'Data was updated successfully';
} else {
    $output['success'] = false;
    $output['message'] = 'There was an error trying to update the data. Please try again';
}
?>