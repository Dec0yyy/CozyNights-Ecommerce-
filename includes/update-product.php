<?php

 require 'dbh.php';

    $title = $_POST['title'];
    $description = $_POST['description'];
    $category = $_POST['category'];
    $price = $_POST['price'];
    $downFrom = $_POST['originalPrice'];
    $sizes = $_POST['sizes'];
    $image = $_POST['image'];


 $sql = "UPDATE products SET Title = '$title', Description = '$description', Category = '$category', Price = $price, DownFrom = $downFrom, Sizes = '$sizes', Image = '$image' WHERE Title = '$title'";
 $stmt = mysqli_stmt_init($conn);
 if(!mysqli_stmt_prepare($stmt, $sql)){
     echo 'login.php?error=sqlerror';
     exit();	
 }else{
     mysqli_stmt_execute($stmt);
     $result = get_result($stmt);
     echo "success";
 }
 
?>
