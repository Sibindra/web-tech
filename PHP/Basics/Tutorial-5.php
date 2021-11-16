<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functions</title>
</head>

<body>
    <?php
        // defining a function
        function print5(){
            echo "5";
        }

        // calling a function
        print5();

        function print_number($number){
            echo "<br>Your number is ";
            echo $number;
        }

        print_number(45);
        print_number(500);
        print_number(10);

    ?>
</body>

</html>