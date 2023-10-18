let currency;
let prevCurrency;
let currencyOpen = false;

$(window).on("load", function () {
	if (!localStorage.getItem("currency")) {
		localStorage.setItem("currency", "usd");
		currency = "usd";
		prevCurrency = "usd";
	} else {
		currency = localStorage.getItem("currency");
		prevCurrency = "usd";
	}
});

function updateRenderedCurrency() {
	$("#gbp").click();
	switch (currency) {
		case "gbp":
			$("#gbp").click();
			break;
		case "eru":
			$("#eru").click();
			break;
		case "usd":
			$("#usd").click();
			break;
		case "aud":
			$("#aud").click();
			break;
	}
}

$("#gbp").on("click", function () {
	if (currencyOpen) {
		localStorage.setItem("currency", "gbp");
		$("#currency-select").css("height", "30px");
		$("#currency-slider").css("margin-top", "0px");
		currency = "gbp";
		currencyOpen = false;
		renderNewCurrency();
		prevCurrency = currency;
	} else {
		$("#currency-slider").css("margin-top", "0px");
		$("#currency-select").css("height", "auto");
		currencyOpen = true;
	}
});
$("#eur").on("click", function () {
	if (currencyOpen) {
		localStorage.setItem("currency", "eur");
		$("#currency-select").css("height", "30px");
		$("#currency-slider").css("margin-top", "-30px");
		currency = "eur";
		currencyOpen = false;
		renderNewCurrency();
		prevCurrency = currency;
	} else {
		$("#currency-slider").css("margin-top", "0px");
		$("#currency-select").css("height", "auto");
		currencyOpen = true;
	}
});

$("#usd").on("click", function () {
	if (currencyOpen) {
		localStorage.setItem("currency", "usd");
		$("#currency-select").css("height", "30px");
		$("#currency-slider").css("margin-top", "-60px");
		currency = "usd";
		currencyOpen = false;
		renderNewCurrency();
		prevCurrency = currency;
	} else {
		$("#currency-slider").css("margin-top", "0px");
		$("#currency-select").css("height", "auto");
		currencyOpen = true;
	}
});

$("#aud").on("click", function () {
	if (currencyOpen) {
		localStorage.setItem("currency", "aud");
		$("#currency-select").css("height", "30px");
		$("#currency-slider").css("margin-top", "-90px");
		currency = "aud";
		currencyOpen = false;
		renderNewCurrency();
		prevCurrency = currency;
	} else {
		$("#currency-slider").css("margin-top", "0px");
		$("#currency-select").css("height", "auto");
		currencyOpen = true;
	}
});

function renderNewCurrency() {
	switch (currency) {
		case "gbp":
			$(".cur-sym").each((el) => {
				$(".cur-sym")[el].innerHTML = "$";
			});
			$(".price-render").each((el) => {
				let currentPrice = $(".price-render")[el].innerHTML;
				switch (prevCurrency) {
					case "gbp":
						break;
					case "eur":
						$(".price-render")[el].innerHTML = convertCurrency(
							parseFloat(currentPrice),
							"EUR",
							"GBP"
						).toFixed(2);
						break;
					case "usd":
						$(".price-render")[el].innerHTML = convertCurrency(
							parseFloat(currentPrice),
							"USD",
							"GBP"
						).toFixed(2);
						break;
					case "aud":
						$(".price-render")[el].innerHTML = convertCurrency(
							parseFloat(currentPrice),
							"AUD",
							"GBP"
						).toFixed(2);
						break;
				}
			});
			break;

		case "eur":
			$(".cur-sym").each((el) => {
				$(".cur-sym")[el].innerHTML = "€";
			});
			$(".price-render").each((el) => {
				let currentPrice = $(".price-render")[el].innerHTML;
				switch (prevCurrency) {
					case "gbp":
						$(".price-render")[el].innerHTML = convertCurrency(
							parseFloat(currentPrice),
							"GBP",
							"EUR"
						).toFixed(2);
						break;
					case "eur":
						break;
					case "usd":
						$(".price-render")[el].innerHTML = convertCurrency(
							parseFloat(currentPrice),
							"USD",
							"EUR"
						).toFixed(2);
						break;
					case "aud":
						$(".price-render")[el].innerHTML = convertCurrency(
							parseFloat(currentPrice),
							"AUD",
							"EUR"
						).toFixed(2);
						break;
				}
			});
			break;

		case "usd":
			$(".cur-sym").each((el) => {
				$(".cur-sym")[el].innerHTML = "$";
			});
			$(".price-render").each((el) => {
				let currentPrice = $(".price-render")[el].innerHTML;
				switch (prevCurrency) {
					case "gbp":
						$(".price-render")[el].innerHTML = convertCurrency(
							parseFloat(currentPrice),
							"GBP",
							"USD"
						).toFixed(2);
						break;
					case "eur":
						$(".price-render")[el].innerHTML = convertCurrency(
							parseFloat(currentPrice),
							"EUR",
							"USD"
						).toFixed(2);
						break;
					case "usd":
						break;
					case "aud":
						$(".price-render")[el].innerHTML = convertCurrency(
							parseFloat(currentPrice),
							"AUD",
							"USD"
						).toFixed(2);
						break;
				}
			});
			break;

		case "aud":
			$(".cur-sym").each((el) => {
				$(".cur-sym")[el].innerHTML = "$";
			});
			$(".price-render").each((el) => {
				let currentPrice = $(".price-render")[el].innerHTML;
				switch (prevCurrency) {
					case "gbp":
						$(".price-render")[el].innerHTML = convertCurrency(
							parseFloat(currentPrice),
							"GBP",
							"AUD"
						).toFixed(2);
						break;
					case "eur":
						$(".price-render")[el].innerHTML = convertCurrency(
							parseFloat(currentPrice),
							"EUR",
							"AUD"
						).toFixed(2);
						break;
					case "usd":
						$(".price-render")[el].innerHTML = convertCurrency(
							parseFloat(currentPrice),
							"USD",
							"AUD"
						).toFixed(2);
						break;
					case "aud":
						break;
				}
			});
			break;
	}
}

function convertCurrency(value, previousCurrency, newCurrency) {
	// Check if the currencies are valid
	if (!(previousCurrency in rates) || !(newCurrency in rates)) {
		throw new Error("Invalid currency.");
	}

	// Convert the value to USD as the intermediary currency
	const usdValue = value / rates[previousCurrency];

	// Convert the value from USD to the new currency
	const convertedValue = usdValue * rates[newCurrency];

	// Round the converted value to 2 decimal places
	const roundedValue = Math.round(convertedValue * 100) / 100;
	console.log(
		`converting ${value} from ${previousCurrency} to ${newCurrency} = ${roundedValue}`
	);

	return roundedValue;
}
