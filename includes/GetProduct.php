<?php
    require 'dbh.php';
    $item = $_POST['item'];
    $item = str_replace("%20", " ", $item);

    $sql = "SELECT * FROM products WHERE Title = ?";
    $stmt = mysqli_stmt_init($conn);
    if(!mysqli_stmt_prepare($stmt, $sql)){
        echo 'login.php?error=sqlerror';
        exit();	
    }else{
        mysqli_stmt_bind_param($stmt, "s", $item);
        mysqli_stmt_execute($stmt);
        $result = get_result($stmt);
        echo json_encode($result);
    }
?>