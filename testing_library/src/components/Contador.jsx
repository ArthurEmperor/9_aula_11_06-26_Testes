import { useState } from 'react'

function Contador() {
  const [n, setN] = useState(0)
  return <button onClick={() => setN(n + 1)}>Curtir ({n})</button>
}
export default Contador