$('li > a ').click(function() {
    $('li > a').removeClass('active');
    $(this).addClass('active'); 
}); 

$('.flechinha.dois').click(function() {

    if($('.ul-border2').hasClass('displayzin')){
        $('.ul-border2').removeClass('displayzin')
        $(".flechinha.dois").css({"top":"50%", "transform":"rotate(0deg)"});
        $(".a-ul-border2.um").removeClass('displayzin2')
        $(".a-ul-border2.dois").removeClass('displayzin2')
        $(".a-ul-border2.tres").removeClass('displayzin2')
        $(".a-ul-border2.um").css({"transition":"none !important", 
        "transition-delay":"0ms"})
        $(".a-ul-border2.dois").css({"transition":"none !important", 
        "transition-delay":"0ms"})
        $(".a-ul-border2.tres").css({"transition":"none !important", 
        "transition-delay":"0ms"})
        $('.infantil-c2').removeClass('displayzin3')
        $('.ul-border2').removeClass('displayzin2')
    }
    
    else if($('.ul-border2').hasClass('displayzin2')){
        $('.ul-border2').removeClass('displayzin2')
        $(".a-ul-border2.um").removeClass('displayzin2')
        $(".a-ul-border2.dois").removeClass('displayzin2')
        $(".a-ul-border2.tres").removeClass('displayzin2')
        $('.infantil-c2').removeClass('displayzin3')
        $(".a-ul-border2.um").css({"transition":"none !important", 
        "transition-delay":"0ms"})
        $(".a-ul-border2.dois").css({"transition":"none !important", 
        "transition-delay":"0ms"})
        $(".a-ul-border2.tres").css({"transition":"none !important", 
        "transition-delay":"0ms"})
        $(".flechinha.dois").css({"top":"35%", "transform":"rotate(0deg)"});
        $('.flechinha.tres').css({"top":"84%","transform":"rotate(0deg)"})
    }
    else{
        $('.ul-border2').addClass('displayzin')
        $(".flechinha.dois").css({"top":"7%", "transform":"rotate(-180deg)"});
        $(".a-ul-border2.um").addClass('displayzin2')
        $(".a-ul-border2.dois").addClass('displayzin2')
        $(".a-ul-border2.tres").addClass('displayzin2')
        $(".a-ul-border2.um").css({"transition": "visibility 300ms ease;"})
        $(".a-ul-border2.dois").css({"transition": "visibility 300ms ease;"})
        $(".a-ul-border2.tres").css({"transition": "visibility 300ms ease;"})
    }

}); 

$('.flechinha.tres').click(function(){

    if($('.infantil-c2').hasClass('displayzin3')){
        $('.infantil-c2').removeClass('displayzin3')
        $('.infantil-c2').css({"height":"0 !important"})
        $('.infantil-c2').css({"visibility":"hidden !important"})
        $('.infantil-c2').css({"transition":"all 0ms ease !important", 
        "transition":"0ms"})
        $('.ul-border2').addClass('displayzin2')
        $(".flechinha.tres").css({"top":"83%", "transform":"rotate(0deg)"});
        $(".flechinha.dois").css({"top":"7%", "transform":"rotate(-180deg)"});
    }
    
    else if($('.infantil-c2').hasClass('displayzin2')){
        $('.ul-border2').css({"height":"auto !important"})
        $('.infantil-c2').removeClass('displayzin2')
    }
    
    else{
        $(".flechinha.dois").css({"top":"5.5%", "transform":"rotate(-180deg)"});
        $('.flechinha.tres').css({"top":"56.5%","transform":"rotate(-180deg)"})
        $('.infantil-c2').addClass('displayzin3')
        $('.ul-border2').removeClass('displayzin')
        $('.ul-border2').addClass('displayzin2')
        $('.ul-border2').css({"height":"auto !important"})
        $('.ul-border2').css({"visibility":"visible !important"})
        $('.a-ul-border2.tres').addClass('displayzin4')
    }
});

let testCart = document.getElementById('test-cart')

testCart.addEventListener('click', function(){
    
})


