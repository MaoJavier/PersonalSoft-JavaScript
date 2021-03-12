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
  hora_actual = segundosToDate(segundos);
  console.log("hora_actual "+hora_actual);
  expresion = /[0-9]/g;
  hora = hora_actual.match(expresion);
  console.log("hora string "+hora);
     /*
     for(j = 0; j < 6; j++){
                 
                 numero = hora_actual.toLocaleTimeString().charAt(j);
                 switch(numero){
                     case 0: case 6: case 9: numeroSegmentos += 6;break;
                     case 1: numeroSegmentos += 2;break;
                     case 2: case 3: case 5: numeroSegmentos += 5;break;
                     case 4: numeroSegmentos += 4;break;
                     case 7: numeroSegmentos += 3;break;
                     case 8: numeroSegmentos += 7;break;
                 }
     }*/
 
 
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
   
   return hora.toLocaleTimeString();
 }
 
 