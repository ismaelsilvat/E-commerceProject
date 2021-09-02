
let inputL = document.querySelector('.search-product')
let inputR = document.querySelector('.card-remover-produto')
let inputsL = inputL.querySelectorAll('input')
let inputsR = inputR.querySelectorAll('input')
let inputRR = document.querySelector('.card-remover-produto')
let inputsRR = inputRR.querySelectorAll('input')
let textArea = document.querySelectorAll('textarea')
let liR = inputR.querySelectorAll('li')
let liL = inputL.querySelectorAll('li')
let img = inputL.querySelectorAll('img')
var produtoCadastro = JSON.parse(localStorage.getItem('Produto'))

let photo = null

inputsR[3].addEventListener('change', function () {
    const reader = new FileReader();

    reader.addEventListener('load', () => {

        photo = reader.result


    })

    reader.readAsDataURL(this.files[0]);
})

console.log(photo);

function localizarProdutos() {
    let send = true;
    let send1 = true;

    if (inputsL[0].value == '') {

        liL[0].innerHTML = 'Preencha o campo!'
        inputsL[0].style.border = 'red solid 2px'
        limparValores()
        clear()
        img[1].style = 'display: none;'

        send = false
    } else {
        clean()
    }

    if(send !== true){
        return false
    }

    for (let i = 0; i < produtoCadastro.length; i++) {

        if (produtoCadastro[i].nome == inputsL[0].value || produtoCadastro[i].codigo == inputsL[0].value) {
            
            send1 = false;
        } 

        
    }
    if (send1 == true) {
        liL[0].innerHTML = 'Esse produto não existe!'
        inputsL[0].style.border = 'red solid 2px'
        limparValores()
        clear()
        img[1].style = 'display: none;'
        

        send = false;
    }
    
    if(send !== true){
        return false
    }

    for (let i = 0; i < produtoCadastro.length; i++) {

        if (produtoCadastro[i].nome == inputsL[0].value || produtoCadastro[i].codigo == inputsL[0].value) {


            inputsL[0].value = ''
            inputsL[1].value = produtoCadastro[i].nome
            inputsL[2].value = produtoCadastro[i].codigo
            inputsL[3].value = produtoCadastro[i].preco
            textArea[0].value = produtoCadastro[i].descricao
            inputsR[1].value = produtoCadastro[i].codigo

            img[1].style = 'display: flex;'
            img[1].src = produtoCadastro[i].foto

        }


    }
}

function editarProdutos() {
    let send = true;

    clear()

    for (let i = 0; i < inputsRR.length; i++) {

        if (inputsRR[i].value == '') {

            inputsRR[i].style.border = 'red solid 2px'
            liR[i].innerHTML = 'Preencha todos os campos!'

            send = false;
        }

    }
    for (let i = 0; i < textArea.length; i++) {
        if (textArea[1].value == '') {

            textArea[1].style.border = 'red solid 2px'


            send = false;
        }
    }

    if (send !== true) {
        return false;
    }

    for (let i = 0; i < produtoCadastro.length; i++) {


        if (produtoCadastro[i].nome == inputsL[1].value && produtoCadastro[i].codigo == inputsL[2].value) {


            produtoCadastro[i].nome = inputsR[0].value
            produtoCadastro[i].preco = inputsR[2].value
            produtoCadastro[i].descricao = textArea[1].value
            produtoCadastro[i].foto = photo

            localStorage.setItem('Produto', JSON.stringify(produtoCadastro))

            Swal.fire({
                icon: 'success',
                title: 'Produto Editado!'
            })

            img[1].style = 'display: none;'
            limparValores()


        }

    }





}

function clear() {
    for (let i = 0; i < inputsRR.length; i++) {       //FUNCÃO LIMPAR OS ERROS DOS INPUTS
        liR[i].innerHTML = '';
        inputsRR[i].style = '';



    }

    for (let i = 0; i < textArea.length; i++) {
        textArea[i].style.border = '';

    }

}

function clean() {
    for (let i = 0; i < inputsL.length; i++) {
        inputsL[0].style = '';
        liL[0].innerHTML = '';
    }
}

function limparValores() {
    inputsL[0].value = ''
    inputsL[1].value = ''
    inputsL[2].value = ''
    inputsL[3].value = ''
    textArea[0].value = ''
    textArea[1].value = ''
    inputsR[0].value = ''
    inputsR[1].value = ''
    inputsR[2].value = ''
    inputsR[3].value = ''
}
