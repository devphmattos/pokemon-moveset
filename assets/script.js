console.log('Carrega o javascript aqui');

// variaveis globais

let moveSelecionado = '';
let moveset = [];
const movesDisponiveis = ["Tackle", "Tail Whip", "Bubble", "Water Gun", "Bite", "Withdraw", "Skull Bash", "Hydro Pump"];

// componentes
const select = document.getElementById("selectMove")
const btnAdd = document.getElementById("addMove")

// add eventos

btnAdd.addEventListener("click", adicionaGolpe)

// métodos

function carregaGolpes(){
    let html = ""
    movesDisponiveis.forEach((move) => {
        html += `<option value="${move}">${move}</option>`
    })
    select.innerHTML = html
}

function goToBulbapedia() {
    open("https://bulbapedia.bulbagarden.net/wiki/Blastoise_(Pok%C3%A9mon)")
}

function deletaGolpe() {
    // btnDelete.parentNode.remove()
}

function adicionaGolpe() {
    moveSelecionado = select.value
    let li = document.createElement("li")
    li.id = moveSelecionado
    li.innerHTML = `${moveSelecionado}<button type="button" class="botao" id="delete${moveSelecionado}">Deletar</button>`
    let ul = document.querySelector("#moves_list")
    ul.appendChild(li)

    btnDelete = document.querySelectorAll(".botao")
    btnDelete.forEach(function (a) {
        a.addEventListener('click', function(){
            a.parentNode.remove()
        })
    })
    
    let movesetText = document.getElementById('movesetText')
    movesetText.style.display = 'none'

}

// executa métodos

carregaGolpes()