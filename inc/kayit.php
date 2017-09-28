<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
</html>

<?php
include 'ayar.php';

if ($_POST) {

    $isim = strip_tags(trim($_POST["name"]));
    $soyisim = strip_tags(trim($_POST["surname"]));
    $sifre = strip_tags(trim($_POST["password"]));
    $email = trim($_POST["email"]);
    $kullaniciadi = strip_tags(trim($_POST["username"]));

    if (!$isim || !$sifre || !$email || !$soyisim || !$kullaniciadi) {

        ?>
        <script>
            alert('Bütün alanları doldurmanız gerekiyor ...');
            window.location.href = '../index.php';
        </script>
        <?php

    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

        ?>
        <script>
            alert('Bu mail adresi gecerli değil baska bir tane deneyin ...');
            window.location.href = '../index.php';
        </script>
        <?php

    } else {

        $sifremd5 = md5($sifre);

        $v = $db->prepare("select * from tabloadi where user_username = ?");
        $v->execute(array($kullaniciadi));
        $x = $v->fetch(PDO::FETCH_ASSOC);
        $y = $v->rowCount();

        if ($y) {

            ?>
            <script>
                alert('Hata!! <?php echo $kullaniciadi?> kullanıcı adlı üye sistemde zaten var başka bir tane deneyin ...');
                window.location.href = '../index.php';
            </script>
            <?php

        } else {

            $x = $db->prepare("insert into tabloadi set

				          user_name = ?,
						  user_surname = ?,
						  user_email = ?,
						  user_username = ?,
						  user_password = ?

				");

            $kayit = $x->execute(array($isim, $soyisim, $email, $kullaniciadi, $sifremd5));

            if ($kayit) {

                ?>
                <script>
                    alert('Başarıyla Eklendi ...');
                    window.location.href = '../index.php';
                </script>
                <?php

            } else {

                echo '<div class="hata">uye olurken bir hata olustu</div>';

            }


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
