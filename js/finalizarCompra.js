var containerrr = document.querySelector('.container-r');
var select = containerrr.querySelector('select');
var containerLmid = document.querySelector('.container-l-mid');
var containerLtop = document.querySelector('.container-l-top');

var preco = []
var precoStorage = JSON.parse(localStorage.getItem('acumulador'))

for(let i = 0; i < 2; i++){
    var precoo = document.getElementById('preco' + (i + 1))
    preco.push(precoo)
    preco[i].innerHTML = 'R$ ' + precoStorage
}




function validacao() {

    var inputs = containerLmid.querySelectorAll('input');
    var li = containerLmid.querySelectorAll('li');

    let send = true;

    clearErrors(inputs);

    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];

        if (input.value == '') {
            input.style.border = 'red solid 2px'
            send = false;
        }
    }

    


    if (send !== true) {
        return false
    }
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        background: '#181818',
        title: 'Compra realizada com sucesso.',
        showConfirmButton: false,
        footer: '<a href="index.html">Voltar para a principal</a>'
      })


};

select.addEventListener('change', formaPagamento);

function formaPagamento() {

    let opcao = select.value;

    if (opcao == 1) {

        containerLtop.innerHTML = `<div class="container-l-top">
        <label for="">Dados do comprador</label>
    </div>`

        containerLmid.innerHTML = `
        <div class="top-l">
        <div class="input-grande">
            <label for="">Nome completo</label>
            <input type="text">
            <li></li>
            
        </div>
        <div class="inputs-pequeno">
            <div class="input-pequeno">
                <label for="">Data de Nascimento</label>
                <input placeholder="DD/MM/AAAA" type="text" id="inputData">
                <li></li>
            </div>

            <div class="input-pequeno input1-pequeno">
                <label for="">CPF</label>
                <input placeholder="Insira seu CPF" type="text" id="cpf2">
                <li></li>
            </div>


        </div>

        <div class="input-grande">
            <label for="">E-mail</label>
            <input type="text">
            <li></li>
        </div>

        <div class="inputs-pequeno">
            <div class="input-pequeno">
                <label for="">Rua e nº</label>
                <input type="text">
                <li></li>
            </div>

            <div class="input-pequeno input1-pequeno">
                <label for="">Complemento</label>
                <input type="text">
                <li></li>
            </div>


        </div>

        <div class="inputs-pequeno">
            <div class="input-pequeno">
                <label for="">Bairro</label>
                <input type="text">
                <li></li>
            </div>

            <div class="input-pequeno input1-pequeno">
                <label for="">Cidade</label>
                <input type="text">
                <li></li>
            </div>


        </div>

    </div>

    <div class="bot-l">
        <img src="./img/pgto.png" alt="" id="img-cartao">
    </div>`

    } else if (opcao == 0) {

        containerLtop.innerHTML = `<div class="container-l-top">
        <label for="">Dados do titular do cartão</label>
    </div>`

        containerLmid.innerHTML = ` <div class="top-l">
         <div class="input-grande">
             <label for="">Número do cartão</label>
             <input type="text">
             <li></li>
         </div>
         <div class="inputs-pequeno">
             <div class="input-pequeno">
                 <label for="">Validade</label>
                 <input placeholder="MM/AA" type="text" id="inputData">
                 <li></li>
             </div>

             <div class="input-pequeno input1-pequeno">
                 <label for="">Cód. Segurança</label>
                 <input type="text" maxlength="3">
                 <li></li>
             </div>


         </div>

         <div class="input-grande">
             <label for="">Nome completo do titular</label>
             <input type="text">
             <li></li>
         </div>
         <div class="inputs-pequeno">
             <div class="input-pequeno">
                 <label for="">CPF</label>
                 <input placeholder="Insira seu CPF" type="text" id="cpf1">
                 <li></li>
             </div>
         </div>
     </div>

     <div class="bot-l">
        <img src="./img/cartao.png" alt="" id="img-cartao">
     </div>`

    }
};

clearErrors = (inputs, li) => {                         // function pra limpar os erros de digitação nos inputs
    inputs = containerLmid.querySelectorAll('input');
    li = containerLmid.querySelectorAll('li');

    for (let i = 0; i < inputs.length; i++) {

        if (inputs[i].value !== '') {
            inputs[i].style.border = '';
        }
    }
};




