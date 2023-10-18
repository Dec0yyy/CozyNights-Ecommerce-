
<script>
    const rates = {
        AUD: 1.496973,
        EUR: 0.916901,
        GBP: 0.785601,
        USD: 1
    }
    // let rates;
    // $.ajax({
    //     url: "https://api.freecurrencyapi.com/v1/latest?apikey=5RXZQPZR4PxeBL2RkEVqKodmjgN88i2RGbkT3aeA",
    //     success: function(data){
    //         console.log("Data = ");
    //         console.log(data);
    //         rates = data.data;
    //         console.log(rates)
    //     }
    // })

    

</script>

<header>
    <div id="header-inner">
        <nav id="main-nav" style="width: 33.33%; display: flex; justify-content: flex-start; align-items: center">
            <a href="index.php">Home</a>
            <a href="products.php">Shop</a>
        </nav>
        <img src="./assets/Logo.png" style="height: 80%;"/>
        <div style="width: 33.33%; display: flex; justify-content: flex-end; align-items: center">
            <div id="cart-holder">
                <a href="cart.php">
                    <img src="assets/shopping-bag.png"/>
                    <p id="cart-number">0</p>
                </a>
            </div>
        </div>
    </div>
    <script>
        getCartQty();
        function getCartQty(){
            let obj = JSON.parse(localStorage.getItem("cart")).length;
            $("#cart-number").html(obj);
        }
    </script>
</header>
