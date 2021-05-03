import React from 'react';
// styles
import './styles.css';

export const Statement: React.FC = () => {
  return (
    <div className="statement">
      <div className="statement__info">
        <span>Saldo atual</span>
        <span>R$ 2000,00</span>
      </div>

      <ul className="statement__content">
        <li>
          <span>02/05/2021</span>
          <span>depósito</span>
          <span className="in-color">+R$ 100,00</span>
        </li>
        <li>
          <span>02/05/2021</span>
          <span>saque</span>
          <span className="out-color">-R$ 200,00</span>
        </li>
      </ul>
    </div>
  );
}
