

var opcion = prompt("eliga una opcion entre 1 y 2: ");
if (opcion == 1){

    var n1 = prompt("Introduce un numero");
    var n2 = prompt("Introduce otro numero");

    /*Los que son multiplos de 5*/
    if (n1%2 != 0 && n2%2 != 0 && n1%5 == 0 && n2%5==0){
        alert("Ambos numeros son impares y multiplos de 25.");
    }
    else if(n1%2 != 0 && n%2 != 0 && n1%5 == 0 && n2%5!=0){
         alert("Ambos numeros son impares y el primero es multiplo de 25.")
    }
    else if(n1%2 != 0 && n2%2 != 0 && n1%5 != 0 && n2%5==0){
        alert("Ambos numeros son impares y el segundo es multiplo de 25.")
   }
   else if(n1%2 != 0 && n2%2 != 0 && n1%5 != 0 && n2%5!=0){
    alert("Ambos numeros son impares y ninguno es multiplo de 25.")
    }
    /*solo impares y los multiplos*/
    else if(n1%2 == 0 && n2%2 != 0 && n1%5 != 0 && n2%5!=0){
        alert("el primero es par, el segundo impar y ninguno es multiplo de 25.")
   }
   else if(n1%2 != 0 && n2%2 == 0 && n1%5 != 0 && n2%5!=0){
    alert("el primero es impar, el segundo par y ninguno es multiplo de 25.")  
    }
    else if(n1%2 == 0 && n2%2 != 0 && n1%5 == 0 && n2%5!=0){
    alert("el primero es par, el segundo impar y el primero  multiplo de 25.")
    }
    else if(n1%2 == 0 && n2%2 != 0 && n1%5 != 0 && n2%5==0){
    alert("el primero es par, el segundo impar y el segundo   multiplo de 25.")
    }
    /*par, impares con no multiplos*/
    else if(n1%2 != 0 && n2%2 == 0 && n1%5 == 0 && n2%5==0){
        alert("el primero es par, el segundo impar y los dos son multiplo de 25.")
   }
   else if(n1%2 == 0 && n2%2 != 0 && n1%5 == 0 && n2%5==0){
        alert("el primero es par, el segundo impar y los dos son multiplo de 25.")
   }
  
   else if(n1%2 == 0 && n2%2 != 0 && n1%5 == 0 && n2%5!=0){
        alert("el primero es par, el segundo impar y el primero multiplo de 25 y no el segundo .")
   }
   else if(n1%2 != 0 && n2%2 == 0 && n1%5 != 0 && n2%5==0){
        alert("el primero es impar, el segundo par y el primero no es multiplo de 25 y si el segundo  .")
   }
   else if(n1%2 == 0 && n2%2 == 0 && n1%5 != 0 && n2%5==0){
        alert("el primero es impar, el segundo par y el primero no es multiplo de 25 y si el segundo  .")
   }

   /**/
   else if(opcion == 2){
    palabra = prompt("Introduce una palabra ")
    if (palabra[palabra.lenght-1] == "s"){
        alert("la palabra termina en s.")
    }
    else if (palabra[palabra.lenght-1] == "S"){
        alert("la palabra termina en S.")
    }
    else {
        alert("la palabra no termina en s.")
    }
}
else {
    alert("No ha introducido ninguna opcion correcta. ")

}
}

