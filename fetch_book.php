<?php
// Database connection
$server = "localhost";
$username = "root";
$password = "";
$dbname = "library";

$con = mysqli_connect($server, $username, $password, $dbname);

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

// Fetch books from the database
$sql = "SELECT * FROM books";
$result = mysqli_query($con, $sql);

$books = [];
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $books[] = $row;
    }
}

// Close connection
mysqli_close($con);

// Return data as JSON
header('Content-Type: application/json');
echo json_encode($books);
?>