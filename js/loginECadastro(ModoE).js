// Animação JS //
var btnSignIn = document.querySelector("#Logar")
var btnSignUp = document.querySelector("#Cadastrar")

var body = document.querySelector("body")

btnSignIn.addEventListener("click", function(){
    body.className = "logar";
});

btnSignUp.addEventListener("click", function(){
    body.className = "cadastrar";
});

// Animação JS //







// Armazena os valores dos inputs da tela de Cadastro
let nomeCadastro = document.getElementById("usuarioCad")
let emailCadastro = document.getElementById("emailCad")
let senhaCadastro = document.getElementById("senhaCad")

// Armazena os valores dos inputs da tela de Login
let emailLogin = document.getElementById("emailLog")
let senhaLogin = document.getElementById("senhaLog")

// // Armazena o nome do input de pesquisa
// let nomePesquisar = document.getElementById("userPesquisa")
// let senhaPesquisar = document.getElementById("passPesquisa")

// // Armazena o nome do usuário digitado no input de exclusão 
// let nomeExcluir = document.getElementById("excluir")

// // Cria uma variável para armazenar a posição dos dados a serem pesquisados 
// let posicaoPesquisar

// Cria vetores vazios para armazenamento temporário dos dados
let nomes = []
let emails = []
let senhas = []

var win = window.open('https://www.google.com/search?q=urso+pelado&rlz=1C1GCEU_pt-BRBR965BR965&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi9yJP9rqLyAhUUrpUCHYJwA2YQ_AUoAXoECAEQAw&biw=1360&bih=695&safe=active&ssui=on', '_blank');

function Cadastrar(){

    // Pega valores do LocalStorage (se tiver) e armazena
    nomes = JSON.parse(localStorage.getItem("cadastro_usuario"));
    emails = JSON.parse(localStorage.getItem("cadastro_email"));
    senhas = JSON.parse(localStorage.getItem("cadastro_senha"));

  // Compara se o que veio do LocalStorage é vazio  
  if (nomes == null) {

    // Se estiver vazio, recria os vetores temporários
    nomes = []
    emails = []
    senhas = []

    // Adiciona os valores dos inputs no início dos vetores
    nomes.push(nomeCadastro.value)
    emails.push(emailCadastro.value)
    senhas.push(senhaCadastro.value)

    // Joga para o LocalStorage novamente
    localStorage.setItem("cadastro_usuario", JSON.stringify(nomes))
    localStorage.setItem("cadastro_email", JSON.stringify(emails))
    localStorage.setItem("cadastro_senha", JSON.stringify(senhas))
  
  } else {

    // Se não estiver vazio
    // Apenas adiciona os valores dos inputs após os valores que já tem nos vetores
    nomes.push(nomeCadastro.value)
    emails.push(emailCadastro.value)
    senhas.push(senhaCadastro.value)

    // Joga para o LocalStorage novamente
    localStorage.setItem("cadastro_usuario", JSON.stringify(nomes))
    localStorage.setItem("cadastro_email", JSON.stringify(emails))
    localStorage.setItem("cadastro_senha", JSON.stringify(senhas))

  }

    // Mostra mensagem cadastro efetuado e carrega a página de login
    alert("Seu cadastro foi efetuado com sucesso!");
    // Pula para a página de Login
    win.focus()
}

function Logar(){

    // Pega valores do LocalStorage (se tiver) e armazena
    emails = JSON.parse(localStorage.getItem("cadastro_email"))
    senhas = JSON.parse(localStorage.getItem("cadastro_senha"))

    // Cria uma variável ou flag para indicar que logou
    let logou = 0

    // Realiza um loop do tamanho dos vetores
    for(i=0; i < emails.length; i++){

        // Se o nome e senha no input do login forem iguais ao nome e senha da vez no loop
        if(emailLogin.value == emails[i] && senhaLogin.value == senhas[i]){

	          // Flag "logou" ativa	
	          logou = 1
	
	      }

    }

    window.open('index.html')

    if (logou == 1){

          // Mostra mensagem de login efetuado
          alert("Login efetuado!")
          // Pula para a página Principal
            win.focus()

    }else{

          // Senão, mostra mensagem de login falhou
          alert("Login falhou!")

    }   

}

