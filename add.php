<?php

include 'server/data/db.php';
include 'server/data/config.php';

$name = $_POST['name'];
$dosage =$_POST['dosage'];
$instruction = $_POST['instruction'];

$query = "INSERT INTO 247_medication (Name, Dosage, Instruction) VALUES ('$name', '$dosage', '$instruction')";

if(mysqli_query($connection, $query)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
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
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
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
            <h1>Add Medicine</h1>
        </div>    
    </div>
    <div>
        <form action="#" method="post">
            <div class="row mt-2">
                <div class="col-12">
                    <label for="name">Name: <br> <input type="text" name="name" value="" placeholder="Acamol" class="form-control"></label>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-12">
                    <label for="dosage">Dosage: <br> <input type="number" name="dosage" value="" placeholder="500mg" class="form-control"></label>
                </div>
            </div>  
            <div class="row mt-2">
                <div class="col-12">
                    <label for="instruction">Instruction: <br> <input type="text" name="instruction" value="" class="form-control"></label>
                </div>
            </div>            
            <div class="row mt-5">
                <div class="col-12">
                    <a href="medication.php"><div class="back"></div></a>
                    <input type="submit" value="Save" class="btn btn-success">
                </div>
            </div>
        </form>
    </div>
</main>

</body>
</html>
