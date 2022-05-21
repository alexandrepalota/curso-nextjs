function jsx4() {

  const subtitulo = 'Estou no JavaScript!'
  const trechoH6 = <h6>Trecho escrito em h6</h6>

  function entre(valor, min, max) {
    if (valor >= min && valor <= max) {
      return "Sim"
    } else {
      return "Não"
    }
  }

  return (
    <div>
      <h1>Integração JS e JSX</h1>
      <h2>{subtitulo}</h2>
      <h3>{3 * 3}</h3>
      <h4>{Math.max(13, 39)}</h4>
      <h5>{entre(30, 1, 10)}</h5>
      <h5>{entre(4, 1, 10)}</h5>
      {trechoH6}
    </div>
  )
}

export default jsx4