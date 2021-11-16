<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operators</title>
</head>

<body>
    <?php

        $variable1=300;
        // operators in php 

        // Arithmetic Operators
        echo "The value of a is ";
        echo $variable1;

        // line break by html
        echo "<br>";

        $variable2=400;

        echo "The value of b is ";
        echo $variable2;

        echo "<br>";

        echo "Sum= ";
        echo $variable2+$variable1;

        echo "<br>";
        echo "<br>";

        // Assignment operators
        $newvariable=$variable1;
        $newvariable+=1;

        echo "The value of new variable is ";
        echo $newvariable;

        // Comparison operators
        echo "<h2>Comparison Operators</h2>";
        echo "<br>";
        echo "The value of 1==4 is ";
        echo var_dump(1==4);

        echo "<br>";
        echo "The value of 1!=4 is ";
        echo var_dump(1!=4);

        echo "<br>";
        echo "The value os 1>=4 is ";
        echo var_dump(1>=4);

        echo "<br>";
        echo "The value os 1<=4 is ";
        echo var_dump(1<=4);

        echo "<br>";

        // increment operatora
        echo $variable1++;
        echo "<br>";
        echo $variable2++;
        

    ?>
</body>

</html>