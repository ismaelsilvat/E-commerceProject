const ipt1 = document.querySelectorAll('.midson-l input')
const ipt2 = document.querySelectorAll('.midson-r input')


console.log(ipt2);



let textArea = document.querySelectorAll('textarea')
let li1 = document.querySelectorAll('.li1')
let li2 = document.querySelectorAll('.li2')
const imgtest = document.getElementById('img')
const imgtest2 = document.getElementById('imgimg')
const produtoCadastro = JSON.parse(localStorage.getItem('Produto'))

let photo = null

ipt2[3].addEventListener('change', function () {

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

    if (ipt1[0].value == '') {

        li1[0].innerHTML = 'Preencha o campo!'
        ipt1[0].style.border = 'red solid 2px'
        limparValores()
        clear()

        send = false
    } else {
        clean()
    }

    if(send !== true){
        return false
    }

    for (let i = 0; i < produtoCadastro.length; i++) {

        if (produtoCadastro[i].nome == ipt1[0].value || produtoCadastro[i].codigo == ipt1[0].value) {
            
            send1 = false;
        } 

        
    }
    if (send1 == true) {
        li1[0].innerHTML = 'Esse produto não existe!'
        ipt1[0].style.border = 'red solid 2px'
        limparValores()
        clear()
        

        send = false;
    }
    
    if(send !== true){
        return false
    }

    for (let i = 0; i < produtoCadastro.length; i++) {

        if (produtoCadastro[i].nome == ipt1[0].value || produtoCadastro[i].codigo == ipt1[0].value) {


            ipt1[0].value = ''
            ipt1[1].value = produtoCadastro[i].nome
            ipt1[2].value = produtoCadastro[i].codigo
            ipt1[3].value = produtoCadastro[i].preco
            textArea[0].value = produtoCadastro[i].descricao
            ipt2[1].value = produtoCadastro[i].codigo
            
            imgtest.innerHTML = `<img src="${produtoCadastro[0].imgOF}" alt="">`
            
        }
        
        
    }
}

imgimg.innerHTML = ipt2[3].photo


function editarProdutos() {
    let send = true;

    clear()

    for (let i = 0; i < ipt2.length; i++) {

        if (ipt2[i].value == '') {

            ipt2[i].style.border = 'red solid 2px'
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


        if (produtoCadastro[i].nome == ipt1[1].value && produtoCadastro[i].codigo == ipt1[2].value) {


            produtoCadastro[i].nome = ipt2[0].value
            produtoCadastro[i].codigo = ipt2[1].value
            produtoCadastro[i].preco = ipt2[2].value
            produtoCadastro[i].descricao = textArea[1].value
            produtoCadastro[i].imgOF = photo

            localStorage.setItem('Produto', JSON.stringify(produtoCadastro))

            // Swal.fire({
            //     icon: 'success',
            //     title: 'Produto Editado!'
            // })

            limparValores()


        }

    }

}

function clear() {
    for (let i = 0; i < ipt2.length; i++) {       //FUNCÃO LIMPAR OS ERROS DOS INPUTS
        li2[i].innerHTML = '';
        ipt2[i].style = '';



    }

    for (let i = 0; i < textArea.length; i++) {
        textArea[i].style.border = '';

    }

}

function clean() {
    for (let i = 0; i < ipt1.length; i++) {
        ipt1[0].style = '';
        li1[0].innerHTML = '';
    }
}

function limparValores() {
    ipt1[0].value = ''
    ipt1[1].value = ''
    ipt1[2].value = ''
    ipt1[3].value = ''
    textArea[0].value = ''
    textArea[1].value = ''
    ipt2[0].value = ''
    ipt2[1].value = ''
    ipt2[2].value = ''
    ipt2[3].value = ''
    imgtest.innerHTML = ''
}