//Case 1
//este es un comentario de una linea
/*comentario
multilinea
*/

//las variables son una caja que almacena un valor 
var miNombre;

//almacenar un valor en la variable creada
miNombre = "Cesar" ;

//Ejercicio 1:
//Crear una variable edad y guardar un nombre

var edad;

console.log(edad); // esto muestra la consola

//Ejercicio 2:
//Incializar 3 variables a, b y c con los valores 
//5, 10 y "i am a"

// // cambia el codigo denajo de esta linea 
var a = 5;
var b = 10;
var c = "I am a";
// // cambia solo el codigo encima de esta linea

a = a + 1;
b = b + 5;
c = c + "string!";
console.log(a);
console.log(b);
console.log(c);

//Clase 2
var nombre = prompt('ingrese su nombre:  ');
console.log('Hola, Nombre');

//Clase 3 
//Ejercicio 3
//Calcular el area y el perimetro de un cuadrado 
let lado = 40;
let area = lado * lado;
let perimetro = lado * 4;
console.log('El area de un cuadrado es: ',area);
console.log('El perimetro de un cuadrado es: ',perimetro);

/*

2-Cambia de unidades. En este ejercicio debes convertir a segundso
una medida de tiempo dada en horas
*/
var horas = 1;
var segundos = horas* 60*60;
console.log('La cantidad de segundos que hay es: ' ,segundos)
/*
3- Crear una variable que tengan guardado su año de nacimiento y que 
devuelve cuantos años tendra a fin de año*/
var añoNac = 2007;
var edad = 2023-añoNac;
console.log('Su edada fin de año es: ' ,edad)

/*4- Crear dos variables que tengan guardados numeros decimales 
y devolver la suma, resta, multiplicacion y potencia*/
let num1=3.5;
let num2=1.5;

var suma = num1+num2;
