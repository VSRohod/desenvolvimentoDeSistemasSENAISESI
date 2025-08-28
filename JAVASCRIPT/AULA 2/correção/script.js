// 1) Escreva um algoritmo que calcule e imprima a tabuada do 8 (1 a 10).
function ex1(){
    // var contador = 1
    // while (contador <= 10){
    //     contador++
    // }
    let tabuada = Number(prompt("Qual tabuada?"));

    for(i = 1;i <= 10;i++){
        alert(`${tabuada} x ${i} = ${i * tabuada}`);
    }
}

// 2) Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100 
function ex2(){
    for(i = 100;i <= 110;i++){
        alert(i)
    }
}

// 3) Escreva um algoritmo para ler 10 números e ao final da leitura escrever a soma total dos 10 números lidos.
function ex3(){
    var soma = 0;
    for(i = 1;i <= 10;i++){
        let numero = Number(prompt(`Digite o seu ${i}° numero`));
        soma += numero
    }
    alert(`A soma dos numeros é de ${soma}`)
}