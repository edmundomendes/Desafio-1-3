const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]

function calculaSaldo(receitas,despesas){
    const rec = somaNumeros(receitas)
    const des = somaNumeros(despesas)
    let result = rec - des
    return result
}

function somaNumeros(numeros){
    let sum = 0
    for(let numero of numeros){
        sum = sum + numero
    }
   return sum
}

for(let usuario of usuarios){

  let despesas = usuario.despesas
  let receitas = usuario.receitas
  const result = calculaSaldo(receitas,despesas)

  if(result > 0){
      console.log(`${usuario.nome}, seu saldo positivo é de: ${result.toFixed(2)}`)
  }else{
      console.log(`${usuario.nome}, seu saldo negativo é de: ${result.toFixed(2)}`)
  }
}


