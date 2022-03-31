
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c){
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  
  console.log(b);
}
c(8,9,10);
//10
//8
//8
//9
console.log(b);
console.log(x);
//10
//1

```

```javascript




console.log(bar); //1
console.log(baz); //2
foo(); //hola
function foo() { console.log('Hola!'); }
var bar = 1;
var baz = 2;







```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor) //franco
```

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
//Tony
//Franco 



```
```javascript

var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
//Theflash 
//reverse flash
//tony
//franco



```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2
"2" * "3" //23
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //NaN
7 / 0 //
{}[0]
parseInt("09")//09
5 && 2 //true
2 && 5 //true
5 || 0 //5
0 || 5 //5
[3]+[3]-[10] // 4 || [3,3]
3>2>1 //true
[] == [] //false
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);//se muestra en consola una variable que no está definida aún 
   console.log(foo()); //se muestra en la consola una función que no está definida aún,"no se la está invocando" 

   var a = 1; //se inicializa la variable
   function foo() {
      return 2; // la funcion retorna 2.
   }
}

test();
//se muestra indefinido porque la variable se inicializó después con un valor, pero si se inicializa despues el valor no lo guarda en un espacio de memoria global, solo guarda la referencia a la variable, lo cual permite que no nos salte error al llamarla antes de declararla 


//nos retorna 2 porque se esta mostrando la funcion ya invocada foo() y esa función retorna 2, por eso nos muestra lo que está retornando

```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
//undefined
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());/*invoca a la función getFullname que tiene como this el contexto de prop{} por eso no sale a buscar la variable fullname a otro contexto de ejecución*/

var test = obj.prop.getFullname;/*guarda la referencia a la función getFullname, es como si se creara una nueva funcion
getFullname: function() {
         return this.fullname;
         }
pero dentro de test y como test es una variable que está en el contexto de ejecucion global.
 su this.fullname sería var fullname = 'Juan Perez'
      */

console.log(test());







```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}
//1423
printing();
```
