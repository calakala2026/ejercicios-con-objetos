//ejercicio 1---------------------------------------------------------------------

//objeto para guardar calificaciones
//el objeto tiene tres materias
class Alumno {
    constructor(nombre, ingles, programacion, html) {
        this.nombre = nombre
        this.ingles = ingles;
        this.programacion = programacion;
        this.html = html;
        //this.media = media;
        
    }
    notaMedia() {
       let notaMedia = this.ingles + this.programacion + this.html / 3;
       //return ["La nota media de " + ${this.nombre} + "es..." + ${this.media}];

    
}
}

const alumno1 = {
    nombre: "Carlos",
    ingles: 8,
    programacion: 6,
    html: 7,
    notaMedia() {
       let notaMedia = this.ingles + this.programacion + this.html / 3;
       return notaMedia 
       
}
}
//console.log(`La nota media de ${alumno1.nombre} es ${alumno1.notaMedia()}`);



/*
let alumno1 = new Alumno(Carlos,8,7,9);


console.log(alumno1);
console.log(`${this.nombre} "tiene" ${this.media}`);
*/


//ejercicio 2-------------------------------------------------------------------

const objeto = {
    name: vestido,
    precio: 400,
    descuento: 10%,
    
    let descuentoeneuros = this.objeto.precio * 10 / 100
    let preciofinal = this.objeto.precio - this.objeto.descuentoeneuros 
}
