// Foram utilizados os comandos IF, ELSE como lógica de condições e o CONSOLE.LOG para informar ao usuário as consistências
// Operadores utilizados:
//    >    - Maior que
//    <=   - Menor ou igual que
//    >=   - Maior ou igual que
//    &&   - condição  E dentro do IF

// Inicio de declaração de variáveis
let msnErro = ". **A PEÇA NÃO SERÁ CADASTRADA**" // Complento de mensagem de erro para evidar repetição
let msnConfirma = " dentro do padrão permitido. **A PEÇA SERÁ CADASTRADA**" // Complento de mensagem de confirmação para evidar repetição
let pesoPeca  =  153  // peso deve ser maior que 100
let nomePeca  =  "Fita isolante"  // tamanho do nome deve ser maior que 2 caracteres
let quantidadePecas  =  5  // quantidade de peças não pode ser maior que 10
// Final de declaração de variáveis

// Inicio daas consistências
if (quantidadePecas  <=  10) { // Consitência de quantidades
    console.log("Quantidade" + msnConfirma)

    if (nomePeca.length  >  2) { // Consitência de caractéres
        console.log("Numero de caractéres" + msnConfirma)
       
        if (pesoPeca  >=  1 && pesoPeca  <=  100) { // Consitência de peso
            console.log("Peso" + msnConfirma)

        } else { // Erro de peso
            console.log("Peso informado fora do padrão exigido (peso minimo de 1g e máximo de 100g), você informou: " + pesoPeca + msnErro)

        }
    
    } else { // Erro de caractéres
        console.log("Nome da peça fora do padrão permitido de caracteres o minimo e 3, você informou: " + nomePeca.length + msnErro)

    }
   
} else { // Erro de quantidades
    console.log("Quantidade de peças fora do padrão exigido (minímo de 1 o máximo de 10), você informou: " + quantidadePecas + msnErro)

}
// Fim das consistências