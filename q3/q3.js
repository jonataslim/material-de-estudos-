function parimpar() {
    let num = document.getElementById("num").value;
    if (num%2 === 0)
    document.getElementById('res').innerHTML = `${num} é par`
    else
    document.getElementById('res').innerHTML = `${num} é impar`
}