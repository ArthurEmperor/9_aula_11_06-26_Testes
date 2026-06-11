import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import PainelPedidos from './PainelPedidos'

test('finaliza com total correto', async () => {
  const user = userEvent.setup()
  const onFinalizar = jest.fn()
  render(<PainelPedidos onFinalizar={onFinalizar} />)

  await user.click(screen.getByRole('button', { name: 'Adicionar item' }))
  await user.click(screen.getByRole('button', { name: 'Adicionar item' }))

  expect(screen.getByText('Itens: 2')).toBeInTheDocument()

  await user.click(screen.getByRole('button', { name: 'Finalizar pedido' }))
  expect(onFinalizar).toHaveBeenCalledTimes(1)
  expect(onFinalizar).toHaveBeenCalledWith(2)
})
