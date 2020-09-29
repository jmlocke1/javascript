<?php
// Esta llamada hace que al llamar a 'new Class(..)' no sea necesario 'require'
spl_autoload_register(function($class) {
    require "$class.php";
});
$msg = '';
$texto1 = $_POST['texto1'] ?? '';
$texto2 = $_POST['texto2'] ?? '';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $ct = new CompareText();

    if ($_POST['comparar'] ?? '') {
        $cmp = $ct->icmp($texto1, $texto2);
        if ($cmp == 0) {
            $msg = 'Las cadenas son equivalentes';
        } else if ($cmp < 0) {
            $msg = 'La primera cadena es menor que la segunda';
        } else {
            $msg = 'La primera cadena es mayor que la segunda';
        }    
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Prueba de la clase CompareText</title>
    <style>
        .notice {
            text-align: center;
            padding: 0.5em;
            margin: 0.25em;
            background-color: lightgoldenrodyellow;
            color: blue;
            border: 5px solid orange;
        }

        .container {
            width: 90%;
            margin: 0 auto;
            padding: 0.5em;
        }

        label {
            display: block;
        }

        input {
            margin: 0.5em;
            padding: 0.5em;
            background-color: black;
            color: white;
            font-weight: bold;
            font-size: 1.2em;
        }

        .flex-box {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;
        }
    </style>
</head>
<body>
    <h2 class="notice"><?= $msg ?></h2>
    <form action="" method="post" class="container">        
        <div class="flex-box">
            <div>
                <label for="texto1">Texto1</label>
                <textarea name="texto1" id="texto1" rows="16" cols="50"><?= $texto1 ?></textarea>
            </div>

            <div>
                <label for="texto1">Texto2</label>
                <textarea name="texto2" id="texto2" rows="16" cols="50"><?= $texto2 ?></textarea>
            </div>
        </div>

        <div class="flex-box">
            <input type="submit" name="comparar" value="Comparar textualmente" />            
        </div>
    </form>
</body>
</html>