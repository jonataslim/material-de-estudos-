function checar (){
    let senha = document.getElementById('senha').value
    if (senha.length >= 6)
    document.getElementById('res').innerHTML = `sua senha tem caracteres suficientes`
    else
    document.getElementById('res').innerHTML = `sua senha nao tem caracteres suficientes`
}