const fs = require('fs');
function ex5(archivo,texto)
{
    fs.writeFile(archivo,texto,function(error){
        if (error)
          console.log(error);
        else
          console.log('El archivo fue creado');
      });
    fs.readFile(archivo, (error,datos) => {
        if (error)
          console.log(error);
        else
          console.log(datos.toString());
      });
}
ex5(process.argv[2],process.argv[3]);




  