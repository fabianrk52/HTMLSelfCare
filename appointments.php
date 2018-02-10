<?php
    include 'server/data/db.php';
    include 'server/data/config.php';

    $query="SELECT * FROM 247_appointments";
    $result = mysqli_query($connection, $query);
    $doctor = array();
    while($row = mysqli_fetch_array($result)) {
        $doctor[]= $row['last'];   
    }   
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script
    src="https://code.jquery.com/jquery-3.2.1.slim.js"
    integrity="sha256-tA8y0XqiwnpwmOIl3SGAcFl2RvxHjA8qp0+1uCGmRmg="
    crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="includes/css/style.css">
    <title>SelfCare</title>
</head>


<body id="wrapper">
<header>
    <a href="main.html" class="logo medium"></a>
</header>
<main id=main class="container">
        <div class="row">
                <div class="col-12">
                    <p class="h1">Appointments</p>
                </div>
            </div>
        <div class="list-group textInBox mt-5">
            <?php
            foreach($doctor as $key){
            echo '<a href="doc1.html" class="list-group-item list-group-item-action"> Dr. '. $key.'</a>';
            }   
            ?>
        </div>
        <div class="row">
                <div class="col-12">
                    <a href="main.html">
                        <div class="back mt-3"></div>
                    </a>
                </div>
              </div>
</main>

</body>
</html>
