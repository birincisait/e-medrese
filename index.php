<?php
header('Content-Type: text/html; charset=utf-8');

session_start();
ob_start();
?>
    <!DOCTYPE html>
    <html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">

    <title>e-Medrese (Beta)</title>

    <link rel="shortcut icon" type="image/png" sizes="32x32" href="image/favicon-32x32.png">

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/mainstyle.css">
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
</head>
<body>

<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="nav navbar-nav navbar-right">
            <a href="" type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal"><i
                        class="glyphicon glyphicon-user"></i></a>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
<!-- Button trigger modal -->

<!-- Modal -->
<div class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">Giriş Bilgileriniz</h4>
            </div>
            <div class="modal-body">
                <form method="post" action="inc/giris.php">
                    <div class="form-group">
                        <label for="username" class="control-label">Kullanıcı Adı:</label>
                        <input type="text" class="form-control" id="username" name="username">
                    </div>
                    <div class="form-group">
                        <label for="password" class="control-label">Şifre:</label>
                        <input type="password" class="form-control" id="password" name="password">
                    </div>
                    <button type="submit" class="btn btn-default">Giriş</button>
                    <button type="button" data-dismiss="modal" class="btn btn-primary" data-toggle="modal"
                            data-target="#kayitModel">Kayıt Ol
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="modal" id="kayitModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">Kayıt Bilgileriniz</h4>
            </div>
            <div class="modal-body">
                <form method="post" action="inc/kayit.php">
                    <div class="form-group">
                        <label for="name" class="control-label">İsim:</label>
                        <input type="text" class="form-control" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="surname" class="control-label">Soyisim:</label>
                        <input type="text" class="form-control" id="surname" name="surname" required>
                    </div>
                    <div class="form-group">
                        <label for="email" class="control-label">Email Adresi:</label>
                        <input type="email" class="form-control" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="username" class="control-label">Kullanıcı Adı:</label>
                        <input type="text" class="form-control" id="username" name="username" required>
                    </div>
                    <div class="form-group">
                        <label for="password" class="control-label">Şifre:</label>
                        <input type="password" class="form-control" id="password" name="password" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Kayıt Ol</button>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <h1 class="sayfabaslik">e-Medrese (Beta) Dijital Öğrenme Platformuna Hoşgeldiniz!</h1>
    <br/>
    <div class="col-lg-3 col-md-4 col-sm-6 sayfabaslik">
        <img width="100%" height="200" src="image/emsileicon.jpg">
        <h3>Dijital Sarf 1.0 (Beta)</h3>
        <p>Medrese sarf kitaplarını tek bir uygulamada birleştirme ve detaylı kullanım sunma projemizin 1.0 versiyonu</p>
        <a href="dijitalsarf.html" class="btn btn-primary">Başlat</a>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6 sayfabaslik">
        <img width="100%" height="200" src="image/IlmuwanMuslim.jpg">
        <h3>Soru Çözme Platformu</h3>
        <p>Medrese derslerimiz ve genel olarak islami ilimler hakkında soru çözebileceğiniz geniş bir platform hazırlıyoruz</p>
        <a href="soruplatformu.php" class="btn btn-primary">Başlat</a>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6 sayfabaslik">
        <img width="100%" height="200" src="image/WillScienceReturntotheMuslimWorld.jpg">
        <h3>Ders Platformu</h3>
        <p>Medrese derslerimiz ve genel olarak islami ilimler hakkında ders anlatımlarını bulabileceğiniz geniş bir platform hazırlıyoruz</p>
        <a href="dersplatformu.php" class="btn btn-primary">Başlat</a>
    </div>
</div>

</body>
</html>
<?php
header('Content-Type: text/html; charset=utf-8');

session_start();
ob_start();
?>