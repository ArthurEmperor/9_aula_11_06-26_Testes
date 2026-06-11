import { useState } from 'react'
import './App.css'
import Aviso from './components/Aviso'
import BotaoConfirmar from './components/BotaoConfirmar'
import Cabecalho from './components/Cabecalho'
import Cadastro from './components/Cadastro'
import CampoNome from './components/CampoNome'
import CampoSenha from './components/CampoSenha'
import Carregador from './components/Carregador'
import Chat from './components/Chat'
import Contador from './components/Contador'
import Estoque from './components/Estoque'
import FilaAtendimento from './components/FilaAtendimento'
import Formulario from './components/Formulario'
import Lista from './components/Lista'
import Login from './components/Login'
import Menu from './components/Menu'
import Painel from './components/Painel'
import PainelPedidos from './components/PainelPedidos'
import Salvador from './components/Salvador'
import Saudacao from './components/Saudacao'
import Saudador from './components/Saudador'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho />
      <Menu />
      <Aviso />
      <BotaoConfirmar />
      <Cadastro />
      <CampoNome />
      <CampoSenha />
      <Carregador />
      <Chat />
      <Contador />
      <Estoque />
      <FilaAtendimento />
      <Formulario />
      <Lista />
      <Login />
      <Painel />
      <PainelPedidos />
      <Salvador />
      <Saudacao />
      <Saudador />
    </>
  )
}

export default App
