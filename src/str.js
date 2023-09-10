var nome = 'Cheevi Gostoso Da Porra'
var x = nome.length;

resultado = x > 15 ? "Obrigado" : "Por favor Preencha seu nome completo!"
console.log(resultado)

var res = nome.toUpperCase()
console.log(res)

var jogo = "Barcelona vs Real"
var position = jogo.indexOf("Real")
console.log(position)

var cortado = jogo.slice(0,13);
console.log(cortado)

var val = jogo.includes("real")
console.log(val)

var str = 'Hello'
var str2 = ' World'

var str3 = str.concat(str2)
console.log(str3)

var frase = "           Olá javascript é uma belezura "
console.log(frase.trim())

var num = "1,2,3,4,5,6,7,8,9,10"
var arr = num.split(',')
console.log(arr)

var s = "Javascript e Python" 
var pos1 = s.indexOf("Python")

var nova_string = s.substring(13, 19)
console.log(nova_string)

var frase = 'Olá Mundo'
if (frase.startsWith('Olá')) {
  let sub  = frase.substring(4);
  let novaString = sub.replace("Mundo", "Pessoal")
  console.log(novaString.toUpperCase())
}

var url = "http://localhost:3000/filme?nome=poder&atores=Lucas,Guilherme"
const params = url.split('?')[1]
console.log(params)
const valores = params.split('&')
console.log(valores)

for (let i = 0; i < valores.length; i++) {
  if (valores[i].startsWith('atores=')) {
    valores[i] = "atores=" + valores[i].substring(7).toUpperCase()
  }
}

console.log(valores)