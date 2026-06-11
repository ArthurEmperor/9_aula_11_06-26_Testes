import { useState } from 'react'
import './App.css'
import FilaAtendimento from './components/FilaAtendimento';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FilaAtendimento />
    </>
  )
}

export default App
