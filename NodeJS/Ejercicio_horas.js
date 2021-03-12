// Your code here!
  
/*
 * Ejemplo 3 Manejo de Horas en JavaScript
 
 Tienes un reloj digital con LEDs de 7 segmentos. Un día, al despertar de un sueño de ciencia-ficción,
 te preguntas: ¿cuántos segmentos se han encendido DESPUÉS DE X segundos, desde la posición 00:00:00?
 Considera que en cada segundo, todos los led se apagan y luego se encienden los correspondientes al instante actual.
 
 */

let numeroSegmentos;
resolver(1);
console.log(numeroSegmentos);

function resolver (segundos)
{
while (segundos>=0) {
 let hora_actual= new Date();
 hora_actual = segundosToDate(segundos);
    for(j = 0; j < 6; j++){
                console.log("entro");
                numero = hora_actual.toLocaleTimeString().charAt(j);
                switch(numero){
                    case 0: case 6: case 9: numeroSegmentos += 6;break;
                    case 1: numeroSegmentos += 2;break;
                    case 2: case 3: case 5: numeroSegmentos += 5;break;
                    case 4: numeroSegmentos += 4;break;
                    case 7: numeroSegmentos += 3;break;
                    case 8: numeroSegmentos += 7;break;
                }
    }


 segundos--;
 }
}

function segundosToDate(segundos) {
  let hora= new Date();
  
  var hour = Math.floor(segundos / 3600);
  hour = (hour < 10)? '0' + hour : hour;
  
  hora.setHours(hour);
  
  var minute = Math.floor((segundos / 60) % 60);
  minute = (minute < 10)? '0' + minute : minute;
  
  hora.setMinutes(minute);
  
  
  var second = segundos % 60;
  second = (second < 10)? '0' + second : second;
  
  hora.setSeconds(second);
  
  return hora;
}

