<?php
// Database connection
$host = 'localhost'; // Replace with your database host
$dbname = 'library_db'; // Replace with your database name
$username = 'root'; // Replace with your database username
$password = ''; // Replace with your database password

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $book_name = $_POST['book_name'];
    $author = $_POST['author'];
    $publication = $_POST['publication'];
    $genre = $_POST['genre'];
    $price = $_POST['price'];
    $quantity = $_POST['quantity'];

    // Handle file upload
    $book_photo = '';
    if (isset($_FILES['book_photo']) {
        $target_dir = "uploads/"; // Create this directory in your project
        $target_file = $target_dir . basename($_FILES['book_photo']['name']);
        if (move_uploaded_file($_FILES['book_photo']['tmp_name'], $target_file)) {
            $book_photo = $target_file;
        }
    })

    // Insert data into the database
    $sql = "INSERT INTO books (book_name, author, publication, genre, price, quantity, book_photo)
            VALUES (:book_name, :author, :publication, :genre, :price, :quantity, :book_photo)";
    $stmt = $conn->prepare($sql);
    $stmt->execute([
        ':book_name' => $book_name,
        ':author' => $author,
        ':publication' => $publication,
        ':genre' => $genre,
        ':price' => $price,
        ':quantity' => $quantity,
        ':book_photo' => $book_photo
    ]);

    // Redirect or display success message
    echo "Book added successfully!";
}
?>