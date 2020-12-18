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

// ----------------------------------------------------------------
// Ejemplo de una clase "Usuario"
class Usuario {
    // constructor: SÓLO inicializa (en este caso) el atributo/prop "nick" y "email"
    constructor(nick, email){
        this.nick = nick;
        this.email = email;
    }
    // el password lo asignamos al objeto mediante este método (SETTER)
    set_Pass(password){
        this.pass = password;
    }
    // método que nos devuelve el nick del objeto (GETTER)
    get_Nick(){
        return this.nick;
    }
    // métodos de login y logout
    login(){
        return "Has iniciado sesión!";
    }
    logout(){
        return "Has cerrado sesión!";
    }
}

// Instancias a la clase "Usuario"
var usuario1 = new Usuario("armand","armando@gmail.com");
// llamada al método que asigan el password al objeto
usuario1.set_Pass("a1234a");
// comprobaciones
console.log(usuario1); // vemos que se ha asignado el password
// getNick
console.log(usuario1.get_Nick());
// login y logout
console.log(usuario1.login());
console.log(usuario1.logout());