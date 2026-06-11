import { useState, useEffect } from 'react'

function Carregador() {
  const [pronto, setPronto] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setPronto(true), 50)
    return () => clearTimeout(id)
  }, [])

  return <div>{pronto ? 'Pronto!' : 'Carregando...'}</div>
}
export default Carregador
