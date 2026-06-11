import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Aviso from './Aviso'

test('mostra a mensagem de sucesso', () => {
  render(<Aviso />)
  expect(screen.getByText(/sucesso/i)).toBeInTheDocument()
})