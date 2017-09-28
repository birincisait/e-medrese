<?php

$DB_host = "rdbms.strato.de";
$DB_user = "U2576049";
$DB_pass = "m3sJjTLFG0OcMvowR";
$DB_name = "DB2576049";

try {
    $db = new PDO("mysql:host={$DB_host};dbname={$DB_name};charset=utf8", $DB_user, $DB_pass);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo $e->getMessage();
}
