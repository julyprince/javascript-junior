const materias = {
    fisica: [90,6,3,"fisica"], // asistencia,promedio,trabajos, nombre
    matematica:[75,5,3,"matematica"],
    programacion:[30,6,1,"programacion"],
    logica:[100,8,3,"logica"]
}
const aprobo = ()=>{
    for( materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3])

        if(asistencias>=90){
            console.log("%c asistencia en orden", "color:green")
        } else{
            console.log("%c falta de asistencias", "color:red")
        }

        if(promedio>=7){
            console.log("%c promedio en orden", "color:green")
        } else{
            console.log("%c promedio no aprobado", "color:red")
        }

        if(trabajos>=3){
            console.log("%c trabajos en orden", "color:green")
        } else{
            console.log("%c falta de trabajos", "color:red")
        }
    }
}

aprobo();