//ejercicio 1---------------------------------------------------------------------
/*
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
/*
const objeto = {

    precio: 400,
    descuento: 10,

    neto: function () {
        const aplicarDescuento = (this.precio * this.descuento) / 100;
        return this.precio - aplicarDescuento;
    }

};
console.log(objeto.neto());
*/

//ejercicio 3--------------------------------------------------------------------

//clase nombre piedra (class o function)
//con dos propiedades (masa y volumen)
//con un metodo densidad que calcula masa / volumen

/*
class Piedra {
    constructor(masa, volumen) {
        this.masa = masa;
        this.volumen = volumen;

    }


calcularDensidad() {
    return this.masa / this.volumen;
}
}

//instanciar un objeto de esta clase dandole valor a su masa y volumen 

const piedraUno = new Piedra(250, 25);
const piedraDos = new Piedra(333, 12);

//y ejecuta el metodo densidad

const densidad = piedraUno.calcularDensidad();

console.log(`La densidad de la ${piedraUno} es: ${densidad}`);
console.log(`La densidad de la ${piedraDos} es: ${densidad}`);
*/

//ejercicio 4-------------------------------------------------------------

//crear clase usando (function)
//con dos propiedades: (nombre y saldo)
//con dos metodos: (ingresar y retirar)
// ingresar incrementa el saldo
//retirar reduce el saldo
//no se puede sacar cantidad > saldo

/*
function Cuenta(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.ingresar = function(cantidad) {
        this.saldo += cantidad;
        console.log(`Has ingresado ${cantidad}. Nuevo saldo: ${this.saldo}`);
    this.retirar = function(cantidad) {
        if(cantidad < this.saldo) {
            this.saldo -= cantidad;
            console.log(`Has retirado ${cantidad}. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente");
        }
    }


    }
};

const miCuenta = new Cuenta("Carlos", 7000);

miCuenta.ingresar(500);

console.log(miCuenta.saldo);
miCuenta.retirar(6800);
miCuenta.retirar(900);
console.log(miCuenta.saldo);
miCuenta.ingresar(27460);
console.log(miCuenta.saldo);
*/

//ejercicio 5------------------------------------------------------------------------------
/*
class Ficha {
    constructor(nombre, sesiones, numsesiones) {
        this.nombre = nombre;
        this.sesiones = sesiones;
        this.numsesiones = numsesiones;
    }
}
*/
function Ficha(nombre, sesiones, numsesiones) {
    this.nombre = nombre;
    this.sesiones = sesiones;
    this.numsesiones = numsesiones;
    this.anotar = function(sesiones, numsesiones) {
        this.sesiones = sesiones + 1;
        console.log(`sumas ${sesiones} km hoy. en total tienes ${this.sesiones} km recorridos.`);
        this.numsesiones += numsesiones;
        console.log(`tienes ${numsesiones} hechas.`);
    }

};
const fichaUno = new Ficha("Carlos", 0, 0);

fichaUno.anotar(9);
