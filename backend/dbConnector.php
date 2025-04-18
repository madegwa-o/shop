<?php

    $hostname = "localhost";
    $username = "dev";
    $password = "1234";
    $database = "shopdb";


    $mysqlObj = new mysqli($hostname, $username, $password, $database);

    if ($mysqlObj->connect_error) {
        die("Connection failed". $mysqlObj->connect_error);
    }

