<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cadastro";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$nome = $_POST["nome"];
$telefone = $_POST["telefone"];
$endereco = $_POST["endereco"];
$sexo = $_POST["sexo"];

$sql = "INSERT INTO cliente (nome, telefone, endereco,sexo)
VALUES ('$nome', '$telefone', '$endereco ','$sexo')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


header("Location: index.php", true, 301);


$conn->close();
?>