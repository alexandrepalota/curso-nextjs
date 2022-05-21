function lista1() {

  function gerarLista(tamanho) {
    const lista = []
    for (let i = 1; i <= tamanho; i++) {
      lista.push(i)
    }
    return lista.map(n => (
      <span key={n}>{n}, </span>
    ))
  }

  return (
    <div>
      <h1>Imprimindo Lista de 1 a 10</h1>
      {gerarLista(10)}
    </div>
  )
}

export default lista1