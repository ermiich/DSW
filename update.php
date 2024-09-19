<?php
if (!empty($_POST['id'])) {
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pruebacontactos";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
}

?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body class="cuerpo">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>

    <?php
  
        $contactId = ($_GET['id']);
        $sql = "SELECT id, contactName, contactNumber,contactDescription FROM contacts WHERE id LIKE $contactId";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                printf('<div class="card" style="width: 18rem;">
                        <div class="card-body">'); 
                printf('<h5 class="card-title">%s</h5>',$row["contactName"]);
                printf('<h6 class="card-subtitle mb-2 text-muted">%s</h6>',$row["contactNumber"]);
                printf('<p class="card-text">%s</p>
                    <button href="/update.php?id=%s " class="card-link">Guardar</button>
                </div>
                </div>',$row["contactDescription"],$row["id"]);
            }
        }
        $conn->close();
    ?>


</body>
</html>