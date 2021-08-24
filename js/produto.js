
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

console.log(window.location);


let url = new URL(window.location.href)
let params = new URLSearchParams(url.search);


let produtoEmJsonCodificado = params.get('produto')

const produtoEmJson = decodeURIComponent(escape(window.atob(produtoEmJsonCodificado)));

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
document.getElementById("img01").src = produto.imagens[0];
document.getElementById("img02").src = produto.imagens[1];
document.getElementById("img03").src = produto.imagens[2];
document.getElementById("descri").innerHTML = produto.descricao

// FINAL TROCA DE IMAGENS PRINCIPAL

// TROCA DE IMAGENS CORES