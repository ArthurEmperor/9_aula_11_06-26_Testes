import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Painel from './Painel'

test('mostra título e botão juntas', () => {
  render(<Painel />)
  expect(screen.getByRole('heading', { name: 'Carrinho' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Finalizar compra' })).toBeInTheDocument()
})
