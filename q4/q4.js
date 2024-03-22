function checar() {
    let email = document.getElementById('email').value

    if (email.includes("@") && email.includes("."))
    document.getElementById('res').innerHTML = `seu email esta valido`
    else
    document.getElementById('res').innerHTML = `seu email esta invalido`
}