<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "library";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password
$phone = $_POST['phone'];
$dob = $_POST['dob'];

// Insert data into the database
$sql = "INSERT INTO students (name, email, password, phone, dob) 
        VALUES ('$name', '$email', '$password', '$phone', '$dob')";

if ($conn->query($sql) === TRUE) {
    echo "New student added successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>