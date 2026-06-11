import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Formulario from './Formulario'

test('tem o botao de enviar', () => {
  render(<Formulario />)
  expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument()
})