/*Solicita una frase al usuario y contando los espacios que 
tiene, indica de cuántas palabras consta (debes presuponer que la 
frase tiene un único espacio entre palabras).*/

/*xtra: Supón que el usuario puede equivocarse y poner más de un 
espacio entre palabras, nuestro programa debe seguir
 contando bien las palabras.*/

var frase = prompt("Introduce una frase: ");
var n =0

for (i = 0 ; i<=frase.length; i++){
    if (frase[i] == ' '){
        n++;
    /*} else if (frase[i] == ' ' + ''){
    n--}*/
    }
}
n++
alert(n);

