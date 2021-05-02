import React from 'react';
// compontents
import { Panel, Card } from '../../components';
// styles
import './styles.css';
// images
import withdrawImg from '../../images/withdraw.svg';
import depositImg from '../../images/deposit.svg';
import statementImg from '../../images/statement.svg';

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Panel size="large">
        <h1>Vitto Mini Bank</h1>

        <div className="dashboard__content">
          <aside>
            <ul>
              <li>
                <span>Bem vindo</span>
                <p>John Doe</p>
              </li>
              <li>
                <span>Saldo atual</span>
                <p>R$ 2000,00</p>
              </li>
              <li>
                <button type="button">Encerrar sessão</button>
              </li>
            </ul>
          </aside>

          <main>
            <h2>O que deseja fazer?</h2>

            <div className="dashboard__operations">
              <Card text="Saque" image={withdrawImg} />
              <Card text="Depósito" image={depositImg} />
              <Card text="Extrato e Saldo" image={statementImg} />
            </div>
          </main>
        </div>
      </Panel>
    </div>
  );
}
