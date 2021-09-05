let containerR = document.querySelector('.container-r');
let select = containerR.querySelector('select');
let containerLmid = document.querySelector('.container-l-mid');
let containerLtop = document.querySelector('.container-l-top');

var preco = []
let precoStorage = JSON.parse(localStorage.getItem('acumulador'))

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

            li[i].innerHTML = 'Preencha os campos!'

            send = false;
        }
    }


    if (send !== true) {
        return false
    }

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

            li[i].innerHTML = '';

        }
    }
};


///////////////////////////////////// jQuery ∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖∖



let optionsCpf1Mask = { // plugin para máscaras no cpf/cnpj -- jQuery
    onKeyPress: function (cpf, ev, el, op) {
        let masks = ['000.000.000-00', '00.000.000/0000-00'];
        $('#cpf1').mask((cpf.length > 14) ? masks[1] : masks[0], op);
    }
}

$('#cpf1').length > 11 ? $('#cpf1').mask('00.000.000/0000-00', optionsCpf1Mask) : $('#cpf1').mask('000.000.000-00', optionsCpf1Mask);
$('#cpf2').length > 11 ? $('#cpf2').mask('00.000.000/0000-00', optionsCpf1Mask) : $('#cpf2').mask('000.000.000-00', optionsCpf1Mask);



let optionsDataMask = { // plugin para máscaras nos inputs de data de nascimento e validade cartão -- jQuery
    onKeyPress: function (date, ev, el, op) {
        let masks = ['00/00/00', '00/00'];
        $('#inputData').mask((date.length > 5) ? masks[0] : masks[0], op);
    }
}

$('#inputData').length > 5 ? $('#inputData').mask('00/00', optionsDataMask) : $('#inputData').mask('00/00/00', optionsDataMask);
