import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// compontents
import { Panel } from '../../components';
// styles
import './styles.css';

export const SignIn: React.FC = () => {
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO
    history.push('inicio');
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
