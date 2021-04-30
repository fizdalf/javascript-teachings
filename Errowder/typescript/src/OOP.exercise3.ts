//Create a class

class powerGeneratorPlant {
    generatePowerWithMaterials = true
    generateUnlimitedEnergy = true
}


class oilPlant extends powerGeneratorPlant {
    description = "Energía producida mediante la quema de petróleo, el cual se encuentra en bolsas de aire bajo la corteza terrestre"
    cons = "Desgasta la capa de ozono, posibilidad de crear chapapote, peligrosidad de extracción y transporte"
    generateUnlimitedEnergy = false
    energyCreateByHour = 500000
}


class renewableEnergyGenerationPlant extends powerGeneratorPlant {
    generatePowerWithMaterials = false
    description = "Genera energía de forma que no daña el medioambiente"
}

class nuclearPowerStation extends renewableEnergyGenerationPlant {
    method = "Usar vapor de agua para fusionar átomos de uranio los cuales desprenden energía"
    cons = "Crea un residuo radiactivo el cual es muy difícil de destruir pero muy fácil de almacenar"
    energyCreateByHour = 4000
}

class geothermalStation extends renewableEnergyGenerationPlant {
    method = "Usa el calor de los volcanes para generar energía"
    cons = "necesitas un volcán..."
    energyCreateByHour = 4000
}

class windPowerGenerator extends renewableEnergyGenerationPlant {
    method = "Usa el poder del viento para mover unas aspas, las cuales giran engranages que producen energía"
    cons = "Necesitas altas ráfagas de viento constantemente, las aspas matan animales voladores, estropean las vistas del paisaje"
    energyCreateByHour = 4000
}

class sergioPoweredGenerator extends renewableEnergyGenerationPlant {
    method = "Usa los pedos de sergio para generar energía, es renovable porque el tambien los huele"
}
const generatorPlant = new oilPlant
console.log(generatorPlant)