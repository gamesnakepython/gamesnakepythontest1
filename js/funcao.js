function upTelaCadastro(){
    document.getElementById('modalSnakeCadastro').style.display = 'block';
    document.getElementById('modalSnake1').style.display = 'none';
}

function pararOlhos(logo){
    clearTimeout(olhos);
    document.getElementById('olhosPiscando').src = ('image/logo.png');
}

function piscarOlhos(logo){
    setTimeout(function () { document.getElementById('olhosPiscando').src = ('image/logof.png') }, 200);
    document.getElementById('sonsStart').play();
    setTimeout(function () { document.getElementById('olhosPiscando').src = ('image/logo.png') }, 500);
}
function intervaloPiscarOlhos(logo){
    setInterval(function () { piscarOlhos(logo) }, 12000);
}


function playAudio(audio) {
    document.getElementById(audio).play();
}

function pauseAudio(audio) {
    document.getElementById(audio).pause();
    document.getElementById(audio).currentTime = 0;
}

function validar() {
    var nome = document.getElementById("txtNome").value.trim();
    var senha = document.getElementById("txtSenha").value.trim();

    if (nome == '') {
        alert("Usuario Invalido")
        document.getElementById("txtNome").focus();
    } else if (senha == '') {
        alert("Senha Incorreta")
        document.getElementById("txtSenha").focus();
    }
}