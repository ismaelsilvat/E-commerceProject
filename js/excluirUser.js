let inputs = document.querySelectorAll('input')
let li = document.querySelectorAll('li')
var pessoasCadastro = JSON.parse(localStorage.getItem('Pessoas'))



function localizarPessoas() {

    let send = true
    let send1 =  true


    if (inputs[0].value == '') {

        li[0].innerHTML = 'Preencha o campo!'
        inputs[0].style.border = 'red solid 2px'
        inputs[1].value = ''
        inputs[2].value = ''

        send = false
    } else {
        clear()
    }

    if (send !== true) {
        return false;
    }

    for (let i = 0; i < pessoasCadastro.length; i++) {

        if (pessoasCadastro[i].apelido == inputs[0].value || pessoasCadastro[i].email == inputs[0].value) {
            
            send1 = false;
        } 

        
    }
    if (send1 == true) {
        li[0].innerHTML = 'Esse usuário não existe!'
        inputs[0].style.border = 'red solid 2px'
        inputs[1].value = ''
        inputs[2].value = ''
        
        

        send = false;
    } 
   
    if (send !== true) {
        return false;
    }



    for (let i = 0; i < pessoasCadastro.length; i++) {

        if (pessoasCadastro[i].apelido == inputs[0].value || pessoasCadastro[i].email == inputs[0].value) {


            inputs[0].value = ''
            inputs[1].value = pessoasCadastro[i].apelido
            inputs[2].value = pessoasCadastro[i].email

        }
    }
}

let indice = null

function removerPessoas() {

    for (let i = 0; i < pessoasCadastro.length; i++) {
        if (pessoasCadastro[i].apelido == inputs[1].value && pessoasCadastro[i].email == inputs[2].value) {

            indice = i;
            pessoasCadastro.splice(indice, 1);
            localStorage.setItem('Pessoas', JSON.stringify(pessoasCadastro))

            inputs[1].value = ''
            inputs[2].value = ''

            Swal.fire ({
                icon: 'success',
                title: 'Conta Removida!'
            })

        }
    }
}

function clear() {

    for (let i = 0; i < inputs.length; i++) {       //FUNCÃO LIMPAR OS ERROS DOS INPUTS
        li[0].innerHTML = '';
        inputs[0].style = '';



    }
}
