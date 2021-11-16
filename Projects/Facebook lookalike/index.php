<?php

    #server
    $server="localhost";
    $username="root";
    $password="";

    #connection variable
    $con=mysqli_connect($server,$username,$password);

    if(!$con){
        die("Connection failed due to ".mysqli_connect_error());
    }

    #variables
    $email=$_POST['useremail'];
    $pssd=$_POST['password'];

    $sql="INSERT INTO `JustBook`.`Users` (`Email`, `Password`, `Date`) VALUES ('$email', '$passwd', CURRENT_DATE());";

    #echo $sql;

    if($con->query($sql)==true){
        echo "Congratulations! Now you have a JustBook account";
    }

    else{
        echo"ERROR:$sql <br> $con->error";
    }

    #closing the connection
    $con->close();

?>