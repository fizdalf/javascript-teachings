// calcula la letra de un DNI sabiendo que tenemos que hacer una divisón entera entre el número dado y 23, una vez que tengamos el resto
// debemos obtener la letra que tenga como índice el valor obtenido de la lista de abajo.
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dniNumber = parseInt(process.argv[2]);

 if (process.argv[2].length != 8){
     console.log("That´s not a DNI number, please don´t let any space between each digit")
     }
 else{
    let index = Math.trunc(dniNumber%23);
    console.log("your fulls DNI is as follows "+ dniNumber + letras[index])

 }
