import React, { useState } from 'react';
// compontents
import { Panel, Card, Dialog } from '../../components';
// intenal components
import { Withdraw, Deposit, Statement } from './operations';
// styles
import './styles.css';
// images
import withdrawImg from '../../images/withdraw.svg';
import depositImg from '../../images/deposit.svg';
import statementImg from '../../images/statement.svg';

interface Operation {
  title: string;
  type: 0 | 1 | 2 | null;
}

export const Dashboard: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [currentOperation, setCurrentOperation] = useState<Operation>({
    title: '',
    type: null
  });

  const handleOperationClick = (operation: Operation) => {
    setCurrentOperation(operation);
    setShowDialog(true);
  }

  const renderOperationContent = () => {
    switch(currentOperation.type) {
      case 0:
        return <Withdraw onCancelOperation={setShowDialog} />;
      case 1:
        return <Deposit onCancelOperation={setShowDialog} />;
      case 2:
        return <Statement />;
    }
  }

  return (
    <>
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
                <Card
                  text="Saque"
                  image={withdrawImg}
                  onClick={() => handleOperationClick({ title: 'Saque', type: 0 })}
                />
                <Card
                  text="Depósito"
                  image={depositImg}
                  onClick={() => handleOperationClick({ title: 'Depósito', type: 1 })}
                />
                <Card
                  text="Extrato e Saldo"
                  image={statementImg}
                  onClick={() => handleOperationClick({ title: 'Extrato e Saldo', type: 2 })}
                />
              </div>
            </main>
          </div>
        </Panel>
      </div>
      <Dialog
        sholdDismissDialog={currentOperation.type === 2}
        onCloseDialog={setShowDialog}
        showDialog={showDialog}
        headerTitle={currentOperation.title}
      >
        {renderOperationContent()}
      </Dialog>
    </>
  );
}
