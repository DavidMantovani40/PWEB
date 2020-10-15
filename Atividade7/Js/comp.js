var numero1 = prompt('Digite o primeiro valor');
var numero2 = prompt('Digite o segundo valor');
var numero3 = prompt('Digite o terceiro valor');
var resultado;

function calcularMaior(numero1, numero2, numero3) {
    this.resultado = Math.max(numero1, numero2, numero3);
    return this.resultado;
}
if (this.numero1 == this.numero2 & this.numero1 == this.numero3)
    document.write('Os 3 numeros são iguais, ou seja, todos são ' + this.numero1);
else {
    if (this.numero1 == this.numero2 & this.numero1 == calcularMaior(numero1, numero2, numero3))
        document.write('Os primeiro e o segundo numero são iguais, ou seja, ambos são ' + calcularMaior(this.numero1, this.numero2, this.numero3));
    else {
        if (this.numero1 == this.numero3 & this.numero1 == calcularMaior(numero1, numero2, numero3))
            document.write('Os primeiro e o terceiro numero são iguais, ou seja, ambos são ' + calcularMaior(this.numero1, this.numero2, this.numero3));
        else {
            if (this.numero2 == this.numero3 & this.numero2 == calcularMaior(numero1, numero2, numero3))
                document.write('Os segundo e o terceiro numero são iguais, ou seja, ambos são ' + calcularMaior(this.numero1, this.numero2, this.numero3));
            else
                document.write(calcularMaior('o maior numero é' + this.numero1, this.numero2, this.numero3));
        }
    }
}