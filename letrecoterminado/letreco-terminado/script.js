const container = document.getElementById("container")
const numeroLinhas = [1,2,3,4,5,6,]
const numeroloColunas = [1,2,3,4,5]
const palavraDoDia = "sorte"

numeroLinhas.forEach(item => {
    const box = document.createElement("div"); //criando a div box
    box.className = "box"; //definindo a classe da div pra box
    box.id = item;
    numeroloColunas.forEach(col => {
        const inputColuna = document.createElement("input") //criando input
        inputColuna.id = `linha${item}coluna${col}`
        inputColuna.maxLength = 1
        inputColuna.toUpperCase
        box.appendChild(inputColuna)
    })
    container.appendChild(box)
})

document.getElementsByClassName("");

function valid(linha) {
    let childs = document.getElementById(linha).childNodes;
    let arrayPalavradoDia = palavraDoDia.split('');
    let vencer = [];
    //esse laço verifica e defini a cor dos quadrados
    childs.forEach((input, index) => {
        let letra = input.value.toLowerCase()
        let posicao = arrayPalavradoDia.indexOf(letra)
        
        if(posicao !== -1 && index === posicao ){
            input.className = "verde";
            vencer.push('')
        }
        else if (posicao !== -1 && index !== posicao)
            input.className = "amarelo";
        else input.className = "cinza"
    });

    if(vencer.length === 5){
        Swal.fire(
            'Parabéns!',
            'Você ganhou',
        
          )
        // alert('Você Venceu')
        numeroloColunas.disabled = true;
        numeroLinh9as.disabled = true;
        proximaLinha.disabled = true;
        focus.disabled = true;
    }
        
}

container.addEventListener("keyup", (a) => {
    const elementoAtual = document.getElementById(a.target.id);
    const elementoAnterior = elementoAtual.previousElementSibling;
    const proximoElemento = elementoAtual.nextElementSibling;
    const proximaLinha = document.getElementById(a.path[1].id).nextElementSibling.firstChild;
    const botoesProibidos = ["CapsLock", "Tab", ".", ",", ";","Backspace","Spacebar"];
    if(botoesProibidos.indexOf(a.key) === -1){
        if(a.key === "Backspace")
            elementoAnterior.focus()
    
        if(elementoAtual.maxLength === elementoAtual.value.length && proximoElemento){
            proximoElemento.focus();
        } else{
            valid(a.path[1].id)
            if(proximaLinha)
                proximaLinha.focus();
        }
    }

})
