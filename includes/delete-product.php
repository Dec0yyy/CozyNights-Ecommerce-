<?php

    require 'dbh.php';

    $title = $_POST['title'];

    $sql = "DELETE FROM products WHERE Title = '$title'";
    $stmt = mysqli_stmt_init($conn);
	if(!mysqli_stmt_prepare($stmt, $sql)){
		echo 'oh no! sql error! SHIT!';
 		exit();	
	}else{
        if(mysqli_stmt_execute($stmt)){
			echo 'success';
		}else{
			echo"mysql query failed.";
		}
	}