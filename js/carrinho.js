const containerprod = document.getElementById('container-prodsss')

const produtos = JSON.parse(localStorage.getItem("Users")) 
let position = JSON.parse(localStorage.getItem('infoLog'))
let num = position.position
let precoTotal = document.getElementById('precoTotal')
let PrecoAvista = document.getElementById('aVista')


console.log("qtde: " + produtos[num].carrinho.length);

const selects = [];

const optionscont = [];

for (let index = 0; index < produtos[num].carrinho.length; index++) {

    containerprod.innerHTML += produtos[num].carrinho[index].estrutura
    
    let select = document.querySelector(".select-cont" + (index + 1));
    
    selects[index] = select



    const valor = document.getElementById('valor' + (index + 1))

    const valortotalprod = document.getElementById('valor-total-prod ');
    
    // REALIZA FUNÇÃO AO CARREGAR A PÁGINA
  
    }
       

for (var indexxxx = 0; indexxxx < selects.length; indexxxx++) {

    console.log(indexxxx);

    console.log((selects[indexxxx]));

    console.log(produtos[indexxxx]);



        $((produtos[indexxxx])).on('click', '.select-cont', function() {
    
            // alert('quem sou eu?')
    
                if($(optionscont[indexxxx]).hasClass('active')){
        
                    $(optionscont[indexxxx]).removeClass('active')
        
                }
        
                else{
    
                $(optionscont[indexxxx]).addClass('active')
        
                }
        
        });

    console.log($(selects[indexxxx]).attr('class'))

}

function testeLog(){
    
}

var field = []
var valorAll = []

for(let i = 0; i < produtos[num].carrinho.length; i++){
    let elements = document.getElementById('field' + (i + 1))
    field.push(elements)
    let valorTotal = document.getElementById('valor-total-prod' + (i + 1))
    valorAll.push(valorTotal)
}

// $(document).ready(function() {
//     $(field).keyup(function() {
//         $(field).val(this.value.match(/[0-9]*/));
//     });
//   });

  console.log(field);
  console.log(valorAll);

function validar(field) {
    str = field.value;
    if (str.length > 2) {
      field.value = str.substring(0, str.length - 1);
    }
  }
  
  function numerico(evt) {
    var key_code = evt.keyCode ? evt.keyCode : evt.charCode ? evt.charCode : evt.which ? evt.which : void 0;
    if (key_code == 8 || key_code == 9 || key_code == 13 || key_code == 27 || key_code == 46) {
      return true;
    } else if ((key_code >= 35) && (key_code <= 40)) {
      return true
    } else if ((key_code >= 48) && (key_code <= 57)) {
      return true
    }
    return false;
  }

  let acumuladorr = 0

  localStorage.setItem('acumulador', JSON.stringify(acumuladorr))

  

function valor2(){
    let acumulador = JSON.parse(localStorage.getItem('acumulador'))
    acumulador = 0
    for (let i=0; i < produtos[num].carrinho.length; i++){
        let slaoq = produtos[num].carrinho[i].quantidade
        field[i].value = slaoq
        let slaoq2 = (field[i].value) * parseFloat(produtos[num].carrinho[i].valor)
        valorAll[i].innerHTML = 'R$ ' + slaoq2
        acumulador += slaoq2
        let avista = Math.floor(Math.random() * (50 - 10))
        precoTotal.innerHTML = 'R$ ' + acumulador
        let acumulador2 = acumulador - avista
        PrecoAvista.innerHTML = 'R$ ' + acumulador2
    }
    localStorage.setItem('acumulador', JSON.stringify(acumulador))
}

  function min(id){
      minn(id);
  }

  function max(id){
      maxx(id)
      valor2()
  }


  function minn(id){

      for (let i=0; i < produtos[num].carrinho.length; i++){

          
          if(produtos[num].carrinho[i].id == id && produtos[num].carrinho[i].quantidade == 1){
              alert('A quantidade mínima de produtos a ser selecionada é de 1')
            }
            
            else{
                if (produtos[num].carrinho[i].id == id) {
                    
                    produtos[num].carrinho[i].quantidade--
                    localStorage.setItem('Users', JSON.stringify(produtos))
                    let acumulador = JSON.parse(localStorage.getItem('acumulador'))


                    acumulador = 0
                    
                    for (let i=0; i < produtos[num].carrinho.length; i++){
                        let slaoq = produtos[num].carrinho[i].quantidade
                        field[i].value = slaoq
                        let slaoq2 = (field[i].value) * parseFloat(produtos[num].carrinho[i].valor)
                        valorAll[i].innerHTML = 'R$ ' + slaoq2
                        acumulador += slaoq2
                        let avista = Math.floor(Math.random() * (50 - 10))
                        precoTotal.innerHTML = 'R$ ' + acumulador
                        let acumulador2 = acumulador - avista
                        PrecoAvista.innerHTML = 'R$ ' + acumulador2
                    }
                    localStorage.setItem('acumulador', JSON.stringify(acumulador))
                    
                }
            }
        }
    }


function maxx(id) {
    
    if (produtos[num].carrinho.length < 1) {

        let cartProd = {
            id: id,
            quantidade: 1
        }

        produtos[num].carrinho.push(cartProd)
        localStorage.setItem('Users', JSON.stringify(produtos))
    }
    

    let prodOnCar = 0

    for (let i=0; i<produtos[num].carrinho.length; i++) {

        if (produtos[num].carrinho[i].id == id) {

            produtos[num].carrinho[i].quantidade++
            localStorage.setItem('Users', JSON.stringify(produtos))
            prodOnCar = 1
        }
    }
    
    if (prodOnCar == 0) {

        let cartProd= {
            id: id,
            quantidade:1
        }
    
        produtos[num].carrinho.push(cartProd)
        localStorage.setItem('Users', JSON.stringify(produtos))
    }

}

    

// for (let i = 0; i < optioncont.children.length; i++) {
    
    
    // for (let index = 0; index < produtos.length; index++) {
    
// }


// function active(){
    //     option.classList.add("active")
    
    // }
    
    // function num(){
        
        //     if(option.classList.length == 2)


    //     let numm = option.value

    //     console.log(numm);

    //     valor.innerHTML = numm

    //     optioncont.classList.remove("active")
    // }









// var containerProds = document.getElementById('container-prods')

// let url = new URL(window.location.href);

// let params = new URLSearchParams(url.search);

// let produtoEmJsonCodificado = params.get('produto')

// const produtoEmJson = decodeURIComponent(unescape(window.atob(produtoEmJsonCodificado)));

// console.log("PROFUTO EM JSON decodificado", produtoEmJson);

// console.log('OIOIOIOIOIOIOIOIOIOI' + produtoEmJson);

// const produto = JSON.parse(produtoEmJson);

// console.log('UIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII' + produto.id);

// const produtos = []

// produtos.push(produto)

// console.log(produtos);



    
// const linhaProd = 
//     `
//         <div class="row align-items-center" style="height: 200px; background-color: rgba(255, 255, 255, 0.048);">
//             <img class="w-25 h-75" src="${produto.imagens[0]}" alt="">
//             <h2 class="w-25 text-center text-white fs-4 fw-normal">${produto.nome}</h2>
//             <div class="col d-flex justify-content-center">
//                 <input class="w-25 h-50 bg-light text-center" type="number" name="" id="">
//             </div>
//             <span class="w-25 text-center text-white">po</span>
//         </div>
//     `

// containerProds.innerHTML = containerProds.innerHTML + linhaProd
