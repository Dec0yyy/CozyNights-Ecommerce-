<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Cozy Nights Shop</title>

        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="icon" type="image/x-icon" href="favicon.ico">

        <link rel="stylesheet" href="styles/all.css">
        <link rel="stylesheet" href="styles/product.css">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet">    
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"
        />
    </head>
    <body>
        <div id="small-banner">
            <div>
                <p>Free Worldwide Shipping 🌎</p>
            </div>
        </div>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <?php
            include 'header.php';
        ?>
        <div id="wrapper">
            <div id="main">
                <div id="main-image">
                    <div class="product-img-holder">
                        <div id="slider">
                            
                        </div>
                    </div>
                    <div class="prod-nav-cards">
                    </div>
                </div>
                <div id="main-text-area">
                    <p id="title">PSG Maroon Quarter Zip Tracksuit</p>
                    <p id="category">Tracksuit</p>
                    <p style="margin-top: 10px; border-bottom: 1px solid #333333; padding-bottom: 20px; margin-bottom: 20px"><span id="price"><span class="cur-sym">$</span><span class="price-render">49.99</span></span><span id="downFromPrice"><span class="cur-sym">$</span><span class="price-render">89.99</span></span></p>
                    <div id="selections">

                    </div>
                    <div id="qty-area">
                        <p>Quantity: </p>
                        <select id="qty-select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                        </select>
                    </div>
                    <p id="errMsg"></p>
                    <button id="atc-btn">ADD TO CART</button>
                    <button id="bn-btn">BUY NOW</button>
                    <a id="view-cart-btn" href="cart.php">VIEW CART</a>
                    <div id="extra-info-holder">
                        <div>
                            <img src="assets/truck.webp" alt="truck" class="small-info-img">
                            <span>Fast shipping on all orders</span>
                        </div>
                        <div>
                            <img src="assets/cancel.webp" alt="truck" class="small-info-img">
                            <span>Hassle-free ordering</span>
                        </div>
                        <div>
                            <img src="assets/like.webp" alt="truck" class="small-info-img">
                            <span>Over 10,000 fans</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="more-info-area">

            </div>
            <?php
                require 'footer.php';
            ?>
        </div>
        
        <script src="scripts/currency.js" defer></script>
        <script src="scripts/product.js" defer></script>
    </body>
</html>
