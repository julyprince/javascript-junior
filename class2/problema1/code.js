let free = false;
const validarCliente = (time) => {
    let edad = prompt("cual es tu edad???")
    if (edad >= 18 ){
        if(time >= 2 && time < 7 && free ==false){
            alert("puedes ingresar gratis eres la primera persona")
            free = true;
        } else {
            alert(`Son las ${time}:00hrs y puedes pasar, pero tines que pagar tu entrda`)
        }
        
    } else {
        alert("no puedes ingresar porque eres menor de edad")
    }
}


validarCliente(23);
validarCliente(24)
validarCliente(0.2)
validarCliente(1)
validarCliente(2)
validarCliente(3)