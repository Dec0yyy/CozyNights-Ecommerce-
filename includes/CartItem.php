<?php

class CartItem {
	public $item;
	public $size;
	public $qty;
	public $price;

	function set_data($item, $size, $qty, $price){

		$this->item = $item;
		$this->size = $size;
		$this->qty = $qty;
		$this->price = $price;
	}			

}