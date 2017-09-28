<?php

$DB_host = "veritabanisunucuadresi";
$DB_user = "veritabanikullaniciadi";
$DB_pass = "veritabanisifre";
$DB_name = "veritabaniadi";

try {
    $db = new PDO("mysql:host={$DB_host};dbname={$DB_name};charset=utf8", $DB_user, $DB_pass);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo $e->getMessage();
}
