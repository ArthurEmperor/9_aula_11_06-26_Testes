import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Login from './Login'

test('nao mostra erro antes de tentar', () => {
  render(<Login />)
  expect(screen.queryByText(/senha incorreta/i)).not.toBeInTheDocument()
})

test('apresenta mensagem correta antes e depois do login', async () => {
  const user = userEvent.setup()
  render(<Login />)

  await user.click(screen.getByRole('button', { name: 'Entrar' }))
  expect(screen.getByText('Preencha tudo')).toBeInTheDocument()

  await user.type(screen.getByLabelText('Usuário'), 'Ana')
  await user.type(screen.getByLabelText('Senha'), '12345678')
  await user.click(screen.getByRole('button', { name: 'Entrar' }))

  expect(screen.getByText('Bem-vindo')).toBeInTheDocument()
  expect(screen.queryByText('Preencha tudo')).not.toBeInTheDocument()
})