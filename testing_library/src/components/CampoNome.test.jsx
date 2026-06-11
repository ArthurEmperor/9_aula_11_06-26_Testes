import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import CampoNome from './CampoNome'

test('digita o nome', async () => {
  const user = userEvent.setup()
  render(<CampoNome />)
  const campo = screen.getByLabelText('Nome')
  await user.type(campo, 'Ana')        // digitar
  expect(campo).toHaveValue('Ana')        // conferir o valor
})