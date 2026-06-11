import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Cadastro from './Cadastro'

test('tem o campo de e-mail', () => {
  render(<Cadastro />)
  expect(screen.getByText('E-mail')).toBeInTheDocument()
})