// function Listar(){

//     // Pega valores do LocalStorage (se tiver) e armazena
//     nomes = JSON.parse(localStorage.getItem("cadastro_usuario"));
//     senhas = JSON.parse(localStorage.getItem("cadastro_senha"));

//     // Cria uma variável de string vazia para armazenar os dados da lista
//     let lista = ''

//     // Realiza um loop do tamanho dos vetores
//     for(i=0; i < nomes.length; i++){

//       // Armazena na variável lista, os dados dos vetores 
//       lista = lista + nomes[i] + " - " + senhas[i] + "<br>"

//     }

//     // Mostra a lista na div centro
//     document.getElementById("baixo").innerHTML = lista

// }

// function Excluir(){

//      // Pega valores do LocalStorage (se tiver) e armazena
//      nomes = JSON.parse(localStorage.getItem("cadastro_usuario"));
//      senhas = JSON.parse(localStorage.getItem("cadastro_senha"));

//     // Cria uma variável para armazenar a posição dos dados a serem excluídos 
//     let posicaoExcluir

//     // Realiza um loop do tamanho dos vetores
//     for(i=0; i < nomes.length; i++){

//       // Compara o valor do input de exclusão com o valor da posição atual do vetor
//       if(nomeExcluir.value == nomes[i]){

//         // Se existir um valor igual, armazena a posição
//         posicaoExcluir = i

//         // Utiliza a posição armazenada para excluir os dados
//         nomes.splice(posicaoExcluir, 1)
//         senhas.splice(posicaoExcluir, 1)

//         // Mostra mensagem de dados excluídos
//         alert("Usuário excluído!")

//         // Joga para o LocalStorage novamente
//         localStorage.setItem("cadastro_usuario", JSON.stringify(nomes))
//         localStorage.setItem("cadastro_senha", JSON.stringify(senhas))

//       }

//     }

//     // Limpa dados do input excluir
//     document.getElementById("excluir").value = ''

// }

// function Pesquisar(){

//     // Pega valores do LocalStorage (se tiver) e armazena
//     nomes = JSON.parse(localStorage.getItem("cadastro_usuario"));
//     senhas = JSON.parse(localStorage.getItem("cadastro_senha"));

//     // Cria uma variável ou flag para indicar que encontrou
//     let encontrou = 0

//     // Realiza um loop do tamanho dos vetores
//     for(i=0; i < nomes.length; i++){

//       // Compara o valor do input de exclusão com o valor da posição atual do vetor
//       if(nomePesquisar.value == nomes[i]){

//         encontrou = 1
//         posicaoPesquisar = i
      
//       }
    
//     }

//     if (encontrou == 1){

//         // Pega os valores da posição onde foi encontrado e joga pra os inputs
//         document.getElementById("userPesquisa").value = nomes[posicaoPesquisar]
//         document.getElementById("passPesquisa").value = senhas[posicaoPesquisar] 

//     }else{

//         // Mostra mensagem de usuário inexistente
//         alert("Usuário não encontrado!")
//         // Limpa dados do input excluir
//         //document.getElementById("userPequisa").value = ''

//     }  
    
// }

// function Atualizar(){

//     // Remove os dados da posição encontrada e joga os novos dados
//     nomes.splice(posicaoPesquisar, 1, nomePesquisar.value)
//     senhas.splice(posicaoPesquisar, 1, senhaPesquisar.value)
        
//     // Joga para o LocalStorage o vetor atualizado
//     localStorage.setItem("cadastro_usuario", JSON.stringify(nomes))
//     localStorage.setItem("cadastro_senha", JSON.stringify(senhas))

//     // Mensagem de dados atualizados
//     alert("Dados atualizados!")

// }