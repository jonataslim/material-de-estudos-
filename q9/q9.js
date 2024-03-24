function area(){
    let largura = document.getElementById('larg').value
    let comprimento = document.getElementById('comp').value 
    areaRetangulo = (largura * comprimento)
    document.getElementById('res').innerHTML = `a area do retangulo é igual a ${areaRetangulo}`
}