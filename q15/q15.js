function checar(){
    let frase = document.getElementById('frase').value
    let frasenova = frase.toLowerCase()
    frasenova = frasenova.replace(/ /g, '')

    let split = frasenova.split('')
    let reverse = split.reverse()
    let join = reverse.join('')

    if (join === frasenova)
    document.getElementById('res').innerHTML = `${frase} é um palindromo`
    else
    document.getElementById('res').innerHTML = `${frase} não é um palindromo`
    
}