fetch("../test.json")
    .then(response => response.json()).then(produtos => {

        const containerProdutos = document.getElementById('container-produtos');

        const containerProds = document.getElementById('container-prodsss');

        const exampleProductSimple = document.getElementById('example-products-1');

        const exampleProductColors = document.getElementById('example-products-2');

        const exampleProductsThematics = document.getElementById('example-products-3');


        for (let index = 0; index < produtos.length; index++) {

            const produto = produtos[index];

            let produtoTransformadoJson = JSON.stringify(produto);


            const produtoTransformadoJsonCodificado = btoa(escape(encodeURIComponent(produtoTransformadoJson))); 
            
            // encode a string

            //  const decodedData = atob(encodedData)

            if(produto.id <= 15){

                const modeloDeProduto =
                    `<div class="card">
                        <div class="card-img">
                            <div class="slider-card sc${produto.id}">
                                <div class="slideC active">
                                    <img class="img-card" src="${produto.imagens[0]}" loading="lazy">
                                </div>
                                <div class="slideC">
                                    <img class="img-card" src="${produto.imagens[1]}" loading="lazy">
                                </div>
                                <div class="slideC">
                                    <img class="img-card" src="${produto.imagens[2]}" loading="lazy">
                                </div>
                            </div>
                            <div class="controls-card">
                                <div class="prev-card pc${produto.id}">
                                    <span> < </span>
    
                                </div>
                                <div class="next-card nc${produto.id}">
                                    <span> > </span>
                                </div>
                            </div>
                            <div id="indicator-card" class="indicator-card ic${produto.id}"></div>
                        </div>
                        <span class="nome">${produto.nome}</span>
                        <span class="preço">R$${produto.valor}</span>
                        <span class="juros">${produto.juros}</span>
                        <a href="projeto.html?produto=${produtoTransformadoJsonCodificado}" class="btn">Ver produto</a>
                        <a class="btn-cart" id="btn-cart${index + 1}" style="cursor: pointer"><i class="fas fa-cart-plus"></i></button>
                    </div>`
    
                containerProdutos.innerHTML = containerProdutos.innerHTML + modeloDeProduto;
            }


            if(produto.nome == "All Star Tie Dye"){ 
                const exampleProductInfos = `
                <div class="product${+1}">
                        <div class="name-product">
                            <span id="name-product">${produto.nome}</span>
                            <span id="price">R$ ${produto.valor}</span>
                        </div>
                        <div class="img-product">
                            <img id="image-example-product" src="${"./img/allstar.jpg"}" alt="">
                        </div>
                        <div class="button-product">
                            <a class="btn-example-product" href="projeto.html?produto=${produtoTransformadoJsonCodificado}">Ver produto</a>
                        </div>
                    </div>`
                
                    exampleProductColors.innerHTML = exampleProductColors.innerHTML + exampleProductInfos;            
            }

            if(produto.nome == "Nike AF1 Shadow Feminino"){
                const exampleProductInfos = `
                <div class="product${+2}">
                        <div class="name-product">
                        <span id="name-product">${produto.nome}</span>
                        <span id="price">R$ ${produto.valor}</span>
                        </div>
                        <div class="img-product">
                            <img id="image-example-product" src="${"./img/airshadow.png"}" alt="">
                        </div>
                        <div class="button-product">
                            <a class="btn-example-product" href="projeto.html?produto=${produtoTransformadoJsonCodificado}">Ver produto</a>
                        </div>
                    </div>`
                
                    exampleProductColors.innerHTML = exampleProductColors.innerHTML + exampleProductInfos;   
            }
    
            

            if(produto.nome == "Vans X Os Simpsons SK8-Low"){ 
            const exampleProductInfos = `
            <div class="product${+1}">
                    <div class="name-product">
                        <span id="name-product">${produto.nome}</span>
                        <span id="price">R$ ${produto.valor}</span>
                    </div>
                    <div class="img-product">
                        <img id="image-example-product" src="${"./img/simpsonSK8.png"}" alt="">
                    </div>
                    <div class="button-product">
                        <a class="btn-example-product" href="projeto.html?produto=${produtoTransformadoJsonCodificado}">Ver produto</a>
                    </div>
                </div>`
            
                exampleProductsThematics.innerHTML = exampleProductsThematics.innerHTML + exampleProductInfos;            
            }

            if(produto.nome == "Vans Era X Os Simpsons"){
                const exampleProductInfos = `
                <div class="product${+2}">
                        <div class="name-product">
                            <span id="name-product">${produto.nome}</span>
                            <span id="price">R$ ${produto.valor}</span>
                        </div>
                        <div class="img-product">
                            <img id="image-example-product" src="${"./img/simpsons.png"}" alt="">
                        </div>
                        <div class="button-product">
                            <a class="btn-example-product" href="projeto.html?produto=${produtoTransformadoJsonCodificado}">Ver produto</a>
                        </div>
                    </div>`
                
                    exampleProductsThematics.innerHTML = exampleProductsThematics.innerHTML + exampleProductInfos;   
            }

            
            if(produto.nome == "Nike SB Dunk Low TRD"){ 
                const exampleProductInfos = `
                <div class="product${+1}">
                        <div class="name-product">
                            <span id="name-product">${produto.nome}</span>
                            <span id="price">R$ ${produto.valor}</span>
                        </div>
                        <div class="img-product">
                            <img id="image-example-product" src="${"./img/lowtrd.png"}" alt="">
                        </div>
                        <div class="button-product">
                            <a class="btn-example-product" href="projeto.html?produto=${produtoTransformadoJsonCodificado}">Ver produto</a>
                        </div>
                    </div>`
                
                    exampleProductSimple.innerHTML = exampleProductSimple.innerHTML + exampleProductInfos;            
            }
            if(produto.nome == "Tênis Nike Air Force 1 Infantil"){
                const exampleProductInfos = `
                <div class="product${+2}">
                        <div class="name-product">
                            <span id="name-product">${produto.nome}</span>
                            <span id="price">R$ ${produto.valor}</span>
                        </div>
                        <div class="img-product">
                            <img id="image-example-product" src="${"./img/airForce.png"}" alt="">
                        </div>
                        <div class="button-product">
                            <a class="btn-example-product" href="projeto.html?produto=${produtoTransformadoJsonCodificado}">Ver produto</a>
                        </div>
                    </div>`
                
                    exampleProductSimple.innerHTML = exampleProductSimple.innerHTML + exampleProductInfos;   
            }
        }

    
    
        for(let index = 0; index < produtos.length; index++){

            if (produtos[index].id <= 15) {
                
                const produto = produtos[index]

                console.log(produto);    
                
                let button = document.getElementById('btn-cart' + (index + 1))
        
                var  contador  =  1
                button.addEventListener("click", function() {
                    console.log(contador) ;
                    prod();  
                })            
                    
                    function prod(){
                        
                        let position = JSON.parse(localStorage.getItem('infoLog'))
                        
                        if(position === null){
                            alert('Você necessita estar logado para adicionar um produto ao carrinho')
                            window.open('loginECadastro(ModoE).html', '_self')
                        }
                        else{
                            
                            let dados = JSON.parse(localStorage.getItem("Users"))
                            
                            let num = position.position
                            console.log(num);
                            
                            let linhaProd = {
                                estrutura: `<div class="row align-items-center" style="height: 200px; background-color: rgba(255, 255, 255, 0.048);">
                                <img class="w-25 h-75" src="${produto.imagens[0]}" alt="">
                                <h2 class="nome w-25 text-center text-white fs-4 fw-normal">${produto.nome}</h2>
                                <div class="col w-25 h-100 d-flex justify-content-center align-items-center">
                                <div class="select-cont${contador} select-cont" style="height: 15%">
                                <a href="javascript:min(${contador});" class="a-fle"><i class="flecha far fa-minus-square"></i></a>
                                <input id="field${contador}" class="sel-txt" type="text" value = "1" onkeypress="validar(this); return numerico(event);"/>
                                <a href="javascript:max(${contador});" class="a-fle"><i class="flecha far fa-plus-square"></i></a>
                                </div>
                                </div>
                                <span class="w-25 text-center text-white" id="valor-total-prod${contador}"></span>
                                </div>`,
                                quantidade: 1,
                                id: contador,
                                valor: produto.valor,
                            }
                            
                            contador += 1
                            
                            
                            dados[num].carrinho.push(linhaProd) 
                            console.log(dados);
                            localStorage.setItem("Users", JSON.stringify(dados))
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                background: '#181818',
                                title: 'Produto adicionado ao carrinho com suceso',
                                showConfirmButton: false,
                                timer: 1500
                              })
                            // window.location.reload()
                        }
                    
                }
            }
            
        }
    

        

        let indexteste = 0
        for(let indexxx = 1; indexxx <= containerProdutos.length; indexxx++){
            
            const slidescard = document.querySelector(".sc" + (indexxx));
            
            const indicatorcard = document.querySelector(".ic" + (indexxx));
            
            const prevcard = document.querySelector(".pc" + (indexxx));
            
            const nextcard = document.querySelector(".nc" + (indexxx));
            
            
            prevcard.addEventListener("click", function() {
            
                prevSlidecard();
                updateCircleIndicatorcard();
            
            })
            
            
            nextcard.addEventListener("click", function() {
            
                nextSlidecard();
                updateCircleIndicatorcard();
            
            })
            
            
            function circleIndicatorcard() {
                for (let i = 0; i < slidescard.children.length; i++) {
                    const div = document.createElement("div");
                    div.innerHTML = i + 1
                    div.addEventListener("click", function(){ 
                        indexteste = div.id;
                        changeSlidecard();
                        updateCircleIndicatorcard();
                    })
                    div.id = i
                    if (i == 0) {
                        div.className = "active"
                    }
                    indicatorcard.appendChild(div)
                }
            }
            
            circleIndicatorcard()
            
            function indicateSlideCcard(element) {
                indexteste = element.id;
                changeSlidecard();
                updateCircleIndicatorcard();
            }
            
            function updateCircleIndicatorcard() {
                for (let i = 0; i < indicatorcard.children.length; i++) {
                    indicatorcard.children[i].classList.remove("active")
                }
                indicatorcard.children[indexteste].classList.add("active")
            }
            
            function prevSlidecard() {
                if (indexteste == 0) {
                    indexteste = 2
                } else {
                    indexteste--
                }
                changeSlidecard()
            }
            function nextSlidecard() {
                // alert(slidescard.className == "slider-card sc" + indexxx)
                // alert(slidescard.className + "         slider-card sc" + indexxx)
                let isLast = false;
                for (let i = 0; i < slidescard.children.length; i++) {
                    // alert(slidescard.children[i].className)
                }
                
                                    if(indexteste == 2){
                                        indexteste = indexteste - 2
                                    }
                                    else{
                                        indexteste = indexteste + 1
                                    }
                
                // alert("index teste: "+indexteste)
                changeSlidecard();
            }
            function changeSlidecard() {
                // alert("Next index/2: " + indexxx)
               
                for (let i = 0; i < slidescard.children.length; i++) {
         
                    slidescard.children[i].classList.remove("active")
                }
                // alert(slidescard.children[indexxx].nodeName + "index: " + indexxx)
                
                slidescard.children[indexteste].classList.add("active")
            }
        }

    });



    // 1a 2 3 = NEXT = 1 2a 3 = NEXT = 1 2 3a
    
    
    /*const  usuario = {
        nome: "ismael",
        idade: 12
    }; 
    
    const msg = "meu nome é "+ usuario.nome + " e tenho "+ usuario.idade+ "anos";
    
    const msg2 = `
    meu nome é $ { usuario.nome }
    e tenho $ { usuario.idade }
    anos `;*/
    
    
