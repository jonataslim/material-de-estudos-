function somar() {
    let n1 = document.getElementById('numero1').value
    let n2 = document.getElementById('numero2').value
    resultado = parseInt(n1) + parseInt(n2)
    document.getElementById('res').innerHTML = `a resposta é ${resultado}`

}