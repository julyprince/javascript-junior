
let cadena = "cadena de prueba"

resultado = cadena.concat("  concatenado")
document.write(resultado + "<br>"); 

r = cadena.startsWith("cadena")
document.write(r + "<br>")

r1 = cadena.endsWith("Cadena")
document.write(r1 + "<br>")

r2 = cadena.includes("prueba")
document.write(r2 + "<br>")

r3 =cadena.indexOf("de")
document.write(r3 + "<br>")

r4 = cadena.lastIndexOf("de")
document.write(r4 + "<br>")

let cad1 = "Hola como estas"
res1 = cad1.split(" ")
document.write(res1 + "<br>")

/**metodos de arrays
 * let nombres = ["maria", "pedro", "jorge"]
 * nombres.pop() elimina el ultimo elemento
 * nombres.shift() elimina el primer elelemto
 * .push("juancito","carlos") agrega elem al final
 * .reverse() invierte el orden
 * .unshift(1,3) agrega 1 o 2 elementos al inicio
 * .sort() devuelve agrreglo ordenado menor a mayor
 * .splice(pos,3) empezando de la posicion elimino 3 elementos
 * . splice(3,1,"","") empezando de pos3 elimino 1elem agrego
 * 
 *  num=["er","ty"]
 * .join(" - ") une todos los elementos er - ty
 * .slice(0,2) devuelve del cero al 1, 2noincluye
 * 
 * .filter() crea nuva array segun condicion
 * .foreach() reccore el array
 */

let animales = ["perro", "gato", "mono","pajaro", "camello"];
ress = animales.filter(animal => animal.length >4)

document.write(ress + "<br>");

ress2 = animales.forEach(animal => 
document.write(animal + "  "));

/***
 * Math
 * Math.sqrt() raiz cuadrada
 * .cbrt() raiz cubica
 * .max(2,3,6) numero mas grande
 * .min(4,3,2,5) numero minmo
 * .random() aleatorio entre 0 a 1
 * 
 * numero = Math.random()*100 // numeros de 1 a 100
 * .round(numero) lo redondeo
 * 
 * .floor(4.999) redondea a 4
 * 
 * .PI ratio de circunferencia
 * SQRT2
 * .E euler
 * .LN2 logaritmo de 2
 */
