<?php

    $submit=false;
    
    #server
    $server= "localhost";
    $username= "root";
    $password= "";
    
    #connection variable
    $con= mysqli_connect($server,$username,$password);
    
    if(!$con){
        die("Connection failed due to ". mysqli_connect_error());
    }
    
    #echo "Successfully connected";
    
    #variables
    $name= $_POST['username'];
    $age= $_POST['userage'];
    $gender= $_POST['usergender'];
    $email= $_POST['useremail'];
    $phone_no= $_POST['userphone'];
    $more_info= $_POST['moreinfo'];

    $sql= "INSERT INTO `Visit Nepal`.`Users` (`Name`, `Age`, `Gender`, `Email`, `Phone no`, `More Info`, `Date`) VALUES ('$name', '$age', '$gender', '$email', '$phone_no', '$more_info', current_timestamp());";
    
    #echo $sql;
    
    if($con->query($sql)== true){
        #echo "Sucessful";
        $submit= true;
    }
    
    else{
        echo "ERROR:$sql <br> $con->error";
    }
    
    #close the connection at last
    $con->close();
?>
