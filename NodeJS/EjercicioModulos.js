const modules = {};

function require(moduleName) {
    return modules[moduleName];
}

modules['figura1.js'] = (function () {
    
    function area (x){
        return Math.round(Math.PI * (x * x));
    }
    function perimetro(x){   
        return Math.round(Math.PI * 2 * x);
    }
    
    function dibujar(radio) {
        return figura = ` Se dibujo un circulo con un area de ${area(radio)} unidades al cuadrado y un perimetro de ${perimetro(radio)} unidades lineales `
    }
    
    return {
        dibujar
    }
}());

modules['figura2.js'] = (function () {
    
    function area (x){
        return Math.round(x * x);
    }
    function perimetro(x){   
        return Math.round(4 * x);
    }
    
    function dibujar(lado) {
        return figura = ` Se dibujo un cuadrado con un area de ${area(lado)} unidades al cuadrado y un perimetro de ${perimetro(lado)} unidades lineales `
    }
    
    return {
        dibujar
    }
}());

const objetoCirculo = require('figura1.js');
const objetoCuadrado = require('figura2.js');

let mapFiguras = new Map([  
    ["cuadrado",objetoCuadrado.dibujar(5)], 
    ["circulo",objetoCirculo.dibujar(2)]
]); 
console.log(mapFiguras.get("cuadrado"));
console.log(mapFiguras.get("circulo"));

let setFiguras = new Set([  
    objetoCuadrado.dibujar(15), 
    objetoCirculo.dibujar(7)   
]); 
for (let figura of setFiguras) {
    console.log(figura);
}
