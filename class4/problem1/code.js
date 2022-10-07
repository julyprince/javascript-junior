class Calculadora {
    constructor(){}
    sumar (num1, num2) {
        return parseInt(num1) + parseInt(num2)
    }
    
    restar (num1, num2){
        return parseInt(num1) - parseInt(num2)
    }
    
     multiplicar (num1, num2) {
        return parseInt(num1) * parseInt(num2)
    }
    
    dividir (num1, num2) {
        return parseInt(num1) / parseInt(num2)
    }
    
    potenciar(num1, exp) {
        return parseInt(num1) ** parseInt(exp)
    }

    raizCuadra(num) {
        return Math.sqrt(num)
    }

    raizCubica(num){
        return Math.cbrt(num);
    }

}

calculadora = new Calculadora();
document.write(calculadora.sumar(23,1) + "<br>") 
document.write(calculadora.restar(10,5) + "<br>") 
document.write(calculadora.multiplicar(5,5) + "<br>") 
document.write(calculadora.dividir(20, 5) + "<br>") 
document.write(calculadora.potenciar(10, 2) + "<br>") 
document.write(calculadora.raizCuadra(100) + "<br>") 
document.write(calculadora.raizCubica(90) + "<br>") 
