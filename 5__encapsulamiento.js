// Ejemplo de una clase "Coche"
class Coche {
    // las propiedades las define e inicializa el "constructor"
    constructor(marca, any) {
        this.marca = marca;
        this.any = any;
        this.nivel__combustible = 0; // cada vez que se instancia a la clase, el deposito esta vacío
    }
    // método que devuelve la antigüedad del coche
    edad__coche() {
        var fecha = new Date();
        return fecha.getFullYear() - this.any;
    }
    // método que gestiona el depósito de combustible
    repostar(litros){
        var total = this.nivel__combustible + litros;
        if (total > 100){ // si el depósito está lleno
            this.nivel__combustible = 100;
            return "Depósito lleno!!";
        }else{
            this.nivel__combustible = total;
            return "El depósito tiene " + total + " litros";
        }
    }
}
// Instancias a la clase "Coche"
var coche1 = new Coche("Seat", 2015);
console.log(coche1.edad__coche()); // edad: 5
console.log(coche1.repostar(20)); // deposito 20
console.log(coche1.repostar(20)); // deposito 40
console.log(coche1.repostar(70)); // deposito lleno
// -------------------------------------------------------------------------------
// La propiedad "nivel__combustible" esta expuesta en la interfaz que usamos para interactuar con nuestro objeto, pudiendo así modificarlo
// Gracias a la encapsulación, podemos hacer que nuestra propiedad sea privada, es decir, que sea imposible interactuar con ella, si no es a través del objeto
// COMPROBACIÓN
console.log(coche1);
coche1.nivel__combustible = 0;
console.log(coche1);

// Ejemplo de la clase anterior pero con la propiedad "nivel__combustible" privada
class Coche_Encapsul {
    // propiedad privada
    #nivel__combustible = 0;
    // las propiedades las define e inicializa el "constructor"
    constructor(marca, any) {
        this.marca = marca;
        this.any = any;
    }
    // método que devuelve la antigüedad del coche
    edad__coche() {
        var fecha = new Date();
        return fecha.getFullYear() - this.any;
    }
    // método que gestiona el depósito de combustible
    repostar(litros) {
        var total = this.#nivel__combustible + litros;
        if (total > 100) { // si el depósito está lleno
            this.#nivel__combustible = 100;
            return "Depósito lleno!!";
        } else {
            this.#nivel__combustible = total;
            return "El depósito tiene " + total + " litros";
        }
    }
}
console.log("--------------------------------------------");
// Instancias a la clase "Coche_Encapsul"
var coche2 = new Coche_Encapsul("Seat", 2015);
console.log(coche2.edad__coche()); // edad: 5
console.log(coche2.repostar(20)); // deposito 20
console.log(coche2.repostar(20)); // deposito 40
console.log(coche2.repostar(70)); // deposito lleno
// -------------------------------------------------------------------------------
// COMPROBACIÓN 
console.log(coche2); 
coche1.#nivel__combustible = 0; // ERROR, no podemos acceder a la propiedad PRIVATE


