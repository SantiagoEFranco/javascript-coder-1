

let lista 
let nombre = prompt("Ingresa tu nombre aqui")
let cheeseBurguer = 8500;
let tripleBacon = 7450;
let tradicional = 9000;
let costoEnvio = 1200

function saludar(){
    if(nombre == ""){
        alert("Vuelve a ingresar tu nombre")
    }else{
        alert("Bienvenidx! " + nombre)
    }
}
saludar()

function elegirProducto(){
  lista = prompt("Elegi la hamburguesa que quieras! \n 1: Cheese Burguer \n 2: Triple Bacon \n 3: Tradicional")
  if(lista == 1){
    alert("Su hamburguesa Cheese Burguer ha sido pedida con exito su valor es de : " + cheeseBurguer + "$")
}else if(lista == 2){
    alert("Su hamburguesa Triple Bacon ha sido pedida con exito su valor es de : " + tripleBacon + "$")
 }else if (lista == 3){
    alert("Su hamburguesa Tradicional ha sido pedida con exito su valor es de : " + tradicional + "$")
 }else{
    alert("Vuelve a intentarlo")
 }
}

elegirProducto()

