import React from 'react';
import { Link } from 'react-router-dom';
import { Panel } from '../../components';
// styles
import './styles.css';

export const SignIn: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO
  }

  return (
    <div className="auth">
      <h1 className="auth__title">Vitto Mini Bank</h1>

      <Panel classes="auth__content">
        <h3>Informe o CPF<br/>para entrar</h3>

        <form className="auth__form" onSubmit={handleSubmit}>
          <input type="text" placeholder="CPF" maxLength={14} />
          <button type="submit">Acessar</button>
        </form>

        <h3>ou crie uma conta<br/>clicando <Link to="/criar-conta">aqui</Link></h3>
      </Panel>
    </div>
  );
}
