<?php
// Connect
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "my_database";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Lấy danh sách bài viết
$sql = "SELECT * FROM posts";
$result = $conn->query($sql);

$posts = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $posts[] = $row;
    }
}

// Lấy danh sách user
$sql_users = "SELECT id, username FROM users";
$result_users = $conn->query($sql_users);

$users = array();
if ($result_users->num_rows > 0) {
    while ($row_users = $result_users->fetch_assoc()) {
        $users[] = $row_users;
    }
}

// Trả về kết quả dưới dạng JSON
$data = array(
    'posts' => $posts,
    'users' => $users
);

header('Content-Type: application/json');
echo json_encode($data);

$conn->close();
?>
