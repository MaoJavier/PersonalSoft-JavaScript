
    
  const facturas =[
        {id:1,precio:30000},
        {id:2,precio:50000},
        {id:3,precio:100000}
        ];
    const descuento=10;
    const descuentoFact=facturas.map(factura=>({
        ...factura,precio:factura.precio*(1-(descuento/100))
    }))
    console.log("FACTURAS CON DESCUENTO DEL "+descuento+"%");  
    console.log(descuentoFact);  
