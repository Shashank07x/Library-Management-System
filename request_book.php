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

// Insert request into the database (assuming you have a `requests` table)
$sql = "INSERT INTO requests (book_id, student_id, request_date) VALUES ($bookId, 1, NOW())"; // Replace `1` with the actual student ID
if (mysqli_query($con, $sql)) {
    echo "Book request submitted successfully!";
} else {
    echo "Failed to submit request: " . mysqli_error($con);
}

// Close connection
mysqli_close($con);
?>