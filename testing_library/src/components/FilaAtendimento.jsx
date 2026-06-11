import { useState } from "react";

// Painel de chamados de suporte. Demonstra os 4 passos da RTL.
export default function FilaAtendimento() {
  // "fila" guarda quantos chamados existem; setFila muda esse numero
  const [fila, setFila] = useState(0);
  // regra de negocio: 8 ou mais = lotado
  const lotada = fila >= 8;

  return (
    <section>
      {/* mostra o numero atual da fila no titulo */}
      <h2>Chamados na fila: {fila}</h2>

      {/* botao soma 1 na fila ao ser clicado */}
      <button onClick={() => setFila(fila + 1)}>Novo chamado</button>
      {/* botao tira 1, mas nunca abaixo de 0 */}
      <button onClick={() => setFila(Math.max(0, fila - 1))}>Resolver</button>

      {/* cada mensagem aparece SO quando sua condicao e verdadeira */}
      {fila === 0 && <p>🟢 Fila vazia</p>}
      {fila > 0 && !lotada && <p>🟡 {fila} em atendimento</p>}
      {lotada && <p role="alert">⚠️ Fila lotada</p>}
    </section>
  );
}