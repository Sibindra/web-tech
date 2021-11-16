<!-- strings in php -->
<?php
    $str= "This is a string";
    // display string
    echo $str;
    echo "<br>";
    // display string length
    $len=strlen($str);
    echo "The length of the  string is ";
    echo $len;
    echo "<br>";
    // concatinated
    echo "The length of the string is ". $len. ". This is a concatinated echo!<br>";

    // word count
    echo "The number of words in the string is ". str_word_count($str);

    // reverse of the string
    echo "<br>The reverse of the string is --". strrev($str);

    // display the position of the string
    echo "<br>The position is 'is' in the string is ". strpos($str, "is");
?>