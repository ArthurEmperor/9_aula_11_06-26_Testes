import { useState } from 'react'

function Saudador() {
  const [nome, setNome] = useState('')
  const [msg, setMsg] = useState('')

  return (
    <>
      <label>
        Nome
        <input value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>
      <button onClick={() => setMsg('Olá, ' + nome)}>Saudar</button>
      {msg && <div>{msg}</div>}
    </>
  )
}
export default Saudador
