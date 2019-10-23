let mensagem = "";
var confLogin = new Boolean(false);
var confCadastro = new Boolean(false);
spanLog = new Object();
spanCad = new Object();
let txtLog = "";
let txtCad = "";

function mensagemAlerta(mensagem) {
    document.getElementById("mensagemAlerta").innerHTML = mensagem;
}

function validarLogin() {
    let nome = document.getElementById("txtNome").value.trim();
    let senha = document.getElementById("txtSenha").value.trim();

    if (nome == '') {
        document.getElementById('modalSnakeMensagem').style.display = 'block';
        mensagemAlerta("Usuário Incorreto!");
        document.getElementById("txtNome").focus();
    } else if (senha == '') {
        document.getElementById('modalSnakeMensagem').style.display = 'block';
        mensagemAlerta("Senha Incorreta!");
        document.getElementById("txtSenha").focus();
    } else {
        document.getElementById('modalSnakeMensagem').style.display = 'block';

        mensagemAlerta("Login Realizado com Sucesso!");
        
    }
}

function validarCadastro() {
    let nomeCad = document.getElementById('txtNomeCadastro').value.trim();
    let emailCad = document.getElementById('txtEmailCadastro').value.trim();
    let senhaCad = document.getElementById('txtSenhaCadastro').value.trim();
    let confSenhaCad = document.getElementById("txtConfSenhaCadastro").value.trim();

    if (nomeCad == '') {
        document.getElementById('modalSnakeMensagem').style.display = 'block';
        mensagemAlerta("Digite o nome do jogador!");
        document.getElementById("txtNomeCadastro").focus();
    } else if (emailCad == '' || document.getElementById("txtEmailCadastro").value.indexOf('@') == -1 || document.getElementById("txtEmailCadastro").value.indexOf('.') == -1) {
        document.getElementById('modalSnakeMensagem').style.display = 'block';
        mensagemAlerta("Digite o e-mail do jogador!");
        document.getElementById("txtEmailCadastro").focus();
    } else if (senhaCad == '') {
        document.getElementById('modalSnakeMensagem').style.display = 'block';
        mensagemAlerta("Digite a senha do jogador!");
        document.getElementById("txtSenhaCadastro").focus();
    } else if (senhaCad.length < 8) {
        document.getElementById('modalSnakeMensagem').style.display = 'block';
        mensagemAlerta("Senha com no minímo 8 caracteres!");
        document.getElementById("txtSenhaCadastro").focus();
    } else if (confSenhaCad == '') {
        document.getElementById('modalSnakeMensagem').style.display = 'block';
        mensagemAlerta("Repita a senha!");
        document.getElementById("txtConfSenhaCadastro").focus();
    } else if (confSenhaCad != senhaCad) {
        document.getElementById('modalSnakeMensagem').style.display = 'block';
        mensagemAlerta("As senhas não coincidem!");
        document.getElementById("txtConfSenhaCadastro").focus();
    } else {
        document.getElementById('modalSnakeMensagem').style.display = 'block';
        mensagemAlerta("Cadastro Realizado com Sucesso!");
        cadastroFim();
        document.getElementById('modalSnakeCadastro').style.display = 'none';        
    }
 
}