const ejercicio18 = (numeroCD) => {
    let precioCliente = 0;
    let gananciaVendedor = 0;

    if (numeroCD <=9)
    {
        precioCliente = numeroCD * 10;
    }

    if (numeroCD >= 10 && numeroCD <= 99)
    {
        precioCliente = numeroCD * 8;
    }

    if (numeroCD >= 100 && numeroCD <= 499)
    {
        precioCliente = numeroCD * 7;
    }

    if (numeroCD >= 500)
    {
        precioCliente = numeroCD * 6;
    }
    gananciaVendedor = precioCliente * 0.0825;
    return{
        precioCliente: precioCliente,
        gananciaVendedor: gananciaVendedor,
    };
};
const resultado = ejercicio18(10);
console.log(resultado);