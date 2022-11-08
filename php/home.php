<?php
    require_once 'db_connect.php';

    if(isset($_POST['homeload'])){

        $id = $_POST['id'];
        $sql = "SELECT * FROM `profile` WHERE profileid = '$id'";

        $result = mysqli_query($conn,$sql);

        $data = array();
        if($result){

            if(mysqli_num_rows($result) > 0){
                $row = $result->fetch_assoc();
                
                $data[] = array(
                    
                    'age' => $row['age'],
                    'bio' => $row['bio'],
                    'city' => $row['city'],
                    'id' => $row['profileid']
                );
                // echo "Valid Creds";
                echo json_encode($data);
    
            }else{
                echo "Invalid";
            }
        }
        else{
            echo "Error";
        }
    }

    

?>