function remover() {
    const frase = document.getElementById('frase').value
    const nova = frase.split(' ').join('')
    document.getElementById('res').innerHTML = nova 
}