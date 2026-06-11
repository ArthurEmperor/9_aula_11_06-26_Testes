import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Lista from './Lista'


test('tem 3 itens na lista', () => {
  render(<Lista />)
  const itens = screen.getAllByRole('listitem')  // achar TODOS
  expect(itens).toHaveLength(3)         // quantos?
})