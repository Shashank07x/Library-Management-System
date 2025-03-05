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

// Get book ID from the request
$data = json_decode(file_get_contents('php://input'), true);
$bookId = $data['book_id'];

// Delete the book from the database
$sql = "DELETE FROM books WHERE id = $bookId";
if (mysqli_query($con, $sql)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => mysqli_error($con)]);
}

// Close connection
mysqli_close($con);
?>