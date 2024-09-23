<?php
    //https://www.hostinet.com/formacion/bases-de-datos/conectar-php-bases-datos-mysql/
    require_once "database.php";
    $stmt = $conn->prepare("SELECT * FROM contacts");
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
                <h3 class="contactName"><?=$row["contactName"];?></h3>
                <h5 class="contactPhone">Número: <?=$row["contactNumber"];?></h5>
                <p class="contactDesc"><?=$row["contactDescription"];?> </p>

                <form class="cardBtns" action="" method="post">
                <?php 
                    printf("<button type='submit' class='btnEdit' formaction='edit.php' name='id' value='%s'><img class='imgEdit' src='https://cdn-icons-png.flaticon.com/512/860/860763.png'></button>",$row["id"]);
                    printf("<button type='submit' class='btnEdit' formaction='edit.php' name='id' value='%s'><img class='imgEdit' src='https://icons.veryicon.com/png/o/miscellaneous/easyapi-service-platform/delete-item-1.png'></button>",$row["id"]);
                    $conn = null;
                ?>
                </form>
            </div>
        <?php endwhile; ?>

    </main>

</body>

</html>