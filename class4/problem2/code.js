class Materia {
    constructor(nombre, profesor, alumnos){
        this.nombre = nombre;
        this.profesor = profesor;
        this.alumnos = alumnos;
    }

    getInformacion(nombre){
        return ` materia : ${this.nombre} <br>
                 profesor: ${this.profesor} <br>
                 alumnos: ${this.alumnos} <br>`
    }

    cantidadClases(nombre){

    }
}

let materia1 = new Materia("programacion", "carlos", ["roberto", "Cofla", "karen"])
let materia2 = new Materia("logica", "trigre", ["roberto", "Cofla", "karen"])
let materia3 = new Materia("matematica", "campeon", ["roberto", "Cofla", "karen"])

let materias = []
materias.push(materia1,materia2, materia3);
document.write(materia1.getInformacion("porgramacion"))


const cantidad = (nombre) => {
    let c = 0
    let mats = []
    let profes = []
    materias.forEach(element => {
        if(element.alumnos.includes(nombre)){
            c++
            mats.push(element.nombre);
            profes.push(element.profesor);
        }
    });
    return `${nombre} esta en ${c}   materias <br>
            las materias son: ${mats} <br>
            los profesores son ${profes}`;
}

let cant = cantidad("Cofla");
document.write(cant)
