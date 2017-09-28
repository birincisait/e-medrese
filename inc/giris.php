<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
</html>

<?php
include 'ayar.php';

if ($_POST) {

    $username = trim($_POST["username"]);
    $sifre = trim(md5($_POST["password"]));

    if (!$username || !$sifre) {

        ?>
        <script>
            alert('kullancı adı ve sifre bos bırakılamaz ...');
            window.location.href = '../index.php';
        </script>
        <?php

    } else {

        $uye = $db->prepare("select * from tabloadi where username = ? and password = ?");
        $uye->execute(array($username, $sifre));
        $z = $uye->fetch(PDO::FETCH_ASSOC);
        $x = $uye->rowCount();

        if ($x) {

            $_SESSION["uye"] = $z["username"];
            $_SESSION["eposta"] = $z["email"];
            $_SESSION["rutbe"] = $z["rutbe"];
            $_SESSION["id"] = $z["id"];
            $_SESSION['user_session'] = $z["id"];

            ?>
            <script>
                alert('Başarıyla giriş yaptınız ...');
                window.location.href = '../index.php';
            </script>
            <?php

        } else {

            ?>
            <script>
                alert('Üye adı ya da şifreniz yanlıs ...');
                window.location.href = '../index.php';
            </script>
            <?php

        }
    }

} else {
    ?>
    <script>
        alert('Buraya bu şekilde gelemezsin kusura bakma ...');
        window.location.href = '../index.php';
    </script>
    <?php
}
