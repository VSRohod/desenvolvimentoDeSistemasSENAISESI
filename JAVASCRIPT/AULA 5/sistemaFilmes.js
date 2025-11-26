class Filme {
    // chama e organiza o parenteses
    constructor(nome, logo , categoria , desc){
        this.nome = nome
        this.logo = logo
        this.categoria = categoria
        this.desc = desc
    }
}

var todosFilmes = []

todosFilmes.push(new Filme("Piada Mortal","https://www.legitimogeek.com/wp-content/uploads/2016/04/a-piada-mortal.jpg","Investigação, Super Heroi","'A Piada Mortal' é uma aclamada história em quadrinhos de Batman que explora a origem do Coringa e a relação complexa entre ele e o Batman. A trama gira em torno do plano do Coringa de provar que basta um dia ruim para enlouquecer qualquer um, sequestrando e atormentando o Comissário Gordon para levar o Batman à beira da insanidade. A obra é conhecida por sua narrativa sombria, psicologia aprofundada dos personagens e arte icônica de Brian Bolland."))
todosFilmes.push(new Filme("Vingadores", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzsE06hwl2-IjWeT-JAtsreQqilF2rgsNUBA&s","Super Heroi","Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade."))
todosFilmes.push(new Filme("Matrix", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQkC_lpeKTEbxla22AQQd-cPMZ8tqAbi_zA&s","Ficção","O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a desconfiar da realidade. Thomas conhece os misteriosos Morpheus e Trinity e descobre que é vítima de um sistema inteligente e artificial chamado Matrix, que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia."))

function listarFilmes(){
    for(var i = 0; i < todosFilmes.length;i++){
        document.querySelector("#resultados").innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${todosFilmes[i].logo}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${todosFilmes[i].nome}</h5>
                <p class="card-text">${todosFilmes[i].desc}</p>
            </div>
        </div>
    `
    }
}

// formulario funções
document.querySelector("#btnCadastro").addEventListener("click", () => {
    var nome = document.querySelector("#nome").value
    var logo = document.querySelector("#logo").value
    var categoria = document.querySelector("#categoria").value
    var desc = document.querySelector("#desc").value

    todosFilmes.push(new Filme(nome,logo,categoria,desc))

    document.querySelector("#resultados").innerHTML = ""
    listarFilmes()
})