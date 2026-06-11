import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Salvador from './Salvador'

test('salvo só aparece depois do clique', async () => {
  const user = userEvent.setup()
  render(<Salvador />)
  expect(screen.queryByText('Salvo!')).not.toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: 'Salvar' }))
  expect(screen.getByText('Salvo!')).toBeInTheDocument()
})
