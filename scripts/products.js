let products = [];

$(window).on("load", function () {
	$.ajax({
		method: "POST",
		url: "includes/GetAllProducts.php",
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
	for (let idx in sortedProducts) {
		outputHTML += `<div class="product-holder"><p style="width: 92%; font-size: 1.2em; margin-bottom: 20px; margin-top: 30px">${idx}</p>`;
		for (let j in sortedProducts[idx]) {
			outputHTML += `
      <div class="product-card">
        <a href="product.php?item=${sortedProducts[idx][j].Title}">
          <div class="sale-icon"><div>ON SALE</div></div>
          <div class="product-image-holder">
            <img src="${
							JSON.parse(sortedProducts[idx][j].Image)[0]
						}" class="product-image" />
          </div>
          <p class="product-title">${sortedProducts[idx][j].Title}</p>
          <div class="product-button-holder">
            <p style="font-weight: 700; color: #333333"><span class="cur-sym">$</span><span class="price-render">${
							sortedProducts[idx][j].Price
						}</span></p>
          </div>
        </a>

      </div>
      `;
		}
		outputHTML += `</div>`;
	}

	$("#allProducts").html(outputHTML);
}
