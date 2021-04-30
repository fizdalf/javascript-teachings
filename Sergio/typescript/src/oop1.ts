class electronicDevices {

    playsSound(){
        console.log("depende del aparato electrónico tendrá un sonido u otro")
    }
}

class radio extends electronicDevices {
    playsSound(){
        console.log("los cuarentaaaa")
    }
}

class phone extends electronicDevices {
    playsSound(){
        console.log("Laura está a 5 km de ti")
    }
    callOfYourMom(answer:string){
        if(!answer){
            throw Error("como le cuelgas a tu madre?? te la vas a cargar !!")
        }else{
            console.log("Quien narices es laura y porque vino a verte?")
        }
    }
}

class computer extends  electronicDevices {
    playsSound(){
        console.log("!!PIM PIM PIM, SE HA DETECTADO UNA AMENAZA")
    }
    editText(edit: string){
        const savedText = "texto por defecto"
        return savedText + edit
    }
}

class gamerComputer extends computer {
    playsSound(){
        console.log("*sondios de disparos en gta*")
    }

    playGames(){
        console.log("primero estuda y despues juega cerdo!!")
    }

}