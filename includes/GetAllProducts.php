<?php

require 'dbh.php';

$sql = "SELECT * FROM products";
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



?>