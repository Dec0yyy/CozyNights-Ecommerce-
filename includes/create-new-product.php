<?php

    require 'dbh.php';

    $title = $_POST['title'];
    $description = $_POST['description'];
    $price = floatval($_POST['price']);
    $originalPrice = floatval($_POST['originalPrice']);
    $category = $_POST["category"];
    $sizes = $_POST['sizes'];
    $image = $_POST['image'];

    
    $sql = "INSERT INTO products (Title, Description, Price, DownFrom, Category, Sizes, Image) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = mysqli_stmt_init($conn);
	if(!mysqli_stmt_prepare($stmt, $sql)){
		echo 'oh no! sql error! SHIT!';
 		exit();	
	}else{
		mysqli_stmt_bind_param($stmt, "ssddsss", $title, $description, $price, $originalPrice, $category, $sizes, $image);
        if(mysqli_stmt_execute($stmt)){
			echo 'success';
		}else{
			echo"mysql query failed.";
		}
	}