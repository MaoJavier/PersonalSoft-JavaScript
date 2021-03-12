let buffer = new ArrayBuffer(16);

let arreglo = new Int8Array(buffer);

arreglo=[10,9,19,8,1,12,14,24,34,54,5,4,2,99,2,3,1,0];

 
quicksort(0,(arreglo.length-1));

function quicksort(primero,ultimo){
    //definimos variables indices
    i = primero
    j = ultimo
 
    //sacamos el pivote de la mitad del arreglo
    pivote = arreglo[parseInt((i+j)/2)];
 
    //repetir hasta que i siga siendo menor que j
    do{
 
        //mientras arreglo[i] sea menor a pivote
        while(arreglo[i]<pivote)             
            i++;        //mientras j sea mayor a pivote         
        while(arreglo[j]>pivote)
            j--;
 
        //si i es menor o igual a j, los valores ya se cruzaron
        if(i<=j){
 
            //variable temporal auxiliar para guardar valor de arreglo[j]
            aux=arreglo[j];
 
            //intercambiamos los valores de arreglo[j] y arreglo[i]
            arreglo[j] = arreglo[i]
            arreglo[i] = aux
 
            // incrementamos y decrementamos i y j
            i++;
            j--;
        }
 
    }while(i<j);
 
        //si primero es menor a j llamamos la funcion nuevamente
        if(primero<j){           
            quicksort(primero,j);
        }       
        //si ultimo es mayor que i llamamos la funcion nuevamente       
        if(ultimo>i){
            quicksort(i,ultimo);
        
        }
}

console.log(arreglo);