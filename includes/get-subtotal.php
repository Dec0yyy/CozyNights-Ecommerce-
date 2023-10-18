<?php
	require 'CartItem.php';
 	session_start();
	$length = count($_SESSION['cart']);
	$i = 0;
	$total = 0;
	while($i < $length){
		$add = $_SESSION['cart'][$i]->price;
		$total += $add * $_SESSION['cart'][$i]->qty;
		$i++;
	}
	$_SESSION['price'] = $total;
	echo $total;
?>