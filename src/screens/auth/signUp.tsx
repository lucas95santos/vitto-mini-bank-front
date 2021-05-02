import React from 'react';
import { Link } from 'react-router-dom';
import { Panel } from '../../components';
// styles
import './styles.css';

export const SignUp: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO
  }

  return (
    <div className="auth">
      <h1 className="auth__title">Vitto Mini Bank</h1>

      <Panel classes="auth__content">
        <h3>Informe um CPF válido e um nome<br/>para criar a conta</h3>

        <form className="auth__form" onSubmit={handleSubmit}>
          <input type="text" placeholder="CPF" maxLength={14} />
          <input type="text" placeholder="Nome" />
          <button type="submit">Criar</button>
        </form>

        <h3><Link to="/">Voltar</Link></h3>
      </Panel>
    </div>
  );
}
