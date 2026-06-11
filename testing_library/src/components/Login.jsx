import { useState } from 'react'

function Login() {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [msg, setMsg] = useState('')

  function entrar() {
    if (usuario && senha) setMsg('Bem-vindo')
    else setMsg('Preencha tudo')
  }

  return (
    <>
      <label>
        Usuário
        <input value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      </label>
      <label>
        Senha
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
      </label>
      <button onClick={entrar}>Entrar</button>
      {msg && <div>{msg}</div>}
    </>
  )
}
export default Login