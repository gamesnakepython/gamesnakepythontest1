let cadastroJogadores = [];
let cadastroJogadoresJson = [];

function cadastroFim(){

    let nameUser= document.getElementById('txtNomeCadastro').value.trim();
    let emailUser = document.getElementById('txtEmailCadastro').value.trim();
    let passwordUser = document.getElementById('txtSenhaCadastro').value.trim();

    cadastroJogadores.push({
        jogador: nameUser,
        email: emailUser,
        senha: passwordUser
    });

    //Converte a tabela que esta em JSON em string
    localStorage.setItem("cadastroJogadoresJson", JSON.stringify(cadastroJogadores))

    //Converte a tabala que esta em string numa estrutura JSON
    cadastroJogadoresJson = JSON.parse(localStorage.getItem("cadastroJogadoresJson"));
    
    document.getElementById('modalSnakeMensagemCadastro').style.display = 'block';

}

function login() {
    return JSON.parse(localStorage.getItem('cadastroJogadoresJson')).filter(cadastroJogadoresJson => cadastroJogadoresJson.jogador === jogador)
}



