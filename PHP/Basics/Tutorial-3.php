<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Types</title>
</head>

<body>
    <?php

        // defining constants
        define('pi',(22/7.0));

        // string
        $var = "This is a string.";
        echo $var;
        echo "<br>";
        // gives also the length of the string
        echo var_dump($var);

        // integer,float
        $int=10;
        $float=98.57;
        echo "<br>";
        echo $int;
        echo "<br>";
        echo $float;

        // calling constant
        echo "<br>";
        echo pi;

        // arrays
        echo "<br>";
        $languages=array("English","Nepali","Python","C++","nodejs","php");
        echo $languages[3];
    ?>
</body>

</html>