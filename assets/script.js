// variaveis globais

let moveSelecionado = '';
let moveset = [];
const movesDisponiveis = ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun', 'Bite', 'Withdraw', 'Skull Bash', 'Hydro Pump'];

// componentes

    const btnGoBulbapedia = document.getElementById('goBulbapedia')
    const btnAdicionar = document.getElementById('addMove')
    const selectMove = document.getElementById('selectMove')
    const ul = document.getElementById('moves_list')
    const movesetText = document.getElementById('movesetText')

// add eventos

    btnGoBulbapedia.addEventListener('click', goToBulbapedia) 
    btnAdicionar.addEventListener('click', adicionaGolpe)

// métodos

function goToBulbapedia(){
    open("https://bulbapedia.bulbagarden.net/wiki/Blastoise_(Pok%C3%A9mon)")
}

function deletaGolpe(event){
    const id = event.path[1].id
    const index = moveset.indexOf(id)

    moveset.splice(index, 1)
    
    document.getElementById(id).remove()

    if(moveset.length === 0) movesetText.style.display = 'block'
     
}

function adicionaGolpe(){
    moveSelecionado = selectMove.value

    if(moveset.length === 4 || moveset.includes(moveSelecionado)) return;

        const li = document.createElement('li')
        li.id = moveSelecionado
        li.innerHTML = `${moveSelecionado}<button type="button" id="delete${moveSelecionado}">deletar</button>`
        ul.appendChild(li)
        moveset.push(moveSelecionado)

        movesetText.style.display = 'none'

        const btnDeletar = document.getElementById(`delete${moveSelecionado}`)
        btnDeletar.addEventListener('click', deletaGolpe)
}

function carregaGolpes(){
    for(let i = 0; i < movesDisponiveis.length; i++){
        const option = document.createElement('option')
        option.id = `${movesDisponiveis[i]}`
        option.innerText = `${movesDisponiveis[i]}`
        selectMove.appendChild(option)
    }
}

carregaGolpes()