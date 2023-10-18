s<?php
	require 'dbh.php';
    session_start();

	$pwd = $_POST['pwd'];


	if(empty($pwd)){
		echo "fail";
 		exit();
	}else{
		$sql = "SELECT * FROM admintable WHERE id=1";
		$stmt = mysqli_stmt_init($conn);
		if(!mysqli_stmt_prepare($stmt, $sql)){
			echo 'login.php?error=sqlerror';
	 		exit();	
		}else{
			mysqli_stmt_execute($stmt);
			$result = get_result($stmt)[0];
            $pwdCheck = password_verify($pwd, $result["pwd"]);
            if($pwdCheck){
                $_SESSION['auth'] = true;
                echo 'success';
            }else{
                $_SESSION['auth'] = false;
                echo 'fail1';
            }
		}
	}


// $pwdCheck = password_verify($pwd, $row['password']); //TRUE OT FALSE//
// $hashedPwd = password_hash($password, PASSWORD_DEFAULT);
