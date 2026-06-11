import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Menu from './Menu'


test('tem o link de sair', () => {
  render(<Menu />)
  expect(screen.getByRole('link', { name: 'Sair' })).toBeInTheDocument()
})