//arrow function
const pesquisaCEP = async () => {
    const cep = document.getElementById('cep').value;
    //passando o cep para a api via cep
    //usando template script ``````
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    //a const dados espera um retono de algo da url(url)
    const dados = await fetch(url);

    const endereco = await dados.json();

    preencherFormulario(endereco);

};
// função para preencher o formulario
const preencherFormulario = (endereco) => {
        
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}

/* function pesquisaCEP(){
    alert("Acorda mariquinha")
} */

/* Criando um evento do input CEP */
document.getElementById('cep').addEventListener('focusout', pesquisaCEP);
