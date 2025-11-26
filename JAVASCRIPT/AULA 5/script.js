// var nomeSerie = "La casa de papel";
// var categoriaSerie = "Ação";
// var descricaoSerie = "Um roubo ao banco"
// var anoSerie = "2017"

// var laCasaDePapel = ["La casa de papel","Ação","Um roubo ao banco","2017"]

class Serie {
    nome;
    logo;
    categoria;
    nTemporadas;
    nEpisodios;
    desc;
}

var laCasaDePapel = new Serie();
laCasaDePapel.nome = "La Casa de Papel"
laCasaDePapel.logo = "https://images.seeklogo.com/logo-png/40/1/la-casa-de-papel-logo-png_seeklogo-406278.png"
laCasaDePapel.categoria = "Ação , Suspense , Drama, Crime"
laCasaDePapel.nTemporadas = 5
laCasaDePapel.nEpisodios = 41
laCasaDePapel.desc = "La Casa de Papel gira em torno de um grupo de oito ladrões, liderados pelo misterioso 'Professor', que invade a Casa da Moeda da Espanha com um plano ambicioso: não roubar dinheiro, mas imprimir 2,4 bilhões de euros em 11 dias. A série combina ação, reviravoltas e drama pessoal enquanto o grupo tenta executar o assalto perfeito, enfrentando a polícia, reféns e conflitos internos. "

document.querySelector("#resultados").innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${laCasaDePapel.logo}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${laCasaDePapel.nome}</h5>
            <p class="card-text">${laCasaDePapel.desc}</p>
        </div>
    </div>
`


var theWitcher = new Serie();

console.log(laCasaDePapel)