function confirmar() {
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let senha2 = document.getElementById('senha2').value 
    let erros = []
    if (!email || !senha || !confirmarSenha) {
        erros.push('Por favor, preencha todos os campos.');
    }
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        erros.push('O e-mail deve conter "@" e um ponto.');
    }
    if (senha.length < 8 || !/[0-9]/.test(senha) || !/[a-zA-Z]/.test(senha)) {
        erros.push('A senha deve ter pelo menos 8 caracteres e incluir números e letras.');
    }
return erros

    if (erros.length === 0) {
    console.log("Formulário validado com sucesso. Dados podem ser enviados.");
    } else {
    console.log("O formulário contém os seguintes erros:");
    erros.forEach(function(erro) {
        console.log("- " + erro);
    });
}
}