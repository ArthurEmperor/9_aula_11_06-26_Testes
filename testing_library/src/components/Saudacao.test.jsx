import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Saudacao from './Saudacao'

test('mostra a mensagem de boas-vindas', () => {
  render(<Saudacao />)
  expect(screen.getByText(/bem-vindo/i)).toBeInTheDocument()
})