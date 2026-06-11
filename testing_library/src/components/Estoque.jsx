import { useState } from 'react'

function Estoque() {
  const [n, setN] = useState(6)
  const faixa = n === 6 ? 'Normal' : 'Estoque baixo'

  return (
    <>
      <div>Em estoque: {n}</div>
      <div>{faixa}</div>
      <button onClick={() => setN(n - 1)}>Vender</button>
    </>
  )
}
export default Estoque
