import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// compontents
import { Panel } from '../../components';
// styles
import './styles.css';

export const SignUp: React.FC = () => {
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
