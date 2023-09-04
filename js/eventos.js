document.getElementById('nome').addEventListener('keyup', function () {
    let nome = document.getElementById('nome').value;
    document.getElementById('card_nome').innerHTML = nome;
});

document.getElementById('cargo').addEventListener('keyup', function () {
    let cargo = document.getElementById('cargo').value;
    document.getElementById('card_cargo').innerHTML = cargo;
});

document.getElementById('email').addEventListener('keyup', function () {
    let email = document.getElementById('email').value;
    document.getElementById('card_email').innerHTML = email;
});

document.getElementById('telefone').addEventListener('keyup', function () {
    let telefone = document.getElementById('telefone').value;
    document.getElementById('card_telefone').innerHTML = telefone;
});

function mascara(telefone) {
    if (telefone.value.length == 0)
        telefone.value = '(' + telefone.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
    if (telefone.value.length == 3)
        telefone.value = telefone.value + ') '; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.

    if (telefone.value.length == 8)
        telefone.value = telefone.value + '-'; //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.

}

document.getElementById("dl-png").onclick = function () {
    const screenshotTarget = document.getElementById('example-table');
    html2canvas(screenshotTarget).then((canvas) => {
        const base64image = canvas.toDataURL('image/png');
        var anchor = document.createElement('a');
        anchor.setAttribute("href", base64image);
        anchor.setAttribute("download", "image.png");
        anchor.click();
        anchor.remove();
    });
};

const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', function () {
    let value = telefoneInput.value.replace(/\D/g, '');
    if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    }
    telefoneInput.value = value;
});