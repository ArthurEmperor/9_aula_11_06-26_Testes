import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import BotaoConfirmar from './BotaoConfirmar'

test('chama onConfirmar uma vez no clique', async () => {
  const user = userEvent.setup()
  const onConfirmar = jest.fn()
  render(<BotaoConfirmar onConfirmar={onConfirmar} />)
  expect(onConfirmar).not.toHaveBeenCalled()
  await user.click(screen.getByRole('button', { name: 'Confirmar' }))
  expect(onConfirmar).toHaveBeenCalledTimes(1)
})
