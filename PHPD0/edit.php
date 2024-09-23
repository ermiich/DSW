<?php

$contactId = $_POST['id'];
//https://www.hostinet.com/formacion/bases-de-datos/conectar-php-bases-datos-mysql/
require_once "database.php";
$stmt = $conn->prepare("SELECT * FROM contacts WHERE id LIKE :id");
$stmt->bindParam(':id',$contactId);
$stmt->setFetchMode(PDO::FETCH_ASSOC);
$stmt->execute();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="main_style.css">
</head>

<body>
    <header>
        <h1>Tus Contactos</h1>
        <nav>
            <a class="navItem" href="">Contactos</a>
            <a class="navItem" href="">Añadir</a>
        </nav>
    </header>
    <main class="mainWrapper">
    
        <?php while ($row = $stmt->fetch()):?>
            <div class="cardContact">
                
                <form class="cardBtns" action="" method="post">
                Nombre:<input id="txtName"value=<?= $row["contactName"]; ?> type="text" /> 


                <?php 
                    printf("<button type='submit' class='btnEdit' formaction='index.php' name='id'><img class='imgEdit' src='https://www.shareicon.net/data/512x512/2015/09/29/648442_cancel_512x512.png'></button>");
                    printf("<button type='submit' class='btnEdit' formaction='edit.php' name='id' value='%s'><img class='imgEdit' src='https://www.shareicon.net/download/2016/06/06/776719_check_512x512.png'></button>",$row["id"]);
                ?>
                </form>
            </div>
        <?php endwhile; ?>

    </main>

</body>

</html>