<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname = "library";

$con = mysqli_connect($server, $username , $password , $dbname);

if(!$con)
{
    echo "not connected";
}
$book_name  = $_POST['book_name'];
$author = $_POST['author'];
$publication = $_POST['publication'];
$genre = $_POST['genre'];
$price = $_POST['price'];
$quantity = $_POST['quantity'];
$book_photo = "";

if (isset($_FILES['book_photo']) && $_FILES['book_photo']['error'] == 0) {
    $target_dir = "uploads/"; // Folder to store images
    if (!file_exists($target_dir)) {
        mkdir($target_dir, 0777, true); // Create folder if not exists
    }

    $file_name = basename($_FILES["book_photo"]["name"]);
    $target_file = $target_dir . $file_name;
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    // Allow only image files
    $allowed_types = ["jpg", "jpeg", "png", "gif"];
    if (in_array($imageFileType, $allowed_types)) {
        if (move_uploaded_file($_FILES["book_photo"]["tmp_name"], $target_file)) {
            $book_photo = $file_name; // Store only the file name in DB
        } else {
            echo "Error uploading image.";
            exit;
        }
    } else {
        echo "Invalid file type. Only JPG, JPEG, PNG, and GIF are allowed.";
        exit;
    }
}


$sql = "INSERT INTO `books`(`book_name`, `author`, `publication`, `genre`, `price`, `quantity`, `book_photo`) VALUES ('$book_name','$author','$publication','$genre','$price','$quantity','$book_photo')";

$result = mysqli_query($con , $sql);
if($result)
{
    echo "data submitted";
}
else
{
    echo "querry failed";
}

?>