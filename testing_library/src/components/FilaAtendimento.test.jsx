import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import FilaAtendimento from './FilaAtendimento'

test('Começa com a fila vazia', () => {
    render(<FilaAtendimento />);
    expect(screen.getByText(/chamados na fila: 0/i)).toBeInTheDocument();

    expect(screen.getByText(/fila vazia/i)).toBeInTheDocument();
});

test('clicar em "Novo chamado" aumenta a fila', async () => {
    const user = userEvent.setup();
    render(<FilaAtendimento />);

    const botaoNovo = screen.getByRole('button', { name: /novo chamado/i });

    await user.click(botaoNovo);
    await user.click(botaoNovo);

    expect(screen.getByText(/chamados na fila: 2/i)).toBeInTheDocument();
    

    expect(screen.getByText(/2 em atendimento/i)).toBeInTheDocument();
});

test('O alerta de lotado só aparece depois de 8 chamados na fila', async () => {
    const user = userEvent.setup();
    render(<FilaAtendimento />);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();

    const botaoNovo = screen.getByRole('button', { name: /novo chamado/i });
    
    for (let i = 0; i < 8; i++) {
        await user.click(botaoNovo);
    }

    expect(screen.getByRole('alert')).toBeInTheDocument();
});