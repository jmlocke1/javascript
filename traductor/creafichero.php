<?php
$nombres = array(
    "JOSE" => 'Miguel',
    "MIGUEL" => 'Izquierdo',
    'IZQUIERDO' => 'Martínez',
    'CACTUS' => 'Amanita faloidea estrógena',
    'SPAIN' => 'España cañí',
    'HTML' => '<a href="test">Test</a>',
    'ESPACIO' => 'Profundo 9 In the World, ¡Ozú!'
);
//file_put_contents(__DIR__."/nombres.js", json_encode($nombres));
$file = fopen("nombres.js", "w");
fwrite($file, "var nombres = new Array()".PHP_EOL);
echo "<h2>Impreso desde PHP</h2>";
foreach($nombres as $key => $value){
    // Transforma los acentos y caracteres especiales en entidades entendibles por cualquier navegador
    $value = htmlentities($value, ENT_QUOTES, "UTF-8");
    fwrite($file, "nombres['$key'] = '$value'".PHP_EOL);
    $dec=html_entity_decode($value);
    echo "$key => {$dec}<br>";
    var_dump($value);
    var_dump(html_entity_decode($value));
}
fclose($file);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="nombres.js"></script>
</head>
<body>
    <h2>Impreso desde JavaScript</h2>
    <script>
        for(var key in nombres){
            document.write(key + " => "+nombres[key]+"<br>");
        }
        document.write("La traducción de JOSE es: "+nombres['JOSE']);
    </script>
</body>
</html>