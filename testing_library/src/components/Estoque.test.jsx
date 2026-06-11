import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Estoque from './Estoque'

test('vender reduz o estoque e troca a faixa', async () => {
  const user = userEvent.setup()
  render(<Estoque />)
  await user.click(screen.getByRole('button', { name: 'Vender' }))
  expect(screen.getByText('Em estoque: 5')).toBeInTheDocument()
  expect(screen.getByText('Estoque baixo')).toBeInTheDocument()
})
