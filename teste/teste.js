function somar() {
    let numero1 = document.getElementById('numero1').value
    let numero2 = document.getElementById('numero2').value
    res = document.getElementById('res')
    let resultado = numero1 + numero2
    res.innnerHTML = `${resultado}`

}