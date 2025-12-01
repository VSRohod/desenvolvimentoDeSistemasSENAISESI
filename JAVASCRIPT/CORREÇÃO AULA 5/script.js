class Carro {
    constructor(nome, tPneu , motor , kmPer, marca){
    this.nome = nome ;
    this.tPneu = tPneu ; 
    this.motor = motor ; 
    this.kmPer = kmPer; 
    this.marca = marca ;
    }
}

var carros = [];

carros.push(new Carro("Toyota Supra","Esportivo","2JZ",0,"Toyota"))
carros.push(new Carro("Carro 2","Esportivo","2JZ",0,"Toyota"))
carros.push(new Carro("Carro 3","Esportivo","2JZ",0,"Toyota"))
console.log(carros)

for(var i = 0; i < carros.length;i++){
    document.getElementById("resultados").innerHTML += `
    <div>
    <h1>${carros[i].nome}</h1>
    <p>${carros[i].marca}</p>
    </div>
    `
}

