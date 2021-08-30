// fetch("../test.json")
//     .then(response => response.json()).then(produtos => {
//         console.log(produtos)

    

// });




const containerprod = document.getElementById('container-prodsss')

const produtos = JSON.parse(localStorage.getItem("Produto")) 

for (let index = 0; index < produtos.length; index++) {
    
    containerprod.innerHTML += produtos[index]

    function log(n){
        return console.log(n)
    }
        
    const select = document.getElementById("select" +(index + 1));
    const optioncont = document.querySelector(".options-cont" +(index + 1))
    const valor = document.getElementById('valor' + (index + 1))
    const valortotalprod = document.getElementById('valor-total-prod ' +(index + 1));

    console.log(optioncont);

    optioncont.addEventListener("click", function(){
        active();
    });

    function active(){
        if($(optioncont).hasClass('active')){
            $(optioncont).removeClass('active');
        }
        else{
            $(optioncont).addClass('active')
        }
    }
    
    for (let i = 0; i < optioncont.children.length; i++) {
        
        const option = document.getElementById('options' + (i + 1))
        
        // REALIZA FUNÇÃO AO CARREGAR A PÁGINA
        jQuery(function($){
                if($(option).hasClass('active')){    
                    const num = $(option).val();
                    $(valor).html(num)
                }
        });
        
        
        // FUNÇÃO PARA ALTERAR A CLASS ACTIVE CONFORME O CLICK
        $(document).on('click', option , function() {
            $(option).addClass('active').siblings().removeClass('active');
            if($(option).hasClass('active')){    
                const num = $(option).val();
                $(valor).html(num)
            }
        });
    }
}


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
    
