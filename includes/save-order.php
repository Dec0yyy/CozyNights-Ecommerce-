<?php
    require 'dbh.php';
    session_start();

    $paymentId = $_POST['paymentId'];
    $orderId = $_POST['orderId'];
    $fName = $_POST['fName'];
    $sName = $_POST['sName'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $ect = $_POST['ect'];
    $city = $_POST['city'];
    $country = $_POST['country'];
    $state = $_POST['state'];
    $zip = $_POST['zip'];
    $phone = $_POST['phone'];
    
    $day = date("d");
	$month = date("m");
	$year = date("Y");
	$date = "".$day."/".$month."/".$year."";	

    
    //Insert customer data into orders table
	$sql = "INSERT INTO orders (paymentId, orderId, fName, sName, email, shippingAddress, ect, shippingCity, shippingCountry, shippingState, zip, phone, price, date, items) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    $stmt = mysqli_stmt_init($conn);
	if(!mysqli_stmt_prepare($stmt, $sql)){
		echo 'oh no! sql error! SHIT!';
 		exit();	
	}else{
        $cart = json_encode($_SESSION['cart']);
		mysqli_stmt_bind_param($stmt, "ssssssssssssdss", $paymentId, $orderId, $fName, $sName, $email, $address, $ect, $city, $country, $state, $zip, $phone, $_SESSION['price'], $date, $cart);
        if(mysqli_stmt_execute($stmt)){
            $_SESSION['cart'] = array();
            $_SESSION['price'] = 0;
			echo 'success';
		}else{
			echo"mysql query failed.";
		}
	}
?>