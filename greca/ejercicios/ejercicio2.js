// Crea un programa que concatena miNombre, una cadena con un sólo espacio " " y miApellido en una nueva variable, luego
// compara la nueva variable con miNombreCompleto, y si son iguales imprime el mensaje "Nombres iguales" en el terminal
let miNombre = "Xavier aaaaa";
let miApellido = "Gonzalez";
let miNombreCompleto = "Xavier Gonzalez";
let tortolito = miNombre + " " + miApellido
if(tortolito === miNombreCompleto){
    console.log ("Nombres iguales")
}