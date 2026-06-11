import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Cabecalho from './Cabecalho'

test('tem o titulo do carrinho', () => {
  render(<Cabecalho />)
  expect(screen.getByRole('heading', { name: /carrinho/i })).toBeInTheDocument()
})