// document.querySelector("#carousel-items")
// addEventListener("wheel" , event => {
    //     if(event.deltaY > 0){
        //         event.target.scrollBy(500, 0)
        //     } else{
//         event.target.scrollBy(-500, 0)
//     }
// })

// window.addEventListener("scroll", function(){
    //     var headertop = document.querySelector("#header-top");
//     headertop.classList.toggle("sticky", window.scrollY > 190);

//     var headerbottom = document.querySelector("#header-bottom");
//     headerbottom.classList.toggle("sticky", window.scrollY > 190);

//     var row = document.querySelector("#row");
//     row.classList.toggle("sticky", window.scrollY > 190);

//     var conteudo = document.querySelector("#conteudo");
//     conteudo.classList.toggle("sticky", window.scrollY > 190);

//     var alogo = document.querySelector("#a-logo");
//     alogo.classList.toggle("sticky", window.scrollY > 190);

//     var navbar = document.querySelector("#navbar");
//     navbar.classList.toggle("sticky", window.scrollY > 190);

//     var navbarsticky = document.querySelector("#menu");
//     navbarsticky.classList.toggle("sticky", window.scrollY > 190);

//     var labelmenu = document.querySelector("#label_menu");
//     labelmenu.classList.toggle("sticky", window.scrollY > 190);

