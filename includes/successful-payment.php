<?php

    require 'dbh.php';

    $paymentId = $_POST['paymentId'];
    $orderId = $_POST['orderId'];

	$sql = "UPDATE orders SET paymentId = '" . $paymentId . " WHERE orderId = " . $orderId . ";";
    $stmt = mysqli_stmt_init($conn);
	if(!mysqli_stmt_prepare($stmt, $sql)){
		echo 'oh no! sql error! SHIT!';
 		exit();	
	}else{
        if(mysqli_stmt_execute($stmt)){
			echo 'success1';
		}else{
			echo"mysql query failed.";
		}
	}
