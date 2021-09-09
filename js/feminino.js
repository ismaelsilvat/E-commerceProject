fetch("../test.json")
    .then(response => response.json()).then(produtos => {

        const containerAll = document.getElementById('container-all');

        for (let index = 0; index < produtos.length; index++) {

            const produto = produtos[index];

            let produtoTransformadoJson = JSON.stringify(produto);


            const produtoTransformadoJsonCodificado = btoa(escape(encodeURIComponent(produtoTransformadoJson))); 
            
            // encode a string

            //  const decodedData = atob(encodedData)

            if (produto.tipo == 'feminino') {
                
                const modeloDeProduto2 =
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
                        <span class="preço">${produto.valor}</span>
                        <span class="juros">${produto.juros}</span>
                        <a href="projeto.html?produto=${produtoTransformadoJsonCodificado}" class="btn">Ver produto</a>
                        <a class="btn-cart" id="btn-cart${index + 1}" style="cursor: pointer"><i class="fas fa-cart-plus"></i></button>
                    </div>`
    
                containerAll.innerHTML = containerAll.innerHTML + modeloDeProduto2;
            }

        }   
            for(let index = 0; index < produtos.length; index++){

                if (produtos[index].tipo == 'feminino') {
                    
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
                                    <h2 class="w-25 text-center text-white fs-4 fw-normal">${produto.nome}</h2>
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
                        for(let indexxx = 0; indexxx < produtos.length; indexxx++){

                            if (produtos[indexxx].tipo == 'feminino') {
                                
                                const slidescard = document.querySelector(".sc" + (indexxx + 1));
                                
                                const indicatorcard = document.querySelector(".ic" + (indexxx + 1));
                                
                                const prevcard = document.querySelector(".pc" + (indexxx + 1));
                                
                                const nextcard = document.querySelector(".nc" + (indexxx + 1));
                                
                                
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
                            
                        }
                
                    
    });