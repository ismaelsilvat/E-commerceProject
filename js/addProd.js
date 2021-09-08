const inputs = document.querySelectorAll('.container-inputs input')
const file = document.querySelectorAll('.mid-file input');
const textArea = document.querySelectorAll('textarea');
const li = document.querySelectorAll('li');
const teste = document.querySelector('.container-pos-add')
let testeIPT = document.querySelectorAll('.container-pos-add input')
const container = document.querySelector('.container-inputs')
let img = document.getElementById('imgimg')
let send = true;
let photo = null;

console.log(testeIPT);


file[0].addEventListener('change', function () {

    const reader = new FileReader();

    reader.addEventListener('load', () => {
        photo = reader.result
    })

    reader.readAsDataURL(this.files[0]);
})

function addProd() {
    
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
                window.location.reload()
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
        for (let i = 0; i < inputs.length; i++) {       //FUNCÃO LIMPAR OS ERROS DOS inputss
            li[i].innerHTML = '';
            inputs[i].style = '';



        }

        for (let i = 0; i < textArea.length; i++) {
            textArea[i].style.border = '';

        }

    }

    function clean() {
        for (let i = 0; i < inputs.length; i++) {     //LIMPA OS inputs E TEXTAREA DEPOIS DO CADASTRO SER EFETUADO
            inputs[i].value = '';
        }

        for (let i = 0; i < textArea.length; i++) {
            textArea[i].value = '';
        }

        file[0].value = '';
    }



    let produto = {
        nome: inputs[0].value,
        codigo: inputs[1].value,
        preco: inputs[2].value,
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

    container.classList.add('mudar')

    teste.classList.remove('mudar')

    let prodtest = JSON.parse(localStorage.getItem('Produto'))

    let prodprod = prodtest[prodtest.length -1]
    console.log(prodprod);

    testeIPT[0].value = prodprod.nome
    testeIPT[1].value = prodprod.codigo
    testeIPT[2].value = prodprod.preco
    
    const imgg = `<img src="${prodprod.imgOF}" alt="">`

    img.innerHTML = imgg

    
};