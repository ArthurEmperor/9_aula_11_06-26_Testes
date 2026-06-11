import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Saudador from './Saudador'

test('digita e clica para obter saudação', async () => {
  const user = userEvent.setup()
  render(<Saudador />)
  await user.type(screen.getByLabelText('Nome'), 'Ana')
  await user.click(screen.getByRole('button', { name: 'Saudar' }))
  expect(screen.getByText('Olá, Ana')).toBeInTheDocument()
})
