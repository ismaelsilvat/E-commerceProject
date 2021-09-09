// TROCA DE IMAGENS PRINCIPAL
function img1 (){
    document.getElementById("imagen-principal").src= produto.imagens[0]
}
function img2 (){
    document.getElementById("imagen-principal").src= produto.imagens[1]
}
function img3 (){
    document.getElementById("imagen-principal").src= produto.imagens[2];
}

$('.seletor-de-tamanho .tamanho').click(function(){
    $(this).css({"border": "3.5px solid #fff","color": "#222;","background-color": "#fff;"})
})

$('.escolha-de-cores input').click(function(){
    $(this).css({"border": "3.5px solid #8A48FA"})
})

function prod(){

    contador = JSON.parse(localStorage.getItem('contador')) + 1
    
    let dados = JSON.parse(localStorage.getItem("Users"))
    
    let position = JSON.parse(localStorage.getItem('infoLog'))
    
    
    if(position === null){
        alert('Você tem que estar logado para onseguir adicionar um produto no carrinho')
        window.open('loginECadastro(ModoE).html', '_self')
    }
    else{

        let num = position.position;
        
        if(dados[num].carrinho.length > 0){
          alert('Você já adicionou este produto ao carrinho')
        }
        else{

            console.log(num);
            
            let linhaProd = {
                estrutura: `<div class="row align-items-center" style="height: 200px; background-color: rgba(255, 255, 255, 0.048);">
                <img class="w-25 h-75" src="${produto.imagens[0]}" alt="">
                <h2 class="w-25 text-center text-white fs-4 fw-normal">${produto.nome}</h2>
                <div class="col w-25 h-100 d-flex justify-content-center align-items-center">
                    <div class="select-cont${contador} select-cont" style="height: 15%">
                    <a href="javascript:min(${contador});" class="a-fle"><i class="flecha far fa-minus-square"></i></a>
                    <input id="field${contador}" class="sel-txt" type="text" value = "1" onkeypress="validar(this); return numerico(event);"/>
                    <a href="javascript:max(${contador});" class="a-fle"><i class="flecha far fa-plus-square"></i></a>
                    </div>
                    </div>
                    <span class="w-25 text-center text-white" id="valor-total-prod${contador}"></span>
                    </div>`,
                    quantidade: 1,
                    id: contador,
                    valor: produto.valor,
            }
                    
            dados[num].carrinho.push(linhaProd) 
        console.log(dados);
        localStorage.setItem('contador', JSON.stringify(contador))
        localStorage.setItem("Users", JSON.stringify(dados))
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            background: '#181818',
            title: 'Produto adicionado ao carrinho com suceso',
            showConfirmButton: false,
            timer: 1500
          })
        // window.location.reload()
        }
        

    }
}


console.log(window.location);

let url = new URL(window.location.href)
let params = new URLSearchParams(url.search);

console.log("url" +url);

let produtoEmJsonCodificado = params.get('produto')

const produtoEmJson = decodeURIComponent(unescape(window.atob(produtoEmJsonCodificado)));

console.log("PROFUTO EM JSON decodificado", produtoEmJson);

const produto = JSON.parse(produtoEmJson);

const descricao = unescape(decodeURIComponent(produto.descricao));
console.log("a AAAAA :  " + descricao);

console.log(produto);

console.log("PROFUTO transformado para objeto", produto);

console.log("Produto: "+produto.nome+ " Valor do produto:"+ produto.valor)

document.getElementById("nome-do-produto").innerHTML = produto.nome;
document.getElementById("valor").innerHTML = produto.valor;
document.getElementById("imagen-principal").src = produto.imagens[0];
document.querySelector(".img01").src = produto.imagens[0];
document.querySelector(".img02").src = produto.imagens[1];
document.querySelector(".img03").src = produto.imagens[2];
document.getElementById("descri").innerHTML = produto.descricao