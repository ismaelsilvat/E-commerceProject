    
const input = document.querySelector('.allIts')
const ips = input.querySelectorAll('input')
let img = document.querySelector('.mid-file');
let imgOF = img.querySelectorAll('input')
const textArea = document.querySelectorAll('textarea');
const li = document.querySelectorAll('li');
let send = true;
let photo = null;

const teste = document.getElementById('imgteste')

imgOF[0].addEventListener('change', function () {

    const reader = new FileReader();

    reader.addEventListener('load', () => {

        photo = reader.result
    })

    reader.readAsDataURL(this.files[0]);

})

function addProd() {
    
    clear();

    for (let i = 0; i < input.length; i++) {

        if (ips[i].value == '') {

            ips[i].style.border = 'red solid 2px'
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
            if (produtoCadastro[i].nome == ips[0].value) {

                li[0].innerHTML = 'Esse produto ja foi cadastrado!'
                ips[0].style.border = 'red solid 2px'
                send = false;
            }

            if (produtoCadastro[i].codigo == ips[1].value) {

                li[1].innerHTML = 'Esse código ja foi cadastrado!'
                ips[1].style.border = 'red solid 2px'
                send = false;
            }
        }
    }

    if (send !== true) {
        return false
    }

    //FUNCÕES
    function clear() {
        for (let i = 0; i < ips.length; i++) {       //FUNCÃO LIMPAR OS ERROS DOS inputs
            li[i].innerHTML = '';
            ips[i].style = '';



        }

        for (let i = 0; i < textArea.length; i++) {
            textArea[i].style.border = '';

        }

    }

    function clean() {
        for (let i = 0; i < ips.length; i++) {     //LIMPA OS ips E TEXTAREA DEPOIS DO CADASTRO SER EFETUADO
            ips[i].value = '';
        }

        for (let i = 0; i < textArea.length; i++) {
            textArea[i].value = '';
        }

        imgOF[0].value = '';
    }



    let produto = {
        nome: ips[0].value,
        codigo: ips[1].value,
        preco: ips[2].value,
        descricao: textArea[0].value,
        imgOF: photo
    }


    let produtos = []

    if (produtoCadastro != null) {


        produtoCadastro.push(produto)
        localStorage.setItem('Produto', JSON.stringify(produtoCadastro))

        // Swal.fire({
        //     icon: 'success',
        //     title: 'Produto Adicionado!'
        // })
        clean()


    } else if (produtoCadastro == null) {


        produtos.push(produto)
        localStorage.setItem('Produto', JSON.stringify(produtos))

        // Swal.fire({
        //     icon: 'success',
        //     title: 'Produto Adicionado!'
        // })
        clean()

    }

    let prodtest = JSON.parse(localStorage.getItem('Produto'))

    let imggg = `<img src="${prodtest[0].imgOF}" alt="">`

    teste.innerHTML = imggg
    
};
