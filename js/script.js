fetch("../products.json")
    .then(response => response.json()).then(products => {

        const containerProductsIndex = document.getElementById('container-products');
        const containerHighLights = document.getElementById('container-highlights')
        const containerAllProducts = document.getElementById('container-prodsss');
        const exampleProductSimple = document.getElementById('example-products-1');
        const exampleProductColors = document.getElementById('example-products-2');
        const exampleProductsThematics = document.getElementById('example-products-3');

        for (let index = 0; index < products.length; index++) {

            const product = products[index];
            var productJson = JSON.stringify(product);
            const productCodified = btoa(encodeURIComponent(productJson));

            if (product.id <= 16) {
                const modelOfProduct =
                    `<div class="card">
                        <div class="card-img">
                            <div class="slider-card sc${product.id}">
                                <div class="slideC active">
                                    <img class="img-card" src="${product.imagens[0]}" loading="lazy">
                                </div>
                                <div class="slideC">
                                    <img class="img-card" src="${product.imagens[1]}" loading="lazy">
                                </div>
                                <div class="slideC">
                                    <img class="img-card" src="${product.imagens[2]}" loading="lazy">
                                </div>
                            </div>
                            <div class="controls-card">
                                <div class="prev-card pc${product.id}">
                                    <span> < </span>
    
                                </div>
                                <div class="next-card nc${product.id}">
                                    <span> > </span>
                                </div>
                            </div>
                            <div id="indicator-card" class="indicator-card ic${product.id}"></div>
                        </div>
                        <span class="nome">${product.nome}</span>
                        <span class="preço">R$${product.valor}</span>
                        <span class="juros">${product.juros}</span>
                        <a href="product.html?product=${productCodified}" class="btn">Ver produto</a>
                        <a class="btn-cart" id="btn-cart${index + 1}" style="cursor: pointer"><i class="fas fa-cart-plus"></i></button>
                    </div>`

                containerProductsIndex.innerHTML = containerProductsIndex.innerHTML + modelOfProduct;
            }

            if (product.id == 1) {
                const modelOfProduct =
                    `<div class="card-highlight">
                    <div class="box-img">
                        <img src="./img/destaques/destaque1.png" alt="">
                    </div>
                    <div class="effect"></div>
                    <div class="content-highlight">
                        <div class="description-highlight">
                            <p class="main">${product.nome}</p>
                            <p class="sub">${product.descricao}</p>
                            <a href="product.html?product=${productCodified}"
                                class="button-highlight" onclick="destaque1()">Ver produto</a>
                        </div>
                    </div>
                </div>`

                containerHighLights.innerHTML = containerHighLights.innerHTML + modelOfProduct;
            }

            if (product.id == 8) {
                const modelOfProduct =
                    `<div class="card-highlight">
                    <div class="box-img">
                        <img src="./img/destaques/destaque2.png" alt="">
                    </div>
                    <div class="effect"></div>
                    <div class="content-highlight">
                        <div class="description-highlight">
                            <p class="main">${product.nome}</p>
                            <p class="sub">${product.descricao}</p>
                            <a href="product.html?product=${productCodified}"
                                class="button-highlight" onclick="destaque1()">Ver produto</a>
                        </div>
                    </div>
                </div>`

                containerHighLights.innerHTML = containerHighLights.innerHTML + modelOfProduct;
            }

            if (product.id == 12) {
                const modelOfProduct =
                    `<div class="card-highlight">
                    <div class="box-img">
                        <img src="./img/destaques/destaque3.png" alt="">
                    </div>
                    <div class="effect"></div>
                    <div class="content-highlight">
                        <div class="description-highlight">
                            <p class="main">${product.nome}</p>
                            <p class="sub">${product.descricao}</p>
                            <a href="product.html?product=${productCodified}"
                                class="button-highlight" onclick="destaque1()">Ver produto</a>
                        </div>
                    </div>
                </div>`

                containerHighLights.innerHTML = containerHighLights.innerHTML + modelOfProduct;
            }

            if (product.nome == "All Star Tie Dye") {
                const exampleProductInfos = `
                <div class="product${+1}">
                        <div class="name-product">
                            <span class="main" id="name-product">${product.nome}</span>
                            <span class="main" id="price">R$ ${product.valor}</span>
                        </div>
                        <div class="img-product">
                            <img id="image-example-product" src="${"./img/allstar.jpg"}" alt="">
                        </div>
                        <div class="button-product">
                            <a class="main" href="product.html?product=${productCodified}">Ver produto</a>
                        </div>
                    </div>`

                exampleProductColors.innerHTML = exampleProductColors.innerHTML + exampleProductInfos;
            }

            if (product.nome == "Nike AF1 Shadow Feminino") {
                const exampleProductInfos = `
                <div class="product${+2}">
                        <div class="name-product">
                        <span class="main" id="name-product">${product.nome}</span>
                        <span class="main" id="price">R$ ${product.valor}</span>
                        </div>
                        <div class="img-product">
                            <img id="image-example-product" src="${"./img/airshadow.png"}" alt="">
                        </div>
                        <div class="button-product">
                            <a class="main" href="product.html?product=${productCodified}">Ver produto</a>
                        </div>
                    </div>`

                exampleProductColors.innerHTML = exampleProductColors.innerHTML + exampleProductInfos;
            }

            if (product.nome == "Vans X Os Simpsons SK8-Low") {
                const exampleProductInfos = `
                <div class="product${+1}">
                        <div class="name-product">
                            <span class="main" id="name-product">${product.nome}</span>
                            <span class="main" id="price">R$ ${product.valor}</span>
                        </div>
                        <div class="img-product">
                            <img id="image-example-product" src="${"./img/simpsonSK8.png"}" alt="">
                        </div>
                        <div class="button-product">
                            <a class="main" href="product.html?product=${productCodified}">Ver produto</a>
                        </div>
                    </div>`

                exampleProductsThematics.innerHTML = exampleProductsThematics.innerHTML + exampleProductInfos;
            }

            if (product.nome == "Vans Era X Os Simpsons") {
                const exampleProductInfos = `
                <div class="product${+2}">
                        <div class="name-product">
                            <span class="main" id="name-product">${product.nome}</span>
                            <span class="main" id="price">R$ ${product.valor}</span>
                        </div>
                        <div class="img-product">
                            <img id="image-example-product" src="${"./img/simpsons.png"}" alt="">
                        </div>
                        <div class="button-product">
                            <a class="main" href="product.html?product=${productCodified}">Ver produto</a>
                        </div>
                    </div>`
                exampleProductsThematics.innerHTML = exampleProductsThematics.innerHTML + exampleProductInfos;
            }


            if (product.nome == "Nike SB Dunk Low TRD") {
                const exampleProductInfos = `
                <div class="product${+1}">
                        <div class="name-product">
                            <span class="main" id="name-product">${product.nome}</span>
                            <span class="main" id="price">R$ ${product.valor}</span>
                        </div>
                        <div class="img-product">
                            <img id="image-example-product" src="${"./img/lowtrd.png"}" alt="">
                        </div>
                        <div class="button-product">
                            <a class="main" href="product.html?product=${productCodified}">Ver produto</a>
                        </div>
                    </div>`

                exampleProductSimple.innerHTML = exampleProductSimple.innerHTML + exampleProductInfos;
            }
            if (product.nome == "Tênis Nike Air Force 1 Infantil") {
                const exampleProductInfos = `
                <div class="product${+2}">
                        <div class="name-product">
                            <span class="main" id="name-product">${product.nome}</span>
                            <span class="main" id="price">R$ ${product.valor}</span>
                        </div>
                        <div class="img-product">
                            <img id="image-example-product" src="${"./img/airForce.png"}" alt="">
                        </div>
                        <div class="button-product">
                            <a class="main" href="product.html?product=${productCodified}">Ver produto</a>
                        </div>
                    </div>`

                exampleProductSimple.innerHTML = exampleProductSimple.innerHTML + exampleProductInfos;
            }
        }

        for (let indexProd = 0; indexProd < products.length; indexProd++) {

            if (products[indexProd].id <= 15) {

                const product = products[indexProd]
                var button = document.getElementById('btn-cart' + (indexProd + 1))
                var contador = 1

                button.addEventListener("click", function () {
                    addProd();
                })

                function addProd() {
                    let position = JSON.parse(localStorage.getItem('infoLog'))
                    if (position === null) {
                        const swalWithBootstrapButtons = Swal.mixin({
                            customClass: {
                                confirmButton: 'btn btn-success',
                                cancelButton: 'btn btn-danger'
                            },
                            buttonsStyling: true
                        })
                        swalWithBootstrapButtons.fire({
                            background: "#181818",
                            color: "#FFF",
                            title: "Deseja efetuar seu login agora?",
                            text: "Você necessita estar logado para adicionar um produto no carrinho",
                            iconColor: "#8A48FA",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#8A48FA',
                            cancelButtonColor: '#414141',
                            confirmButtonText: 'Sim',
                            cancelButtonText: 'Não',
                            reverseButtons: true
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.open('loginECadastro(ModoE).html', '_self')
                            }
                        })
                    }

                    else {
                        let dados = JSON.parse(localStorage.getItem("Users"))
                        let nfirst = position.position
                        let linhaProd = {
                            estrutura: `<div class="row align-items-center" style="height: 200px; background-color: rgba(255, 255, 255, 0.048);">
                            <img class="w-25 h-75" src="${product.imagens[0]}" alt="">
                            <h2 class="nome w-25 text-center text-white fs-4 fw-normal">${product.nome}</h2>
                            <div class="col w-25 h-100 d-flex justify-content-center align-items-center">
                            <div class="select-cont${contador} select-cont" style="height: 15%">
                            <a href="javascript:min(${contador});" class="a-fle"><i class="flecha far fa-minus-square"></i></a>
                            <input id="field${contador}" class="sel-txt" type="text" value = "1" onkeypress="validar(this); return nfirsterico(event);"/>
                            <a href="javascript:max(${contador});" class="a-fle"><i class="flecha far fa-plus-square"></i></a>
                            </div>
                            </div>
                            <span class="w-25 text-center text-white" id="valor-total-prod${contador}"></span>
                            </div>`,
                            quantidade: 1,
                            id: contador,
                            valor: product.valor,
                        }
                        contador += 1
                        dados[nfirst].carrinho.push(linhaProd)
                        localStorage.setItem("Users", JSON.stringify(dados))
                        Swal.fire({
                            position: 'top-end',
                            color: "#FFF",
                            iconColor: '#8A48FA',
                            icon: 'success',
                            background: '#181818',
                            title: 'Produto adicionado ao carrinho com sucesso!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                }
            }
        }

        let indexValue = 1
        for (let indexCarousel = 1; indexCarousel <= 16; indexCarousel++) {

            const slidescard = document.querySelector(".sc" + (indexCarousel));
            const indicatorcard = document.querySelector(".ic" + (indexCarousel));
            const prevcard = document.querySelector(".pc" + (indexCarousel));
            const nextcard = document.querySelector(".nc" + (indexCarousel));

            prevcard.addEventListener("click", function () {
                prevSlidecard();
                updateCircleIndicatorcard();
            })

            nextcard.addEventListener("click", function () {
                nextSlidecard();
                updateCircleIndicatorcard();
            })

            function circleIndicatorcard() {
                for (let i = 1; i <= slidescard.children.length; i++) {
                    const div = document.createElement("div");
                    div.innerHTML = i
                    div.addEventListener("click", function () {
                        indexValue = div.id;
                        changeSlidecard();
                        updateCircleIndicatorcard();
                    })
                    div.id = i
                    if (i == 1) {
                        div.className = "active"
                    }
                    indicatorcard.appendChild(div)
                }
            }
            circleIndicatorcard()

            function indicateSlideCcard(element) {
                indexValue = element.id;
                changeSlidecard();
                updateCircleIndicatorcard();
            }

            function updateCircleIndicatorcard() {
                for (let i = 0; i < indicatorcard.children.length; i++) {
                    indicatorcard.children[i].classList.remove("active")
                }
                indicatorcard.children[indexValue - 1].classList.add("active")
            }

            function prevSlidecard() {
                if (indexValue == 1) {
                    indexValue = 3
                } else {
                    indexValue--
                }
                changeSlidecard()
            }
            function nextSlidecard() {
                if (indexValue == 3) {
                    indexValue = 1
                } else {
                    indexValue++
                }
                changeSlidecard();
            }

            function changeSlidecard() {
                for (let i = 0; i < slidescard.children.length; i++) {
                    slidescard.children[i].classList.remove("active")
                }
                slidescard.children[indexValue - 1].classList.add("active")
            }
        }
    });

let indexMaster = 0
const slidesMaster = document.querySelector(".slider").children;
const indicatorMaster = document.querySelector(".indicatorMaster");
const prevMaster = document.querySelector(".prevMaster");
const nextMaster = document.querySelector(".nextMaster");

prevMaster.addEventListener("click", function () {
    prevSlideMaster();
    updateCircleIndicatorMaster();
    resetTimerMaster();
})

nextMaster.addEventListener("click", function () {
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