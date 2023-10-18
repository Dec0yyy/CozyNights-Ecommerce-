let products = [];

$(window).on("load", function () {
	console.log("products");
	$.ajax({
		method: "POST",
		url: "includes/GetFeaturedProducts.php",
		success: (data) => {
			products = JSON.parse(data);
			displayProducts();
			updateRenderedCurrency();
		},
	});
});

function displayProducts() {
	let sortedProducts = {};

	for (let idx in products) {
		if (Object.keys(sortedProducts).includes(products[idx].Category)) {
			sortedProducts[products[idx].Category].push(products[idx]);
		} else {
			sortedProducts[products[idx].Category] = [products[idx]];
		}
	}

	let outputHTML = ``;
	for (let element of Object.keys(sortedProducts)) {
		outputHTML += `<div class="product-holder"><p style="width: 92%; font-size: 1.2em; margin-bottom: 20px">${element}</p>`;
		for (let item of sortedProducts[element]) {
			outputHTML += `
            <div class="product-card">
              <a href="product.php?item=${encodeURIComponent(item.Title)}">
                <div class="sale-icon"><div>ON SALE</div></div>
                <div class="product-image-holder">
                  <img src="${
										JSON.parse(item.Image)[0]
									}" class="product-image" />
                </div>
                <p class="product-title">${item.Title}</p>
                <div class="product-button-holder">
                  <p style="font-weight: 700; color: #333333"><span class="cur-sym">$</span><span class="price-render">${
										item.Price
									}</span></p>
                </div>
              </a>
            </div>
          `;
		}
		outputHTML += `</div>`;
	}

	$("#product-holder").html(outputHTML);
}

$("#landing-btn").on("click", () => {
	window.location.href = "http://localhost/CosyNights/products.php";
});
