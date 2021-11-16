<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loops and If</title>

    <!-- style -->
    <style>

        *{
            padding:0px;
            margin:0px;
            box-sizing:border-box;
            font-family:sans-serif;
        }
        .container{
            background-color:#242526;
            color:white;
            max-width:80%;
            margin:auto;
            padding: 40px;
        }
    </style>
</head>

<body>
    <div class="container">
        <?php
            // if else statement
            $age=34;

            if($age>18){
                echo "You can enter the site";
            }

            else{
                echo "You cannot enter the site";
            }

            echo "<br>";

            // while loops
            $a=0;

            while($a<=10){
                echo "a= ";
                echo $a;
                echo "<br>";
                $a++;
            }

            // for loop
            echo "<br>";
            $languages=array("C++","php","Python","js","Chinese");

            for($b=0;$b<=count($languages);$b++){
                echo $languages[$b];
                echo "<br>";
            }
        ?>
    </div>    
</body>

</html>