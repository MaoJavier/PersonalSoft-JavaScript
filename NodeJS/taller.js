// Cualquier carácter entre la B mayúscula y la Z mayúscula, excepto las vocales.
let cadena = "Hola";
let expresion = /[A-Z][^AEIOU]/g;
let resultado = cadena.match(expresion);
console.log(resultado);

/* A veces nos intersa no sólo saber si una cadena cumple un determinado patrón, 
sino extraer determinadas partes de él. Por ejemplo, si una fecha está en el formato "27/11/2012" 
puede interesarnos extraer los números. Una expresión regular que vale para esta cadena puede ser
*/
let cadena = "27/11/2012";
let expresion = /[\d]/g;
let resultado = cadena.match(expresion);
console.log(resultado);


// Programe una expresión regular que de este texto  "'hola tu' tururú" obtenga ["'hola tu'", "'"]
let cadena = "'hola tu' tururú";
let expresion = /\u0027{1}|hola tu/gu;
let resultado = cadena.match(expresion);
console.log(resultado);

// Programe una expresión regular que de este texto   "papa" tururú" obtenga ["papa", "pa"]
let cadena =  "papa tururú";
let expresion = /pa/g;
let resultado = cadena.match(expresion);
console.log(resultado);

// Programe una expresión regular que de este texto  "java es güay" obtenga ["java"]
let cadena =  "java es güay";
let expresion = /\w{4}/g;;
let resultado = cadena.match(expresion);
console.log(resultado);

// Programe una expresión regular que de este texto  "11 millas 10 km" obtenga ["10"]
let cadena =  "11 millas 10 km";
let expresion = /\d{2}(?= km)/g;
let resultado = cadena.match(expresion);
console.log(resultado);

// Programe una expresión regular que de este texto  "11 millas 10 km" obtenga ["10 km"]
let cadena =  "11 millas 10 km";
let expresion = /\w+ km/g;
let resultado = cadena.match(expresion);
console.log(resultado);

// Programe una expresión regular que de este texto   "11.22" obtenga [".22"]
let cadena =  "11.22";
let expresion = /(?<=\.)\d+/g;
let resultado = cadena.match(expresion);
console.log(resultado);

// Programe una expresión regular que de este texto    "11 km 12 km 14 m" obtenga ["14"]
let cadena =  "11 km 12 km 14 m";
let expresion = /\d+(?= m)/g;
let resultado = cadena.match(expresion);
console.log(resultado);




