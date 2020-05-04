<?php 
    if(isset($_GET['url'])){
        $fp = fopen('link.txt', 'w');
        fwrite($fp, '{"url":"'.$_GET["url"].'"}');
        fclose($fp);
        header("Location: http://localhost/Anime/");

    }elseif(isset($_GET['url1'])){
        echo file_get_contents("link.txt");
    }
?>