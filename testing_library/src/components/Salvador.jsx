import { useState } from 'react'

function Salvador() {
  const [salvo, setSalvo] = useState(false)

  return (
    <>
      <button onClick={() => setSalvo(true)}>Salvar</button>
      {salvo && <div>Salvo!</div>}
    </>
  )
}

export default Salvador
