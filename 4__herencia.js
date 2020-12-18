// Ejemplo de una clase "Vehiculo" (superclase)
class Vehiculo{
    // constructor
    constructor(marca, color, any){
        this.marca = marca;
        this.color = color;
        this.any = any;
    }
    // método que devuelve la antigüedad del vehículo
    edad__vehiculo() {
        var fecha = new Date();
        return fecha.getFullYear() - this.any;
    }
}
// Ejemplo de una clase "Coche"(subclase) que hereda de "Vehiculo"(superclase)
class Coche extends Vehiculo{
    constructor(marca, color, any, num_puertas){
        // super: hereda las props de la superclase "Vehiculo"
        super(marca, color, any);
        this.num_puertas = num_puertas;
    }
    // método específico de esta clase
    abrir_maletero(){
        return "Has abierto maletero!";
    }
}
// Instancias a la clase "Coche"
var coche1 = new Coche("Seat", "verde", 2015, 5);
// llamada a método del padre 
console.log("Mi coche tiene " + coche1.edad__vehiculo() + " años");
// llamada a método propio
console.log(coche1.abrir_maletero()); 
// Acceso a una prop de la clase padre y de la clase hija
console.log("Mi coche es de color " + coche1.color + ". Y tiene " + coche1.num_puertas + " puertas.");