//     var iconesSticky = document.querySelector("#icones-importantes");
//     iconesSticky.classList.toggle("sticky", window.scrollY > 190);
// })


// window.addEventListener("load", start)

let index_22 = 0;



// const slidesheader = document.querySelector(".slider-header").children;
// const indicatorheader = document.querySelector(".indicator-header")


// function circleIndicatorHeader() {
//     for (let i = 0; i < slidesheader.length; i++) {
//         const div = document.createElement("div");
//         div.innerHTML = i + 1
//         div.setAttribute("onclick", "indicateSlidehHeader(this)")
//         div.id = i
//         if (i == 0) {
//             div.className = "active"
//         }
//         indicatorheader.appendChild(div)
//     }
// }

// circleIndicatorHeader()

// function indicateSlidehHeader(element) {
//     index_22 = element.id;
//     changeSlidehHeader();
//     updateCircleIndicatorHeader();
//     resetTimerHeader();
// }

// function updateCircleIndicatorHeader() {
//     for (let i = 0; i < indicatorheader.children.length; i++) {
//         indicatorheader.children[i].classList.remove("active")
//     }
//     indicatorheader.children[index_22].classList.add("active")
// }

// function prevSlidehHeader() {
//     if (index_22 == 0) {
//         index_22 = slidesheader.length - 1;
//     } else {
//         index_22--
//     }
//     changeSlidehHeader()
// }

