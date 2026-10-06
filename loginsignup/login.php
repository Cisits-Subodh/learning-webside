<?php
$is_invalid = false;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mysqli = require__DIR__ . "database.php";
    $sql = $sprintf(
        "SELECT * FROM user
                    WHERE email='%s'",
        $mysqli->real_escape_string($_POST["email"])
    );

    $result = $mysqli->query($sql);
    $user = $result->fetch_assoc();
    if ($user) {
        if (password_varify($_POST["password"], $user["password_hash"])) {
            session_start();
            session_regenerate_id();
            $_SESSION["$user_id"] = $user["id"];
            header("Location: index.php");
            exit;
        }
    }
    $is_invalid = true;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php if($is_invalid):?>
<em>Invalid Login</em>
<?php endif;?>
 <form action=""method="POST">
    <labe>email</labe>
    <input type="email"name="email"id="email">
    <label for="">password</label>
    <input type="password"name="password"id="password">
    <button>Login</button>
 </form>   
 <a href="passwordforget.php"> Forget PassWord</a>

</body>
</html>
