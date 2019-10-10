let tabela = [];

function cadastroFim(){

    let user = document.getElementById('txtNomeCadastro').value;
    let emailUser = document.getElementById('txtEmailCadastro').value;
    let pwd = document.getElementById('txtSenhaCadastro').value;

    tabela.push({
        usuario: user,
        email: emailUser,
        senha: pwd
    });

    //Converte a tabela que esta em JSON em string
    localStorage.setItem("tabUsuarios", JSON.stringify(tabela))

    //Converte a tabala que esta em string numa estrutura JSON
    let tabTeste = JSON.parse(localStorage.getItem("tabUsuarios"));

    //console.log(tabTeste[0].usuario);
    

}

