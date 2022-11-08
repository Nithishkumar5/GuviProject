<?php
    require_once 'db_connect.php';

    if(isset($_POST['profileupdate'])){

        $age = $_POST['age'];
        $bio = $_POST['bio'];
        $city = $_POST['city'];
        $id = $_POST['id'];
        $sql = "UPDATE profile SET age = '$age', bio = '$bio', city = '$city' WHERE profileid = '$id'";

        $result = mysqli_query($conn,$sql);

        if($result){
            echo "Updated";
        }
        else{
            echo "Invalid";
        }

    }

    

?>