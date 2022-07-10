fetch("../products.json")
    .then(response => response.json()).then(products => {

        const containerWomen = document.getElementById('container-women');

        for (let index = 0; index < products.length; index++) {

            const product = products[index];
            let productJson = JSON.stringify(product);
            const productCodified = btoa(encodeURIComponent(productJson));

            if (product.tipo == 'feminino') {

                const modeloDeProduto2 =
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

                containerWomen.innerHTML = containerWomen.innerHTML + modeloDeProduto2;
            }
        }
        for (let index = 0; index < products.length; index++) {

            if (products[index].tipo == 'feminino') {

                const product = products[index]
                let button = document.getElementById('btn-cart' + (index + 1))
                var contador = 1

                button.addEventListener("click", function () {
                    console.log(contador);
                    prod();
                })

                function prod() {

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
                    } else {

                        let dados = JSON.parse(localStorage.getItem("Users"))
                        let num = position.position

                        let linhaProd = {
                            estrutura: `<div class="row align-items-center" style="height: 200px; background-color: rgba(255, 255, 255, 0.048);">
                            <img class="w-25 h-75" src="${product.imagens[0]}" alt="">
                            <h2 class="w-25 text-center text-white fs-4 fw-normal">${product.nome}</h2>
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
                            valor: product.valor,
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
                    }

                }
            }

        }

        let indexteste = 0
        for (let indexxx = 0; indexxx < products.length; indexxx++) {

            if (products[indexxx].tipo == 'feminino') {

                const slidescard = document.querySelector(".sc" + (indexxx + 1));
                const indicatorcard = document.querySelector(".ic" + (indexxx + 1));
                const prevcard = document.querySelector(".pc" + (indexxx + 1));
                const nextcard = document.querySelector(".nc" + (indexxx + 1));

                prevcard.addEventListener("click", function () {

                    prevSlidecard();
                    updateCircleIndicatorcard();

                })

                nextcard.addEventListener("click", function () {

                    nextSlidecard();
                    updateCircleIndicatorcard();

                })

                function circleIndicatorcard() {
                    for (let i = 0; i < slidescard.children.length; i++) {
                        const div = document.createElement("div");
                        div.innerHTML = i + 1
                        div.addEventListener("click", function () {
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
                    let isLast = false;
                    if (indexteste == 2) {
                        indexteste = indexteste - 2
                    }
                    else {
                        indexteste = indexteste + 1
                    }
                    changeSlidecard();
                }
                function changeSlidecard() {
                    for (let i = 0; i < slidescard.children.length; i++) {
                        slidescard.children[i].classList.remove("active")
                    }
                    slidescard.children[indexteste].classList.add("active")
                }
            }
        }
    });