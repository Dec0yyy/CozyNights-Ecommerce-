let item = { size: null };

$(window).on("load", function () {
	$.ajax({
		method: "POST",
		url: "includes/GetProduct.php",
		data: { item: window.location.href.split("=")[1] },
		success: function (data) {
			const jsonData = JSON.parse(data)[0];
			$("#title").html(jsonData.Title);
			$("#category").html(jsonData.Category);
			$("#price").html(
				`<span class="cur-sym">$</span><span class="price-render">${jsonData.Price}</span>`
			);
			$("#downFromPrice").html(
				`<span class="cur-sym">$</span><span class="price-render">${jsonData.DownFrom}</span>`
			);
			$("#more-info-area").html(jsonData.Details);
			$("#description").html(jsonData.Description);
			let sizes = JSON.parse(jsonData.Sizes);
			if (sizes.length > 1) {
				let sizesOutput = ``;
				let counter1 = sizes.length;
				sizes.forEach((el) => {
					sizesOutput += `<div class="size-btn" style="background-image: url('${el}')" num="${counter1}" name="${
						JSON.parse(jsonData.sizesNames)[sizes.length - counter1]
					}"></div>`;
					counter1--;
				});
				$("#selections").html(`
        <p class="select-heading">Select:</p>
        <div id="size-select">${sizesOutput}</div>`);
			} else {
				item.size = "null";
			}

			let productImages = JSON.parse(jsonData.Image);

			let productImagesOutput = "";
			let productNavImagesOutput = "";
			let counter = 0;
			productImages.forEach((i) => {
				productImagesOutput += `<img class="main-product-image" src="${i}" />`;
				productNavImagesOutput += `<img class="prod-nav-img" src="${i}" num="${counter}"/>`;
				counter++;
			});
			$("#slider").html(productImagesOutput);
			$(".prod-nav-cards").html(productNavImagesOutput);
			$("#slider").css("width", productImages.length * 100 + "%");
			$(".main-product-image").css("width", 100 / productImages.length + "%");

			item.title = jsonData.Title;
			updateRenderedCurrency();
		},
	});
});

$(".prod-nav-cards").on("click", ".prod-nav-img", function () {
	let num = $(this).attr("num");
	$("#slider").css("margin-left", `-${num * 100}%`);
});

$("#atc-btn").on("click", function () {
	if ($(this).html() == "Added") return;
	if (item.size == null) {
		document.getElementById("errMsg").innerHTML =
			"Please select a variety above.";
		return;
	}
	document.getElementById("errMsg").innerHTML = "";

	$(this).html("Loading...");
	item.qty = $("#qty-select").val();

	$.ajax({
		method: "POST",
		url: "includes/add-to-cart.php",
		data: { qty: item.qty, size: item.size, title: item.title },
		success: function (data) {
			if (localStorage.getItem("cart")) {
				let currentCart = JSON.parse(localStorage.getItem("cart"));
				currentCart.push(item);
				localStorage.setItem("cart", JSON.stringify(currentCart));
			} else {
				localStorage.setItem("cart", JSON.stringify([item]));
			}

			$("#atc-btn").html("Added");
			$("#atc-btn").css("cursor", "default");
			$("#view-cart-btn").css("display", "flex");

			getCartQty();
		},
	});
});

$("#bn-btn").on("click", function () {
	if ($(this).html() == "Added") return;
	if (item.size == null) return;

	$(this).html("Loading...");
	item.qty = $("#qty-select").val();

	$.ajax({
		method: "POST",
		url: "includes/add-to-cart.php",
		data: { qty: item.qty, size: item.size, title: item.title },
		success: function (data) {
			if (localStorage.getItem("cart")) {
				let currentCart = JSON.parse(localStorage.getItem("cart"));
				currentCart.push(item);
				localStorage.setItem("cart", JSON.stringify(currentCart));
			} else {
				localStorage.setItem("cart", JSON.stringify([item]));
			}
			window.location.href = "http:/Kitsource.net/check-out.php";
		},
	});
});

$("#selections").on("click", ".size-btn", function () {
	$(".size-btn").css("border", "1px solid #333333");
	$(this).css("border", "3px solid #C7B8F5");

	let num = $(this).attr("num");
	$("#slider").css(
		"margin-left",
		`-${($(".prod-nav-img").length - num) * 100}%`
	);

	item.size = $(this).attr("name");
	console.log(item.size);
});

function getCartQty() {
	let obj = JSON.parse(localStorage.getItem("cart")).length;
	$("#cart-number").html(obj);
}
