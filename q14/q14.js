function fatorial() {
    let n = document.getElementById("numero").value;
    let fat = 1;
    for (let i=1; i<=n; i++)
        fat = fat * i;
    document.getElementById("resultado").innerHTML = 
        `Fatorial(${n}) = ${fat}`;
}