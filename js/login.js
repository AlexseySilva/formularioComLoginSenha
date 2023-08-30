function verificar() {
    let email = document.querySelector("#usuario").value;
    let senha = document.querySelector("#senha").value;


    if (email == "" || senha == "") {
        alert("Obrigatorio o preenchimento do e-mail");

        document.querySelector("#usuario").focus();

    } else {

        pesquisar(email,senha);
    }
}
function pesquisar(x,y){
    
    if(x == "alexsoadsk8@hotmail.com" && y == "123"){
        
        window.open("./assets/index.html");
        window.close();
       
    }else{

        alert("Email ou senha invalidos")
        document.querySelector("#usuario").focus
    }
}