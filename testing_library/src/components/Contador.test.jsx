import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Contador from './Contador'

test('soma 1 ao clicar', async () => {
  const user = userEvent.setup()        // prepara o dedo
  render(<Contador />)
  await user.click(screen.getByRole('button'))  // clica
  expect(screen.getByText('Curtir (1)')).toBeInTheDocument()
})