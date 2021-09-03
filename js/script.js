fetch("../test.json")
    .then(response => response.json()).then(produtos => {
        console.log(produtos)

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

            console.log(produtoTransformadoJsonCodificado);

            const modeloDeProduto =
                `<div class="card">
                    <div class="card-img">
                        <div class="slider-card sc${produto.id}">
                            <div class="slideC active">
                                <img class="img-card" src="${produto.imagens[0]}">
                            </div>
                            <div class="slideC">
                                <img class="img-card" src="${produto.imagens[1]}">
                            </div>
                            <div class="slideC">
                                <img class="img-card" src="${produto.imagens[2]}">
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
                    <span class="preço">${produto.valor}</span>
                    <span class="juros">${produto.juros}</span>
                    <a href="projeto.html?produto=${produtoTransformadoJsonCodificado}" class="btn">Ver produto</a>
                    <a class="btn-cart" id="btn-cart${index + 1}" style="cursor: pointer"><i class="fas fa-cart-plus"></i></button>
                </div>`

            containerProdutos.innerHTML = containerProdutos.innerHTML + modeloDeProduto;

            if(produto.nome == "All Star Tie Dye"){ 
                const exampleProductInfos = `
                <div class="product${+1}">
                        <div class="name-product">
                            <span id="name-product">${produto.nome}</span>
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
                        </div>
                        <div class="img-product">
                            <img id="image-example-product" src="${"./img/airshadow.jpeg"}" alt="">
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
                    </div>
                    <div class="img-product">
                        <img id="image-example-product" src="${"./img/simponssk8.jpg"}" alt="">
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
                        </div>
                        <div class="img-product">
                            <img id="image-example-product" src="${"./img/simponsvsThesimpsons.jpg"}" alt="">
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
                        </div>
                        <div class="img-product">
                            <img id="image-example-product" src="${"./img/lowtrd.jpg"}" alt="">
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
                        </div>
                        <div class="img-product">
                            <img id="image-example-product" src="${"./img/tenis-nike-air-force-1-infantil-314192-117-7.png"}" alt="">
                        </div>
                        <div class="button-product">
                            <a class="btn-example-product" href="projeto.html?produto=${produtoTransformadoJsonCodificado}">Ver produto</a>
                        </div>
                    </div>`
                
                    exampleProductSimple.innerHTML = exampleProductSimple.innerHTML + exampleProductInfos;   
            }
    }

    
    
    for(let index = 0; index < produtos.length; index++){
        
        const produto = produtos[index]
        
        let button = document.getElementById('btn-cart' + (index + 1))

        
        var contador = 1
        button.addEventListener("click", function(){
            console.log(contador);
            prod();
            contador += 1
            
        });
        
        let dados = []
        
        localStorage.setItem("Produto", JSON.stringify(dados))
        
        function prod(){

            dados = JSON.parse(localStorage.getItem("Produto"))

            const linhaProd = 
            `<div class="row align-items-center" style="height: 200px; background-color: rgba(255, 255, 255, 0.048);">
            <img class="w-25 h-75" src="${produto.imagens[0]}" alt="">
            <h2 class="w-25 text-center text-white fs-4 fw-normal">${produto.nome}</h2>
            <div class="col w-25 d-flex justify-content-center">
                <div class="select-cont${contador} select-cont">
                    <div class="select">
                        <p class="sel-txt" id="valor${contador}"></p>
                        <div class="icon">
                            <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/caret-down-512.png" alt="" class="caret">
                        </div>
                    </div>
                    
                    <div class="options-cont options-cont${contador}">
                        <button class="options active" value="1">
                            1
                        </button>
                        <button class="options" value="2">
                            2
                        </button>
                        <button class="options" value="3">
                            3
                        </button>
                    </div>
                </div>
            </div>
            <span class="w-25 text-center text-white" id="valor-total-prod ${contador}">R$ ${produto.valor}</span>
        </div>`
     
         dados.push(linhaProd)
         console.log(dados);
        localStorage.setItem("Produto", JSON.stringify(dados))

        }
    }
    

        

        let indexteste = 0
        for(let indexxx = 1; indexxx <= produtos.length; indexxx++){
            
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



const slidesheader = document.querySelector(".slider-header").children;
const indicatorheader = document.querySelector(".indicator-header")


function circleIndicatorHeader() {
    for (let i = 0; i < slidesheader.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = i + 1
        div.setAttribute("onclick", "indicateSlidehHeader(this)")
        div.id = i
        if (i == 0) {
            div.className = "active"
        }
        indicatorheader.appendChild(div)
    }
}

circleIndicatorHeader()

function indicateSlidehHeader(element) {
    index_22 = element.id;
    changeSlidehHeader();
    updateCircleIndicatorHeader();
    resetTimerHeader();
}

function updateCircleIndicatorHeader() {
    for (let i = 0; i < indicatorheader.children.length; i++) {
        indicatorheader.children[i].classList.remove("active")
    }
    indicatorheader.children[index_22].classList.add("active")
}

function prevSlidehHeader() {
    if (index_22 == 0) {
        index_22 = slidesheader.length - 1;
    } else {
        index_22--
    }
    changeSlidehHeader()
}

function nextSlidehHeader() {
    if (index_22 == slidesheader.length - 1) {
        index_22 = 0;
    } else {
        index_22++
    }
    
    changeSlidehHeader();
}

function changeSlidehHeader() {
    for (let i = 0; i < slidesheader.length; i++) {
        slidesheader[i].classList.remove("active")
    }
    slidesheader[index_22].classList.add("active")
}

function resetTimerHeader() {
    clearInterval(timerHeader);
    timerHeader = setInterval(autoPlayHeader, 4000)
}

function autoPlayHeader() {
    nextSlidehHeader();
    updateCircleIndicatorHeader();
}

let timerHeader = setInterval(autoPlayHeader, 5000)


let index_2 = 0;


const slides = document.querySelector(".slider").children;
const indicator = document.querySelector(".indicator")


function circleIndicator() {
    for (let i = 0; i < slides.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = i + 1
        div.setAttribute("onclick", "indicateSlide(this)")
        div.id = i
        if (i == 0) {
            div.className = "active"
        }
        indicator.appendChild(div)
    }
}

circleIndicator()

function indicateSlide(element) {
    index_2 = element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}

function updateCircleIndicator() {
    for (let i = 0; i < indicator.children.length; i++) {
        indicator.children[i].classList.remove("active")
    }
    indicator.children[index_2].classList.add("active")
}

function prevSlide() {
    if (index_2 == 0) {
        index_2 = slides.length - 1;
    } else {
        index_2--
    }
    changeSlide()
}

function nextSlide() {
    if (index_2 == slides.length - 1) {
        index_2 = 0;
    } else {
        index_2++
    }
    
    changeSlide();
}

function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active")
    }
    slides[index_2].classList.add("active")
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoPlay, 4000)
}

function autoPlay() {
    nextSlide();
    updateCircleIndicator();
};

let timer = setInterval(autoPlay, 8000)
