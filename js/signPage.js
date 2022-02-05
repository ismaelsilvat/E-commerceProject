var btnSignIn = document.getElementById("login")
var btnSignUp = document.getElementById("cadastro")
var content = document.querySelector(".content")

btnSignIn.addEventListener("click", function(){
  content.classList.add("logar")
  });
  
btnSignUp.addEventListener("click", function(){
  content.classList.remove("logar")
});

let credencial = document.getElementById("emailLog")
let senhaLogin = document.getElementById("senhaLog")

let cadastrar = document.getElementById("cadastrar")
let login = document.getElementById("logar")

cadastrar.addEventListener('click', function(){
  cadastro();  
})

let logou = 0
let emailNewPassword;

function containerNewPassword(){
  let containerNewPassword = document.getElementById('containerNewPassword')
  let sweetAlertContainer = document.querySelector(".swal2-container")
  sweetAlertContainer.style.display = "none";
  containerNewPassword.style.display = "flex";
  content.style.opacity = "0.8";
  document.querySelector(".imgbg").style.opacity = "0.3"
}

function newPassword(){
  let userS = JSON.parse(localStorage.getItem("Users"))
  let newPassword = document.getElementById("newPassword1")
  let newPassword2 = document.getElementById("newPassword2")
  let lis = document.querySelectorAll(".label-informacao li")
  let containerNewPassword = document.getElementById('containerNewPassword')

  if(newPassword.value == newPassword2.value){
    console.log(newPassword.value == newPassword2.value);
    userS.forEach(element =>{
      if(element.email == emailNewPassword){
        element.senha = newPassword.value
      }
    })
    newPassword.style.border = "0"
    newPassword2.style.border = "0" 
    lis[0].innerHTML = ""
    lis[1].innerHTML = ""
    localStorage.setItem("Users", JSON.stringify(userS))
    containerNewPassword.style.display = "none";
    content.style.opacity = "1";
    document.querySelector(".imgbg").style.opacity = "0.9"
    Swal.fire({
      position: 'top-end',
      background: "#151515",
      color: "#FFF",
      iconColor: "#8A48FA",
      icon: 'success',
      title: 'Senha modificada com sucesso!',
      showConfirmButton: false,
      timer: 1500
    })
    content.classList.add("logar")
  }
  else{
    newPassword.style.border = "2px solid red"
    newPassword2.style.border = "2px solid red" 
    lis[0].innerHTML = "Senhas não correspondem!"
    lis[1].innerHTML = "Senhas não correspondem!"
  }
}

function cadastro(){
  let nomeCadastro = document.getElementById("usuarioCad")
  let emailCadastro = document.getElementById("emailCad")
  let senhaCadastro = document.getElementById("senhaCad")
  let userS = JSON.parse(localStorage.getItem("Users"))

  if (userS == null) {
  credencial = []
  
  credenciais = {
    nome: nomeCadastro.value,
    email: emailCadastro.value,
    senha: senhaCadastro.value,
    carrinho: [],
    }
  
    credencial.push(credenciais)
    localStorage.setItem("Users", JSON.stringify(credencial))
    Swal.fire({
      position: 'top-end',
      background: "#151515",
      color: "#FFF",
      iconColor: "#8A48FA",
      icon: 'success',
      title: 'Usuário cadastrado com sucesso!',
      showConfirmButton: false,
      timer: 1500
    })
    nomeCadastro.value = ''
    emailCadastro.value = ''
    senhaCadastro.value = ''
    content.classList.add("logar")
  } else {
    let contador = 0;
    userS.forEach(element => {
      if(emailCadastro.value == element.email){
        contador++ 
        emailNewPassword = element.email
      }
    })
    if(contador != 0){
      Swal.fire({
        background: "#151515",
        color: "#FFF",
        iconColor: "#8A48FA",
        icon: 'error',
        title: 'Ocorreu um erro!',
        text: 'Email já cadastrado. Tente novamente com outro email!',
        footer: '<a href="javascript:containerNewPassword()">Esqueceu sua senha?</a>'
      })
    }
    else{
      credenciais = {
        nome: nomeCadastro.value,
        email: emailCadastro.value,
        senha: senhaCadastro.value,
        carrinho: [],
      }
      userS.push(credenciais)
      Swal.fire({
        position: 'top-end',
        background: "#151515",
        color: "#FFF",
        iconColor: "#8A48FA",
        icon: 'success',
        title: 'Usuário cadastrado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })
      nomeCadastro.value = ''
      emailCadastro.value = ''
      senhaCadastro.value = ''
      localStorage.setItem("Users", JSON.stringify(userS))
      content.classList.add("logar")
      }
  }
}

  login.addEventListener('click', function(){
    Logar();
  })
   
function Logar(){
  let userS = JSON.parse(localStorage.getItem("Users"))

  let infos = {
    position: 0,
    login: 0,
    id: 0,
  }

  if( 'admin' == credencial.value  || 'ADMIN' == credencial.value 
  || 'Admin' == credencial.value && 'admin' == senhaLogin.value 
  || 'ADMIN' == senhaLogin.value || 'Admin' == senhaLogin.value){
      window.open('addProd.html', '_self')
  } else{
      if(userS != null){
        for(i=0; i < userS.length; i++){
          if(credencial.value == userS[i].email && senhaLogin.value == userS[i].senha){
            logou = 1
            infos.position = i
          } 
        }
    } else {
      for(i=0; i < 1; i++){
        if(credencial.value == userS[i].email && senhaLogin.value == userS[i].senha){
          logou = 1
          infos.position = i
        } 
      }
    }
    if (logou == 1){
      window.open('index.html', '_self')
      localStorage.setItem('infoLog', JSON.stringify(infos))
    } else{
      emailNewPassword = credencial.value
      Swal.fire({
        background: "#151515",
        color: "#FFF",
        iconColor: "#8A48FA",
        icon: 'error',
        title: 'Ocorreu um erro!',
        text: 'Credenciais incorretas. Tenta novamente!',
        footer: '<a href="javascript:containerNewPassword()">Esqueceu sua senha?</a>'
      })
    }   
  }
}