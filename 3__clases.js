// Ejemplo de una clase "Coche"
class Coche {
    // las propiedades las define e inicializa el "constructor"
    constructor (marca, any){
        this.marca = marca;
        this.any = any;
    }
    // método que devuelve la antigüedad del coche
    edad__coche(){
        var fecha = new Date();
        return fecha.getFullYear() - this.any;
    }
}
// Instancias a la clase "Coche"
// Añadimos los datos de las propiedades del propio objeto que asigna el constructor
var coche1 = new Coche("Seat", 2014);
var coche2 = new Coche("Fiat", 2010);
var coche3 = new Coche("BMW", 2005);
var coche4 = new Coche("KIA", 2018);
// llamada al mismo método de la clase por cada uno de los objetos, pero devuelve diferente edad, ya que la propiedad "any" es diferente para cad uno de ellos
console.log(coche1.edad__coche());
console.log(coche2.edad__coche());
console.log(coche3.edad__coche());
console.log(coche4.edad__coche());