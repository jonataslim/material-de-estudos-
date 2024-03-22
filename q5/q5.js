function contar() {
    let texto = document.getElementById('texto').value
    let letra = document.getElementById('letra').value
    res = document.getElementById('res')
    texto = texto.toLowercase()
    letra = letra.toLowerCase()
    
    let contador = 0
    for (let i = 0; i < texto.length; i++)
        if (texto[i] === letra)
            contador++
    
    res.innerHTML = `a letra ${letra} aparece ${contador} vezes`
}