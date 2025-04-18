<?php

    header("Content-Type: application/json");

    include_once("./dbConnector.php");

    $sql = "SELECT * FROM product;";

    $result = $mysqlObj->query($sql);

    $product = [];

    if($result->num_rows > 0){
        
        while($row = $result->fetch_assoc()){
            $product[] = $row;
        }

        echo json_encode($product);
    }else{
        echo "no products are available";
    }

