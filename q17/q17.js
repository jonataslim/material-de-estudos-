function trocar() {
    let frase = document.getElementById('frase').value
    let p1 = document.getElementById('p1').value
    let p2 = document.getElementById('p2').value
    
    let pinguim = frase.split(' ')
    for (let i=0; i<pinguim.length; i++){
        if (pinguim[i] == p1){
            pinguim[i] = p2
        }
    }
    let nova = pinguim.join(' ')
    document.getElementById('res').innerHTML = `${nova}`
}