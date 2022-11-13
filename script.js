
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


var button1 = document.getElementById("action-btn1");

button1.addEventListener("click", function(){

    var container1 = document.getElementById("container1");

    if(container1.style.display === "none"){
        container1.style.display = "block"
    
    }
    else{
        container1.style.display = "none"
    }
})

var button2 = document.getElementById("action-btn2");

button2.addEventListener("click", function(){

    var container2 = document.getElementById("container2");

    if(container2.style.display === "none"){
        container2.style.display = "block"
    
    }
    else{
        container2.style.display = "none"
    }
})

var button3 = document.getElementById("action-btn3");

button3.addEventListener("click", function(){

    var container3 = document.getElementById("container3");

    if(container3.style.display === "none"){
        container3.style.display = "block"
    
    }
    else{
        container3.style.display = "none"
    }
})

var button4 = document.getElementById("action-btn4");

button4.addEventListener("click", function(){

    var container4 = document.getElementById("container4");

    if(container4.style.display === "none"){
        container4.style.display = "block"
    
    }
    else{
        container4.style.display = "none"
    }
})


var button5 = document.getElementById("action-btn5");

button5.addEventListener("click", function(){

    var container5 = document.getElementById("container5");

    if(container5.style.display === "none"){
        container5.style.display = "block"
    
    }
    else{
        container5.style.display = "none"
    }
})

var button6 = document.getElementById("action-btn6");

button6.addEventListener("click", function(){

    var container6 = document.getElementById("container6");

    if(container6.style.display === "none"){
        container6.style.display = "block"
    
    }
    else{
        container6.style.display = "none"
    }
})

var button7 = document.getElementById("action-btn7");

button7.addEventListener("click", function(){

    var container7 = document.getElementById("container7");

    if(container7.style.display === "none"){
        container7.style.display = "block"
    
    }
    else{
        container7.style.display = "none"
    }
})

var button8 = document.getElementById("action-btn8");

button8.addEventListener("click", function(){

    var container8 = document.getElementById("container8");

    if(container8.style.display === "none"){
        container8.style.display = "block"
    
    }
    else{
        container8.style.display = "none"
    }
})


var button9 = document.getElementById("action-btn9");

button9.addEventListener("click", function(){

    var container9 = document.getElementById("container9");

    if(container9.style.display === "none"){
        container9.style.display = "block"
    
    }
    else{
        container9.style.display = "none"
    }
})

var button10 = document.getElementById("action-btn10");

button10.addEventListener("click", function(){

    var container10 = document.getElementById("container10");

    if(container10.style.display === "none"){
        container10.style.display = "block"
    
    }
    else{
        container10.style.display = "none"
    }
})

var button11 = document.getElementById("action-btn11");

button11.addEventListener("click", function(){

    var container11 = document.getElementById("container11");

    if(container11.style.display === "none"){
        container11.style.display = "block"
    
    }
    else{
        container11.style.display = "none"
    }
})

var button12 = document.getElementById("action-btn12");

button12.addEventListener("click", function(){

    var container12 = document.getElementById("container12");

    if(container12.style.display === "none"){
        container12.style.display = "block"
    
    }
    else{
        container12.style.display = "none"
    }
})
