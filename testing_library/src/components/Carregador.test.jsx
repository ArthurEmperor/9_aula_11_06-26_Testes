import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Carregador from './Carregador'

test('espera o texto Pronto aparecer', async () => {
  render(<Carregador />)
  expect(screen.getByText('Carregando...')).toBeInTheDocument()
  expect(await screen.findByText('Pronto!')).toBeInTheDocument()
})
