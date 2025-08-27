function exemplo1() {
    var resposta = true

    while (resposta) {
        resposta = confirm("Deseja repetir o código?")
        if (resposta == false) {
            break
        }
        alert("REPETI O CÓDIGO")
    }
}

function exemplo2(){
    var contador = 0
    while (contador <= 10){
        alert(`repeti ${contador} vezes`)
        contador++
    }
}

