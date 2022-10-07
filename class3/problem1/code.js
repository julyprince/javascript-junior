class Celular {
    constructor(color, peso, rpantalla, rcamara, ram){
        this.color = color;
        this.peso = peso;
        this.rpantalla = rpantalla;
        this.rcamara = rcamara;
        this.ram = ram;
        this.encendido = false;
    }
    prender(){
        if(this.encendido == false){
            this.encendido= true;
            alert("celuar esta encendido")
        }
    }
    apagar(){
        if(this.encendido == true){
            this.encendido= false;
            alert("celular apagado")
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("celular reiniciando")
            this.encendido = true;
        } 
    }
    
    tomarFoto(){
        if(this.encendido == true){
            alert(`tomando fotos`)
        } else {alert("El celular esta pagado")}
    }
    grabar(){
        if(this.encendido == true){
            alert(`Grabando videos`)
        } else {alert("El celular esta pagado")}
    }
    info(){
        return `Color: ${this.color} <br>
                Peso: ${this.peso} <br>
                resolucion pantalla: ${this.rpantalla} <br>
                resolucion camara: ${this.rcamara} <br>
                ram: ${this.ram} <br>`
    }
}
celular1 = new Celular("rojo","150g","5pul","hd","1GB")
celular2 = new Celular("verde","155g","6pul","full -hd","8GB")
celular3 = new Celular("negro","200g","5.9pul","hd","16GB")

document.write(`
        ${celular1.info()}<br>
        ${celular2.info()}<br>
        ${celular3.info()}<br>
        `);

//celular1.prender();
//celular1.tomarFoto();
//celular1.grabar();
//celular1.reiniciar();
//celular1.apagar();