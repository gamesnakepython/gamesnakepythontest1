let tabela = [];

function cadastroFim(){

    let user = document.getElementById('txtNomeCadastro').value.trim();
    let emailUser = document.getElementById('txtEmailCadastro').value.trim();
    let pwd = document.getElementById('txtSenhaCadastro').value.trim();

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
    
    document.getElementById('modalSnakeMensagemCadastro').style.display = 'block';

}

