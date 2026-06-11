import { useState } from 'react'

function PainelPedidos({ onFinalizar }) {
  const [itens, setItens] = useState(0)

  return (
    <>
      <div>Itens: {itens}</div>
      <button onClick={() => setItens(itens + 1)}>Adicionar item</button>
      <button onClick={() => onFinalizar(itens)}>Finalizar pedido</button>
    </>
  )
}
export default PainelPedidos
