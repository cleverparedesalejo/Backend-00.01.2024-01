function ejercicio28(){
    let suma = 0;
    let i = 1;

    do {
        suma = suma + 1;
        i++;
    }   while (i <= 100);

    return suma;
}
const resultado = ejercicio28();
console.log(resultado);