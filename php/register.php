<?php
    require_once 'db_connect.php';

    if(isset($_POST['registeruser'])){
        $fullname = $_POST['name'];
        $emailid = $_POST['email'];
        $password = $_POST['password'];
        $id = 0;
        
        $sql = "INSERT into `users` (full_name,email_id,password) VALUES ('$fullname','$emailid','$password')";
        $result = mysqli_query($conn,$sql);

        if($result){
            $sql = "SELECT * FROM `users` WHERE email_id = '$emailid'";
            $result = mysqli_query($conn,$sql);

            if($result){

                if($row = mysqli_fetch_array($result)){

                    
                    $id = $row['id'];
                    $sql = "INSERT INTO `profile` (profileid,age,bio,city) VALUES ('$id',null,null,null)";
                    $result = mysqli_query($conn,$sql);
                    if($result){
                        echo "Registeration Successfull";
                    }
                    else{
                        echo "Can't insert into the table";
                    }
                }
                else{
                    echo "fetch_assoc failed";
                }
            }else{
                echo "Can't fetch row";
            }
        }
        else{
            die(mysqli_error($conn));
        }
        

        

    }else{
        echo "Not register";
    }

?>