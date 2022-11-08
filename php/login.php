<?php
    require_once 'db_connect.php';

    if(isset($_POST['loginuser'])){

        $emailid = $_POST['email'];
        $password = $_POST['password'];

        $sql = "SELECT * FROM `users` WHERE email_id = '$emailid' AND password = '$password'";
        $result = mysqli_query($conn,$sql);
        $data = array();
        if($result){

            if(mysqli_num_rows($result) > 0){
                $row = $result->fetch_assoc();
                $data[] = array(
                    'login' => 'Valid Creds',
                    'name' => $row['full_name'],
                    'email' => $row['email_id'],
                    'id' => $row['id']
                );
                // echo "Valid Creds";
                echo json_encode($data);
    
            }else{
                echo "Invalid Credentials";
            }
        }
        else{
            echo "Invalid";
        }
    }

?>