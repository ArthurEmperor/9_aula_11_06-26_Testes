import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Chat from './Chat'

test('digita no campo Mensagem', async () => {
  const user = userEvent.setup()
  render(<Chat />)
  const campo = screen.getByLabelText('Mensagem')
  await user.type(campo, 'olá')
  expect(campo).toHaveValue('olá')
})
