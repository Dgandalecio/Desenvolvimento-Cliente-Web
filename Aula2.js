/*2) For in "pega" os valores de acordo com seus indices.
for of "pega" os valores de acordo com seus proprios valores.

3) Esse código em JavaScript implementa um loop while que gera um número
crescente de linhas até que a variável número seja maior que 10.

let i = 0; A variável i é começa com o valor 0. Esta variável será usada como contador.

let número = prompt('Insira um valor'); Mostra uma caixa de diálogo solicitando
ao usuário que insira um valor. O valor inserido pelo usuário é armazenado na variável número.

while (numero <= 10 )O início de um loop while, que continuará executando o bloco de
código enquanto o valor de número for menor ou igual a 10.

document.write('<p>Linha ' + i + '</p>'); Iimprime uma nova linha no documento, 
contendo o texto 'Linha ' + i. O valor de i é o contador que começa em 0 e aumenta a cada
iteração, exibindo o número da linha.

i++; soma + 1
numero++; soma + 1
*/
4) let vetor = [];
let quantidade;
do{
quantidade = Number(prompt(“Insira a quantidade de números pares de (2 à 18): “));
} while(quantidade < 2 || quantidade > 18);
let numero = 2;
let i = 0;
do{
vetor.push(numero);
numero += 2;
i++;
} while ( i < quantidade);
document.write("<p>Vetor de números pares: " + vetor.join(', ') + "</p>");

5) function converterMaiusculas(texto) {
return texto.toUpperCase();
}
function contarPalavras(texto) {
return texto.split(' ').length;
}
function substituirPalavra(texto, antiga, nova) {
return texto.replace(antiga, nova);
}
let frase = prompt("Digite uma frase:");
let fraseMaiuscula = converterMaiusculas(frase);
let numeroDePalavras = contarPalavras(frase);
let fraseSubstituida = substituirPalavra(frase, "JavaScript", "JS");
document.write("<p>Frase original: " + frase + "</p>");
document.write("<p>Frase em maiúsculas: " + fraseMaiuscula + "</p>");
document.write("<p>Número de palavras na frase: " + numeroDePalavras + "</p>");
document.write("<p>Frase após substituir 'JavaScript' por 'JS': " + fraseSubstituida + "</p>");
