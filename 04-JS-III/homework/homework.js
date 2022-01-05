// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  array = [1, 2, 3, 4, 5];
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  array = [1, 2, 3, 4, 5];
  return array[4];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  array = [1, 2, 3, 4, 5];
  return array.length();
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var resul = [];
  array = [1, 2, 3, 4];
  for(i = 0; i < array.length; i++){
    resul[i] = array[i] += 1;
  }
  return resul;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array = ['casa', 'amarillo', 'color'];
  elemento = 'carro';
  array.push(elemento);
  return elemento;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array = ['casa', 'amarillo', 'color'];
  elemento = 'carro';
  array.unshift(elemento);
  return elemento;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  palabras = ['Hello', 'world!'];
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  elemento = 2;
  array = [1, 2, 3, 4, 5];
  return array.includes(elemento);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for(i = 0; i < numeros.length; i++){
    suma += numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  resultadosTest = [5, 3, 1, 8];
    
  let suma = 0;

  var b = resultadosTest.length ;

  for (let i = 0; i < resultadosTest.length; i++) {

       suma = (suma + resultadosTest[i]);}
       let prom = (suma/resultadosTest.length);
       if (resultadosTest.length=0){
        return prom = 0;
      }else{
        return prom;
    }
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  numeros = [28, 50, 40, 200, 20, 44, 100, 153];
  var mayor = [0];
  
  for (i = 1; i < numeros.length; i++) {
			if (numeros[i] > mayor) {
				mayor = numeros[i];
			}
		}
		return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
   var mult = 1;
   var numeros = [1, 4, 7];
   for(i = 0; i < numeros.length; i++){
       if(numeros[i] != 0){
           mult = (numeros[i] * mult);
       }
   }
   return mult;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var arreglo = [1, 4, 7, 19, 22, 44, 33];
   var resul = [];
   for(i = 0; i < arreglo.length; i++){
       if(arreglo[i] > 18){
           resul.push(arreglo[i]);
       }
   }
   return resul;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  numeroDeDia = prompt('ingrese un numero del dia 1 - 7');
  caso = 0;

  switch (caso) {

    case 1:
      document.write('seleccionaste el día domiengo. es fin de semana');
      break;
    case 2:
      document.write('seleccionaste el día lunes. día laboral');
      break;
    case 3:
      document.write('seleccionaste el día martes. día laboral');
      break;
    case 4:
      document.write('seleccionaste el día miercoles. día laboral');
      break;
    case 5:
      document.write('seleccionaste el día jueves. día laboral');
      break;
    case 6:
      document.write('seleccionaste el día viernes. día laboral');
      break;
    case 7:
      document.write('seleccionaste el día sabado. es fin de semana');
      break;
    default:
      break;
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  arreglo = [1, 1, 1, 1, 1];
  if(arreglo[0] == arreglo[1]){
    if(arreglo[1] == arreglo[2]){
      if(arreglo[2] == arreglo[3]){
        if(arreglo[3] == arreglo[4]){
          if(arreglo[4] == arreglo[5]){
            return true;
          }
        }
      }
    }
  }
  else{
    return false;
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var result = [];
  array = [20, 33, 56, 193, 123, 100, 98, 143, 121, 186];

  for(i = 0; i < array.length; i++){
    if(array[i] > 100){
      result[i] = array[i];
    }
  }
  return result;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
