<?php

require 'dbh.php';

$featuredCategories = array();

$sql = "SELECT * FROM featured";
$stmt = mysqli_stmt_init($conn);
if(!mysqli_stmt_prepare($stmt, $sql)){
    echo 'login?error=sqlerror';
     exit();	
}else{
    if(mysqli_stmt_execute($stmt)){
        $result = get_result($stmt);
        $featuredCategories[0] = $result[0];
        $featuredCategories[1] = $result[1];

        $sql = "SELECT * FROM products WHERE Category = '" . $featuredCategories[0]["category"] . "' or Category = '" . $featuredCategories[1]["category"] . "'";
        $stmt = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt, $sql)){
            echo 'login?error=sqlerror';
             exit();	
        }else{
            if(mysqli_stmt_execute($stmt)){
                $result = get_result($stmt);
                echo json_encode($result);
            }else{
                echo"mysql query failed.";
            }
        }
    }else{
        echo"mysql query failed.";
    }
}



?>