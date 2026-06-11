import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CampoSenha from './CampoSenha'

test('exibe campo senha e texto de ajuda', () => {
  render(<CampoSenha />)
  expect(screen.getByLabelText('Senha')).toBeInTheDocument()
  expect(screen.getByText('Mínimo 8 caracteres')).toBeInTheDocument()
})
