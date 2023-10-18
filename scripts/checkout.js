let slide = 0;

$(".back-btn").on("click", function () {
	slide--;
	adjustSlide();
});
$(".next-btn").on("click", function () {
	switch (slide) {
		case 0:
			if ($("#fName").val().length < 1) {
				$("#errMsg1").html("Please enter your first name.");
				return;
			} else if ($("#sName").val().length < 1) {
				$("#errMsg1").html("Please enter your last name.");
				return;
			} else if ($("#email").val().length < 1) {
				$("#errMsg1").html("Please enter your email address.");
				return;
			} else {
				$("#errMsg1").html("");
			}
			break;
		case 1:
			if ($("#address").val().length < 1) {
				$("#errMsg2").html("Please enter your shipping address.");
				return;
			} else if ($("#city").val().length < 1) {
				$("#errMsg2").html("Please enter your city name.");
				return;
			} else if ($("#country").val().length < 1) {
				$("#errMsg2").html("Please enter your shipping country.");
				return;
			} else if ($("#state").val().length < 1) {
				$("#errMsg2").html("Please enter your shipping state.");
				return;
			} else if ($("#zip").val().length < 1) {
				$("#errMsg2").html("Please enter your zip code.");
				return;
			} else if ($("#phone").val().length < 1) {
				$("#errMsg2").html("Please enter your phone number.");
				return;
			} else {
				$("#errMsg2").html("");
			}
	}
	slide++;
	adjustSlide();
});

function adjustSlide() {
	$("#slider").css("margin-left", `-${slide * 100}%`);

	switch (slide) {
		case 0:
			$("#span1").css("color", "#333333");
			$("#span2").css("color", "gray");
			$("#span3").css("color", "gray");
			break;
		case 1:
			$("#span1").css("color", "gray");
			$("#span2").css("color", "#333333");
			$("#span3").css("color", "gray");
			break;
		case 2:
			$("#span1").css("color", "gray");
			$("#span2").css("color", "gray");
			$("#span3").css("color", "#333333");
			break;
	}
}

// STRPIE
var stripe = Stripe("STRIPE_PUBLIC_KEY");
var elements = stripe.elements();
var cardElement = elements.create("card");
cardElement.mount("#card-element");

$(".pay-btn").on("click", function () {
	let clientSecret = $("#cs").attr("cs");
	console.log(clientSecret);
	stripe
		.confirmCardPayment(clientSecret, {
			payment_method: {
				card: cardElement, // The card element created using Stripe Elements
			},
		})
		.then(function (result) {
			// Handle the result
			if (result.error) {
				// Show error to the customer
				$("#errMsg3").html(result.error.message);
			} else {
				const orderID = GenerateOrderId();
				const email = $("#email").val();
				const fName = $("#fName").val();
				const sName = $("#sName").val();
				const address = $("#address").val();
				const ect = $("#ect").val();
				const city = $("#city").val();
				const country = $("#country").val();
				const state = $("#state").val();
				const zip = $("#zip").val();
				const phone = $("#phone").val();

				console.log(
					orderID,
					email,
					fName,
					sName,
					address,
					ect,
					city,
					country,
					state,
					zip,
					phone
				);

				$.ajax({
					method: "POST",
					url: "includes/save-order.php",
					data: {
						orderId: orderID,
						paymentId: result.paymentIntent.id,
						fName: fName,
						sName: sName,
						email: email,
						address: address,
						ect: ect,
						city: city,
						country: country,
						state: state,
						zip: zip,
						phone: phone,
					},
					success: function (data) {
						console.log(data);
						localStorage.setItem("cart", "[]");
						if (data != "success") return data;
						$("#payment-form-area").css("display", "none");
						$("#success-area").css("display", "block");
						$("#success-order-id").html(orderID);
						$("#success-payment-id").html(result.paymentIntent.id);
						$("#success-email").html(email);
						$("#success-paid").html($("#total-price").html());
					},
				});
			}
		});
});

const GenerateOrderId = () => {
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	let output = "";
	for (let i = 0; i < 10; i++) {
		output += numbers[Math.floor(Math.random() * numbers.length)].toString();
	}
	return output;
};

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
						let index = JSON.parse(jsonData[j].sizesNames).indexOf(
							cart[i].size
						);
						if (index < 0) {
							unitImage = JSON.parse(jsonData[j].Sizes)[0];
						} else {
							unitImage = JSON.parse(jsonData[j].Sizes)[index];
						}
					}
				}

				totalPrice += unitPrice * cart[i].qty;

				let output = `
        <tr>
          <td style="display: flex; align-items: center">
              <img style="width: 80px; box-sizing: border-box; padding: 5px" src="${unitImage}" />
              <p style="font-size: 13px">${cart[i].title}</p>
          </td>
          <td style="text-align: center; vertical-align: middle">${cart[i].qty}</td>
          <td style="text-align: center; vertical-align: middle"><span class="cur-sym">$</span><span class="price-render">${unitPrice}</span></p>
        </tr>
          `;
				document.getElementById("checkout-table").innerHTML += output;
				$("#total-price").html(
					`<span class="cur-sym">$</span><span class="price-render">${totalPrice}</span>`
				);
				updateRenderedCurrency();
			}
		},
	});
});

document.addEventListener("keydown", function (e) {
	if (e.key === "Tab") {
		e.preventDefault();
	}
});
