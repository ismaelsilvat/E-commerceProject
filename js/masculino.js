fetch("../test.json")
    .then(response => response.json()).then(produtos => {
        console.log(produtos)



        const containerProdutos = document.getElementById('container-produtos');





        for (let index = 0; index < produtos.length; index++) {

            const produto = produtos[index];


            let produtoTransformadoJson = JSON.stringify(produto);

            const produtoTransformadoJsonCodificado = btoa(unescape(encodeURIComponent(produtoTransformadoJson))); 
            
            // encode a string

            //  const decodedData = atob(encodedData)

            console.log(produtoTransformadoJsonCodificado);

            if (produto.tipo == "masculino") {
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
                        <button class="btn-cart" onclick="addCart()"><i class="fas fa-cart-plus"></i></button>
                    </div>`
    
    
    
                containerProdutos.innerHTML = containerProdutos.innerHTML + modeloDeProduto;
                
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