<?php

    require 'dbh.php';

    $one = $_POST['one'];
    $two = $_POST['two'];

    $sql = "UPDATE featured SET category = '$one' WHERE id = 1";
    $stmt = mysqli_stmt_init($conn);
    if(!mysqli_stmt_prepare($stmt, $sql)){
        echo 'login.php?error=sqlerror';
        exit();	
    }else{
        mysqli_stmt_execute($stmt);
        echo "success";
        $sql = "UPDATE featured SET category = '$two' WHERE id = 2";
        $stmt = mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt, $sql)){
            echo 'login.php?error=sqlerror';
            exit();	
        }else{
            mysqli_stmt_execute($stmt);
            echo "success";
        }
    }


?>