// function nextSlidehHeader() {
//     if (index_22 == slidesheader.length - 1) {
//         index_22 = 0;
//     } else {
//         index_22++
//     }
    
//     changeSlidehHeader();
// }

// function changeSlidehHeader() {
//     for (let i = 0; i < slidesheader.length; i++) {
//         slidesheader[i].classList.remove("active")
//     }
//     slidesheader[index_22].classList.add("active")
// }

// function resetTimerHeader() {
//     clearInterval(timerHeader);
//     timerHeader = setInterval(autoPlayHeader, 4000)
// }

// function autoPlayHeader() {
//     nextSlidehHeader();
//     updateCircleIndicatorHeader();
// }

// let timerHeader = setInterval(autoPlayHeader, 5000)


let indexMaster = 0

const slidesMaster = document.querySelector(".slider").children;
            
const indicatorMaster = document.querySelector(".indicatorMaster");

const prevMaster = document.querySelector(".prevMaster");

const nextMaster = document.querySelector(".nextMaster");


prevMaster.addEventListener("click", function() {

    prevSlideMaster();
    updateCircleIndicatorMaster();
    resetTimerMaster();

})


nextMaster.addEventListener("click", function() {

    nextSlideMaster();
    updateCircleIndicatorMaster();
    resetTimerMaster();

})


function circleIndicatorMaster() {
    for (let i = 0; i < slidesMaster.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = i + 1
        div.setAttribute("onclick", "indicateSlideMaster(this)")
        div.id = i
        if (i == 0) {
            div.className = "active"
        }
        indicatorMaster.appendChild(div)
    }
}

circleIndicatorMaster()

function indicateSlideMaster(element) {
    indexMaster = element.id;
    changeSlideMaster();
    updateCircleIndicatorMaster();
    resetTimerMaster();
}

function updateCircleIndicatorMaster() {
    for (let i = 0; i < indicatorMaster.children.length; i++) {
        indicatorMaster.children[i].classList.remove("active")
    }
    indicatorMaster.children[indexMaster].classList.add("active")
}

function prevSlideMaster() {
    if (indexMaster == 0) {
        indexMaster = slidesMaster.length - 1;
    } else {
        indexMaster--
    }
    changeSlideMaster()
}

function nextSlideMaster() {
    if (indexMaster == slidesMaster.length - 1) {
        indexMaster = 0;
    } else {
        indexMaster++
    }

    
    changeSlideMaster();
}

function changeSlideMaster() {
    for (let i = 0; i < slidesMaster.length; i++) {
        slidesMaster[i].classList.remove("active")
    }
    slidesMaster[indexMaster].classList.add("active")
}

function resetTimerMaster() {
    clearInterval(timerMaster);
    timerMaster = setInterval(autoPlayMaster, 7000)
}

function autoPlayMaster() {
    nextSlideMaster();
    updateCircleIndicatorMaster();
}


let timerMaster = setInterval(autoPlayMaster, 7000)

console.log(indexMaster);