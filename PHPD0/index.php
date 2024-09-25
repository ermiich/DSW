<?php
    //https://www.hostinet.com/formacion/bases-de-datos/conectar-php-bases-datos-mysql/
    require_once 'database.php';
    $stmt = $conn->prepare("SELECT * FROM contacts");
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $stmt->execute();
?>
<?php 

    require '.\partials\header.php';
        while ($row = $stmt->fetch()):?>
        
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