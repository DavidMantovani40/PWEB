var numero1 = prompt('Digite o primeiro valor');
var numero2 = prompt('Digite o segundo valor');
var numero3 = prompt('Digite o terceiro valor');
var resultado ;

function calcularMaior(numero1, numero2, numero3) {
    resultado = Math.max(numero1, numero2, numero3);
    return resultado;
}
if (numero1 == numero2 & numero1 == numero3)
    document.write('Os 3 numeros são iguais, ou seja, todos são ' + 'o numero ' + numero1);
else {
    if (numero1 == numero2 & numero1 != numero3 & numero3 != numero1)
        document.write('Os primeiro e o segundo numero são iguais, ou seja, ambos são ' + 'O numero UM é  s ' + numero1 + 'E o numero DOIS é   ' + numero2);
    else {
        if (numero1 == numero3 & numero1 != numero2)
            document.write('Os primeiro e o terceiro numero são iguais, ou seja, ambos são ' + ' O numero UM ' + numero1 + 'E o numero TRES' + numero3);
        else {
            if (this.numero2 == this.numero3 & numero2 != numero1)
                document.write('Os segundo e o terceiro numero são iguais, ou seja, ambos são ' + 'O numero DOIS ' + numero2 + 'E o numero TRES ' + numero3);
            else
                document.write('O Maior numero é ' + resultado );
        }
    }
}