// Ejemplo de un objeto (Usuario) con sus propiedades/atributos y sus métodos 
var Usuario = {
    // propiedades: Datos del Objeto
    nombre: "Antonio",
    apellido: "Fernández",
    email: "antonio@gmail.com",
    password: "a1234a",
    // métodos: ACCIONES que puede realizar el objeto
    login: function() {
        return "Login correcto!!!";
    },
    get_nombre_completo: function(){
        // variable this hace referencia al propio objeto
        return this.nombre + " " + this.apellido;  
    }
}
// interacción con el objeto
console.log(Usuario); // imprime el objeto entero 
console.log(Usuario.email); // imprime el atributo "email"
console.log(Usuario.login()); // llamada al método login
console.log(Usuario.get_nombre_completo()); // llamada al método "get_nombre_completo"
console.log(Usuario.nombre = "Pepe");// accedo (modifico) al atributo "nombre"
