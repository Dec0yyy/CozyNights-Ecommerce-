
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->

<!-- Pages: PSG, SUMMER SETS, DRI FITS, SIZEGUIDE, UAE DIRHAMS -->

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"
/>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Cozy Nights Shop</title>

        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="icon" type="image/x-icon" href="favicon.ico">

        <link rel="stylesheet" href="styles/all.css">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet">    
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <div id="small-banner">
            <div>
                <p>Free Worldwide Shipping 🌎</p>
            </div>
        </div>
        <?php
            include 'header.php'
        ?>
        <div id="banner">
        </div>

        <div id="wrapper">
            <div id="landing-area">
                <div id="landing-left">
                    <img src="./assets/landing-background.png" id="landing-background" />
                    <p id="landing-title">Discover Comfort, Shop Cozy</p>
                    <p id="landing-sub">Discover Comfort, Shop Cozy: Illuminate Your Space with Serenity through Our Elegant Lamps, and Cuddle Up to Bliss with Our Plush Teddies – All at Cozy Nights. Embrace the Cozy Vibe, One Product at a Time.</p>
                    <div id="landing-btn">Shop Now</div>
                </div>                
                <div id="landing-right">
                    <img src="./assets/landing.jpg" />
                </div>                
            </div>
            <div id="product-holder"></div>
            <?php
                include 'footer.php';
            ?>
        </div>
        
        <script src="scripts/currency.js"></script>
        <script src="scripts/home.js"></script>

    <style>
        .shape {
            width: 420px;
            height: 420px;
            position: absolute;
            top: -10px;
            left: -10px;
        }

        .content {
            position: relative;
            z-index: 1;
            width: 400px;
            height: 400px;
        }

        .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    </style>

    <script>
    // Example using anime.js
    const path = document.querySelector('#blob');
    const blobAnimation = anime({
      targets: path,
      d: [
        { value: "M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z" },
        { value: "M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z" },
        { value: "M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z" }
      ],
      duration: 5000, // Reduced the duration to 3000ms
      easing: 'linear',
      loop: true,
      delay : 0,
    });
  </script>
    </body>
</html>