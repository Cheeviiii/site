function processName(name, callback) {
  if (typeof name !== 'string') {
    callback(new Error("O nome deve ser uma string"))
    return;
  }

  if (name.length === 0) {
    callback(new Error("O nome não pode estar vazio"))
    return;
  }

  callback(null, 'Nome processado com sucesso')
}

processName('', (error, result) => {
  if (error) {
    console.log("Ocorreu um problema: ", error.message)
  } else {
    console.log(result)
  }
})