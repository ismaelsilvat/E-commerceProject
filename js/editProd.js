let input1 = document.querySelectorAll('.oi')
let input2 = document.querySelectorAll('.oi2')

console.log(input2);



let textArea = document.querySelectorAll('textarea')
let li1 = document.querySelectorAll('.li1')
let li2 = document.querySelectorAll('.li2')
let img = document.querySelectorAll('.img')
const produtoCadastro = JSON.parse(localStorage.getItem('Produto'))

let photo = null

input2[3].addEventListener('change', function () {

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

    if (input1[0].value == '') {

        li1[0].innerHTML = 'Preencha o campo!'
        input1[0].style.border = 'red solid 2px'
        limparValores()
        clear()
        img[0].style = 'display: none;'

        send = false
    } else {
        clean()
    }

    if(send !== true){
        return false
    }

    for (let i = 0; i < produtoCadastro.length; i++) {

        if (produtoCadastro[i].nome == input1[0].value || produtoCadastro[i].codigo == input1[0].value) {
            
            send1 = false;
        } 

        
    }
    if (send1 == true) {
        li1[0].innerHTML = 'Esse produto não existe!'
        input1[0].style.border = 'red solid 2px'
        limparValores()
        clear()
        img[0].style = 'display: none;'
        

        send = false;
    }
    
    if(send !== true){
        return false
    }

    for (let i = 0; i < produtoCadastro.length; i++) {

        if (produtoCadastro[i].nome == input1[0].value || produtoCadastro[i].codigo == input1[0].value) {


            input1[0].value = ''
            input1[1].value = produtoCadastro[i].nome
            input1[2].value = produtoCadastro[i].codigo
            input1[3].value = produtoCadastro[i].preco
            textArea[0].value = produtoCadastro[i].descricao
            input2[1].value = produtoCadastro[i].codigo

            img[0].style = 'display: flex;'
            img[0].src = produtoCadastro[i].imgOF

        }


    }
}

function editarProdutos() {
    let send = true;

    clear()

    for (let i = 0; i < input2.length; i++) {

        if (input2[i].value == '') {

            input2[i].style.border = 'red solid 2px'
            li2[i].innerHTML = 'Preencha todos os campos!'

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


        if (produtoCadastro[i].nome == input1[1].value && produtoCadastro[i].codigo == input1[2].value) {


            produtoCadastro[i].nome = input2[0].value
            produtoCadastro[i].preco = input2[2].value
            produtoCadastro[i].descricao = textArea[1].value
            produtoCadastro[i].foto = photo

            localStorage.setItem('Produto', JSON.stringify(produtoCadastro))

            // Swal.fire({
            //     icon: 'success',
            //     title: 'Produto Editado!'
            // })

            img[0].style = 'display: none;'
            limparValores()


        }

    }

}

function clear() {
    for (let i = 0; i < input2.length; i++) {       //FUNCÃO LIMPAR OS ERROS DOS INPUTS
        li2[i].innerHTML = '';
        input2[i].style = '';



    }

    for (let i = 0; i < textArea.length; i++) {
        textArea[i].style.border = '';

    }

}

function clean() {
    for (let i = 0; i < input1.length; i++) {
        input1[0].style = '';
        li1[0].innerHTML = '';
    }
}

function limparValores() {
    input1[0].value = ''
    input1[1].value = ''
    input1[2].value = ''
    input1[3].value = ''
    textArea[0].value = ''
    textArea[1].value = ''
    input2[0].value = ''
    input2[1].value = ''
    input2[2].value = ''
    input2[3].value = ''
}