<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Piotr Kusiak</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="css/bootstrap.min.css">

  <!-- Fonts CSS -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Droid+Serif:400i&amp;subset=latin-ext">
  <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&amp;subset=latin-ext" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:700&amp;subset=latin-ext" rel="stylesheet">

  <!-- Font awesome -->
  <link href="css/fontawesome-all.min.css" rel="stylesheet">

  <!-- Custom styles -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/responsive.css">

  <!--  scrollReveal -->
  <script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js"></script>
</head>

<body>
  <div class="progressbar"></div>
  <video src="video/4k.mp4" loop autoplay class="video"></video>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#about">Front-End Developer</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav w-100 justify-content-end text-uppercase">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projekty</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#technologies">Technologie</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">O mnie</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Main header -->
  <header id="main-header">
    <div class="header-caption text-center">
      <?php
$to      = 'piotr.kusiak.waw@gmail.com';
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['phone'];
$subject = 'Nowy e-mail od '. $name . ' (' . $email . ' )';
$message = $_POST['message'];
$headers = 'From: ' . $name . ' (' . $email . ' )' ;
$headers .= "Content-Type: text/html; charset=utf-8\r\m";
mail($to, $subject, $message, $headers);
echo '<h2 style="color:#18a3e0">WIADOMOŚĆ WYSŁANO</h2>';
?>
        <h1 class="text-uppercase">Jestem Front-endowcem</h1>
        <a href="#about" class="btn btn-primary btn-lg text-uppercase btn-custom">Więcej</a>
    </div>
  </header>

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->

  <script src="js/jquery-3.3.1.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/main.js"></script>

</body>

</html>
