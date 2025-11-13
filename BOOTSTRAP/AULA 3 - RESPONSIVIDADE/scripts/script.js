function trocarTema(){
    var temaAtual = document.querySelector('body').getAttribute("data-bs-theme")
    
    if(temaAtual == "light"){
        document.querySelector('body').setAttribute("data-bs-theme","dark")
         document.querySelector('#trocaTemaBtn').innerHTML = `
         <img src="images/sol.svg" alt="">
        `
    }else{
        document.querySelector('body').setAttribute("data-bs-theme","light")
        document.querySelector('#trocaTemaBtn').innerHTML = `
         <img src="images/lua.svg" alt="">
        `
    }
}