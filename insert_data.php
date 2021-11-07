<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "igmmsdb";
$latitude = $_POST['latitude'];
$longitude = $_POST['longitude'];
$animal_tag = $_POST['animal_tag'];

echo $latitude . $longitude . $animal_tag;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO location_data (deviceName, Lat, Lng)
VALUES ('$animal_tag','$latitude', '$longitude')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>