var url = "http://localhost:3000/filme?nome=poder&atores=Lucas,Guilherme"
const params = url.split('?')[1]
const valores = params.split('&')

for (let i = 0; i < valores.length; i++) {
  if (valores[i].startsWith('atores=')) {
    valores[i] = "atores=" + valores[i].substring(7).toUpperCase()
  }
}

console.log(valores)