<?php

	require 'dbh.php';
	require 'CartItem.php';
	session_start();

	if(!isset($_SESSION['cart'])){
		$_SESSION['cart'] = array();
	}

	
	$product = $_POST['title'];
	$size = $_POST['size'];
	$qty = $_POST['qty'];
	$price = -1;


	$allProducts;

	$sql = "SELECT * FROM products";
	$stmt = mysqli_stmt_init($conn);
	if(!mysqli_stmt_prepare($stmt, $sql)){
		echo 'login?error=sqlerror';
		exit();	
	}else{
		if(mysqli_stmt_execute($stmt)){
			$allProducts = get_result($stmt);
		}else{
			echo"mysql query failed.";
		}
	}
	
	if($qty > 0){
		$new_item = new CartItem();
		$price = 0;
		foreach($allProducts as &$prod){
			if($prod["Title"] == $product){
				$price = $prod["Price"];
			}
		}
		$new_item->set_data($product, $size, $qty, $price);
		array_push($_SESSION['cart'], $new_item);
		// echo count($_SESSION['cart']);
	}

	//update session[price] variable
	$length = count($_SESSION['cart']);
	$i = 0;
	$total = 0;
	while($i < $length){
		$add = $_SESSION['cart'][$i]->price;
		$total += $add * $_SESSION['cart'][$i]->qty;
		$i++;
	}
	$_SESSION['price'] = $total;
	echo $_SESSION['price'];
?>