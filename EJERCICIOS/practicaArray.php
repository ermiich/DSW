<?php

//1
$arrayFrutas = ['manzana','plátano','kiwi'];

//2
printf("<p>".implode(", ",$arrayFrutas)."</p>");

//3
printf("Cantidad de elementos: %s" , count($arrayFrutas));

//4
$arrayFrutas[] = "naranjas";
printf("<p>".implode(", ",$arrayFrutas)."</p>");

//5
$frutasCopia  = $arrayFrutas;
printf("<p>".implode(", ",$frutasCopia )."</p>");

//6
array_unshift($frutasCopia, "sandía");
printf("<p>".implode(", ",$frutasCopia )."</p>");

//7 no se modifica la original porque trabajamos con la copia

//8
if(array_search("papaya", $arrayFrutas) == false){
    printf("Papaya no existe en el arrayFrutas");
}else{
    printf("Papaya si existe en el array");
}

//9
$arrayFrutas[] = "papaya";
printf("<p>".implode(", ",$arrayFrutas)."</p>");

//10
printf("Papaya se encuentra en la posición %s",array_search("papaya", $arrayFrutas));

//11
$apple = array_slice($arrayFrutas,array_search("manzana",$arrayFrutas),1)[0];
printf("<p>".implode(", ",$arrayFrutas)."</p>");

//12
array_slice($arrayFrutas,1,0,$apple);
printf("<p>".implode(", ",$arrayFrutas)."</p>");

//13
sort($arrayFrutas);
printf("<p>".implode(", ",$arrayFrutas)."</p>");

//14
$arrayFrutas = array_reverse($arrayFrutas);

//15
echo $arrayFrutas[array_rand($arrayFrutas)];

//16
shuffle($arrayFrutas);
printf("<p>".implode(", ",$arrayFrutas)."</p>");

//17
$verduras = ["berenjena","zanahoria","tomate","pimiento"];

//18
$arrayFrutas=array_merge($arrayFrutas,$verduras);
printf("<p>".implode(", ",$arrayFrutas)."</p>");
?>