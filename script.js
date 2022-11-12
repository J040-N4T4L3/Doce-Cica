
let botao = document.querySelector("#botao");
let seletor = document.querySelector("#seletor");
let valor = seletor.value;

botao.addEventListener("click", function(e) {
    
    e.preventDefault();
    
    let seletor = document.querySelector("#seletor");
    let valor = seletor.value;
    console.log(valor);

    if (valor === "Bolo Massa Branca") {
        let container = document.getElementById('opcao2');
        container.style.display = "none";
        let container1 = document.getElementById('opcao3');
        container1.style.display = "none";
        let container6 = document.getElementById('opcao1');
        container6.style.display = "block";
    }

    if (valor === "Bolo Massa Chocolate") {
        let container2 = document.getElementById('opcao1');
        container2.style.display = "none";
        let container3 = document.getElementById('opcao3');
        container3.style.display = "none";
        let container4 = document.getElementById('opcao2');
        container4.style.display = "block";
        
    }

    if (valor === "Bolo Trufado") {
        let container4 = document.getElementById('opcao1');
        container4.style.display = "none";
        let container5 = document.getElementById('opcao2');
        container5.style.display = "none";
        let container6 = document.getElementById('opcao3');
        container6.style.display = "block";
    }

    if (valor === "Todos") {
        let container6 = document.getElementById('opcao1');
        container6.style.display = "block";
        let container7 = document.getElementById('opcao2');
        container7.style.display = "block";
        let container8 = document.getElementById('opcao3');
        container8.style.display = "block";
    }
})