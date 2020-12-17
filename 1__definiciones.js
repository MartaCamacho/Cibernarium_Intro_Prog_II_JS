// PROGRAMACIÓN ORIENTADA A OBJETOS (POO) en Javascript
// def: Podemos definir un objeto como una forma ordenada de agrupar datos (propiedades/atributos) y operaciones (métodos) a utilizar sobre esos datos 

// TERMINOLOGÍA: 
// - Clase: Plantilla/Fábrica que define las características del objeto
// - Instancia: Proceso la de creación del objeto
// - Propiedad ó Atributo: Una característica del objeto
// - Método: Una capacidad ó acción del objeto
// - Constructor: Método especial, se llama automáticamente en la instancia de una clase. Generalmente se utiliza para inicializar las propiedades del objeto
// - Herencia 
// - Encapsulamiento 
// - Abstracción 
// - Polimorfismo

// En JS, podemos definir un objeto sin tener una instancia a una clase (objeto literal)
// var persona1 = { nombre: "Armand", apellido: "Laplana", edad: 40, estatura: 180 };
// mejor visibilidad con saltos de línea
var persona1 = { 
    nombre: "Armand", 
    apellido: "Laplana", 
    edad: 40, 
    estatura: 180 
};
console.log(persona1); // imprimimos todo el objeto 
console.log(persona1.estatura); // imprime sólo la propiedad "estatura"
console.log(persona1.nombre + " mide " + persona1.estatura + " cm");
// ---------------------------------------------------------------------------
// Crear un objeto (instancia) usando "new"
var persona2 = new Object();
persona2.nombre = "María";
persona2.apellido = "González";
persona2.edad = 40;
persona2.estatura = 180;
console.log(persona2); // imprimimos todo el objeto 
console.log(persona2.estatura); // imprime sólo la propiedad "estatura"
console.log(persona2.nombre + " mide " + persona2.estatura + " cm");
// ---------------------------------------------------------------------------
// Clases predefinidas en JS
// Array 
var coches = new Array("Seat","Fiat","BMW","KIA"); 
console.log(coches.length);  // propiedad de la clase Array(longitud)
console.log(coches.push("Audi")); // método de la clase Array (inyecta otro valor)
console.log(coches);
// String
var texto = new String("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id maxime cumque asperiores minus. Error eveniet cumque rerum dicta ratione accusantium placeat sequi similique velit. Soluta pariatur reprehenderit distinctio laboriosam culpa.")
console.log(texto.length); // propiedad de la clase String(cantidad de caract.)
console.log(texto.search("ipsum")); // método que devuelve la posición (number) de la palabra

