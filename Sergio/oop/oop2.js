class livingBeings {
    reproduction(){

    }
}

class mammal extends livingBeings{
    reproduction() {
        console.log("mete saca y sale un yo pero amorfo y pequeño")
    }
}

class birds extends livingBeings{
    reproduction() {
        console.log("!! a mi mujer le salen huevos del culo AYUDA")
    }
}

class primate extends livingBeings{
    peelBananas(answer){
        console.log("los platanos de canarias son los mejores, quieres que te enseñe a pelarlos?")
        if(!answer){
            console.log("me la pelas guarro")
        }
    }
    reproduction() {
        console.log("unga unga unga soy un mono y hago lo mismo que un mamifero")
    }
}

class human extends mammal(){
    playVideoGames(){
        console.log("siiii!! esto es mejor que pelar platanos")
    }
    reproduction() {
        console.log("hola aunque parezco un primate soy un mamifero y tambien hago el metesaca (bueno yo no :c nadie me quiere)")
    }
}