function converter() {
    let celcius =  document.getElementById('celsius').value 
    farenrrait = (celcius * 9/5 + 32)
    document.getElementById('res').innerHTML = `fica ${farenrrait} farenrrait`
}