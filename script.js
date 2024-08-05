let matriz = [
[1, 2, 3], 
[4, 5, 6], 
[7, 8, 9]
];

d = {nome: "joao"}

console.log(matriz[0][1])
console.log(typeof(matriz))
console.log(typeof(d))

StringComAspasDuplas = "Bruno"; 
StringComAspasSimples = 'Bruno';
StringComCrase = `Bruno`; /// Pode ser usada para juntar com os sifrões, como abaixo 

console.log("")
console.log(`O nome inserido é ${StringComCrase}`) /// Saída: O nome inserido é Bruno 
console.log("")

/// As strings se comportam e possuem propriedades de arrays e objetos. Pode-se realizar os mesmos comandos com strings que você poderia
/// com uma array, como .length, console(string[i]) e etc

/// Algumas funções: 
stringComEspaços = "     Bruno     " 
stringSemEspaços = stringComEspaços.trim() /// O trim só tira os espaços do início e do final, não os do meio 
console.log(stringSemEspaços) /// Saída: "Bruno" e não "   Bruno    "
console.log(stringSemEspaços[0]) /// Saída: "B" (primeiro elemento)
console.log(stringSemEspaços.length) /// Tamanho: 5, lembrando que espaçõs vazios também contam, nesse caso eles não existem 
console.log(stringComEspaços.length) /// Tamanho: 5, lembrando que espaçõs vazios também contam, nesse caso eles existem 
console.log("")
/// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
stringMaiscula = "BRUNO" 
stringMaisculaReduzida = stringMaiscula.toLowerCase() /// 
console.log(stringMaisculaReduzida) /// Saída: "bruno "

stringMinuscula = "bruno" 
stringMinusculaAumentada = stringMinuscula.toUpperCase() 
console.log(stringMinusculaAumentada) /// Saída: "BRUNO "
console.log(" ")

/// Se eu quisesse aumentar só a primeira 
function aumentarPrimeiraLetra(string) {
    string.trim()
    string.toLowerCase() /// Diminui tudo 
    string = string.charAt(0).toUpperCase() + string.slice(1)
    return string; 
}

console.log(aumentarPrimeiraLetra("bruno"))
///---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/// Método: Se eu quiser ter o length sem os espaços do meio 
let stringRuim = "Ba na na" /// Eu quero length = 6 (tamanho sem espaços)

function LengthSemEspaços(string) {

    let tamanho = 0 

    for (let i = 0; i < string.length; i++){
        let caracter = string[i]

        if (!(caracter === " ")) {  /// Botar todas a expressão sobre o !, se eu botar só antes de caracter, ele vai negar a string, transformando ela em -> False 
            tamanho += 1
        }
    }

    return tamanho 
}
console.log(`O tamanho sem os espaços do meio / quantidade de letras dessa string é ${LengthSemEspaços(stringRuim)}`)


/// Mesma coisa da minha só que do jeito de Cauã. Forma reduzida. 
let stringDeCaua = 'Bruno cagou nas calças'

function removerEspaco(theString){
    let newString = theString.trim().split(' '); /// Separa a string toda vez que tem os espaços, removendo os espaços 
    newstring = newstring.join(''); /// Junta todas as strings que estavam separadas e põem todas em uma só 

    return newstring.length /// Length da string sem os espaços 
    
}




