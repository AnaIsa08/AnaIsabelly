var inputSalario = document.querySelector("#ganho-mes") // selecionei salario

var inputHoras = document.querySelector("#horas-dia") // selecionei as horas

function calcularValorHora(){ // criei a função
    var salario = inputSalario.valueAsNumber // valor do salario
    var horas = inputHoras.valueAsNumber // valor das horas
    var resultado = document.querySelector("#resposta")

    //valores serão digitados pelo usuário

    var horasMEs = horas * 22 // multipliquei as horas trabalhadas pelos das ulteis no mes

    var valorHora = salario/horasMEs //dividiu o salario pela quantidade de horas trabalhadas no mes
 
    var valorDuasCasas = valorHora.toFixed(2) // configurou para ter apenas 2 casas decimais
    var calcular = document.querySelector("#resposta")
    calcular.textContent = "R$"+valorDuasCasas           
}