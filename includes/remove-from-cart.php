<?php
session_start();

$index = $_POST['index'];

unset($_SESSION['cart'][$index]);
$_SESSION['cart'] = array_values($_SESSION['cart']);

if(count($_SESSION['cart']) < 1){
	echo '<p id="cart-is-empty-text">Your cart is empty. <a href="product">Add products to cart</p>';
}