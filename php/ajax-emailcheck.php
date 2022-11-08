<?php
require_once 'db_connect.php';

    if(isset($_POST['emailcheck'])){
        $email = $_POST['email_id'];

        $query = "SELECT * FROM users WHERE email_id = '$email' ";
        $query_run = mysqli_query($conn,$query);

        if(mysqli_num_rows($query_run) > 0){
            echo "Email Already Exists. Please try another.";
        }else{
            echo "It is available";
        }
    }else{
        echo "Notttt";
    }


?>