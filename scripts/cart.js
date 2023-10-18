$(window).on("load", function () {
	$.ajax({
		method: "POST",
		url: "./includes/GetAllProducts.php",
		success: function (data) {
			let jsonData = JSON.parse(data);
			let cart = JSON.parse(localStorage.getItem("cart"));

			$("#item-count").html(`(${cart.length} items)`);

			let totalPrice = 0;
			for (let i in cart) {
				let unitPrice = null;
				let unitImage = null;
				for (let j in jsonData) {
					if (cart[i].title === jsonData[j].Title) {
						unitPrice = jsonData[j].Price;
						// console.log(JSON.parse(jsonData[j].Image))
						let index = JSON.parse(jsonData[j].sizesNames).indexOf(
							cart[i].size
						);
						console.log(index);
						if (index < 0) {
							unitImage = JSON.parse(jsonData[j].Sizes)[0];
						} else {
							unitImage = JSON.parse(jsonData[j].Sizes)[index];
						}
					}
				}

				totalPrice += unitPrice * cart[i].qty;

				let output = `
        <tr index="${i}">
            <td>
                <div class="cart-card">
                    <img src="${unitImage}" />
                    <div>
                        <p style="font-weight: 700; margin-bottom: 5px">${
													cart[i].title
												}</p>
                        <p>Size: ${cart[i].size}</p>
                        <p>Qty: ${cart[i].qty}</p>
                    </div>
                </div>
            </td>
            <td style="text-align: center; vertical-align: middle;"><span class="cur-sym">$</span><span class="price-render">${unitPrice}</span></td>
            <td style="text-align: center; vertical-align: middle;"><span class="cur-sym">$</span><span class="price-render">${
							unitPrice * cart[i].qty
						}</span></td>
            <td style="text-align: center; vertical-align: middle;"><img src="assets/remove.png" class="remove-btn"/></td>
        </tr>
        `;
				document.getElementById("cart-table").innerHTML += output;
				$("#total-price").html(
					`<span class="cur-sym">$</span><span class="price-render">${totalPrice}</span>`
				);
			}
			updateRenderedCurrency();
		},
	});
});

$("#cart-table").on("click", ".remove-btn", function () {
	let idxToRemove = $(this).parent().parent().attr("index");
	let currentCart = JSON.parse(localStorage.getItem("cart"));
	currentCart.splice(idxToRemove, 1);
	localStorage.setItem("cart", JSON.stringify(currentCart));
	location.reload();
});

$("#clear-cart-btn").on("click", function () {
	localStorage.setItem("cart", "");
	location.reload();
});
