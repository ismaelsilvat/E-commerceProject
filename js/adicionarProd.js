    
let input = document.querySelector('.informações')
let inputs = input.querySelectorAll('input');
let img = document.querySelector('.product-image');
let foto = img.querySelectorAll('input');
let textArea = document.querySelectorAll('textarea');
let li = document.querySelectorAll('li');
let send = true;
let photo = null

foto[0].addEventListener('change', function () {
    const reader = new FileReader();

    reader.addEventListener('load', () => {

        photo = reader.result


    })

    reader.readAsDataURL(this.files[0]);
})

function AdicionarProduto() {


    clear();


    for (let i = 0; i < inputs.length; i++) {

        if (inputs[i].value == '') {

            inputs[i].style.border = 'red solid 2px'
            li[i].innerHTML = 'Preencha todos os campos!'

            send = false;
        }

    }
    for (let i = 0; i < textArea.length; i++) {
        if (textArea[i].value == '') {

            textArea[i].style.border = 'red solid 2px'


            send = false;
        }
    }


    var produtoCadastro = JSON.parse(localStorage.getItem('Produto'))

    if (produtoCadastro !== null) {

        for (let i = 0; i < produtoCadastro.length; i++) {
            if (produtoCadastro[i].nome == inputs[0].value) {

                li[0].innerHTML = 'Esse produto ja foi cadastrado!'
                inputs[0].style.border = 'red solid 2px'
                send = false;
            }

            if (produtoCadastro[i].codigo == inputs[1].value) {

                li[1].innerHTML = 'Esse código ja foi cadastrado!'
                inputs[1].style.border = 'red solid 2px'
                send = false;
            }
        }
    }

    if (send !== true) {
        return false
    }

    //FUNCÕES
    function clear() {
        for (let i = 0; i < inputs.length; i++) {       //FUNCÃO LIMPAR OS ERROS DOS INPUTS
            li[i].innerHTML = '';
            inputs[i].style = '';



        }

        for (let i = 0; i < textArea.length; i++) {
            textArea[i].style.border = '';

        }

    }

    function clean() {
        for (let i = 0; i < inputs.length; i++) {     //LIMPA OS INPUTS E TEXTAREA DEPOIS DO CADASTRO SER EFETUADO
            inputs[i].value = '';
        }

        for (let i = 0; i < textArea.length; i++) {
            textArea[i].value = '';
        }

        foto[0].value = '';
    }



    let produto = {
        nome: inputs[0].value,
        codigo: inputs[1].value,
        preco: inputs[2].value,
        descricao: textArea[0].value,
        foto: photo
    }


    let produtos = []

    if (produtoCadastro != null) {


        produtoCadastro.push(produto)
        localStorage.setItem('Produto', JSON.stringify(produtoCadastro))

        Swal.fire({
            icon: 'success',
            title: 'Produto Adicionado!'
        })
        clean()


    } else if (produtoCadastro == null) {


        produtos.push(produto)
        localStorage.setItem('Produto', JSON.stringify(produtos))

        Swal.fire({
            icon: 'success',
            title: 'Produto Adicionado!'
        })
        clean()

    }
};
