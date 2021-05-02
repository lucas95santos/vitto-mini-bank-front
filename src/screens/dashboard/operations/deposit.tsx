import React, { useState } from 'react';
// components
import { Keyboard } from '../../../components';
// styles
import './styles.css';

interface DepositProps extends React.HTMLAttributes<HTMLDivElement> {
  onCancelOperation: Function;
}

export const Deposit: React.FC<DepositProps> = ({ onCancelOperation, ...rest }) => {
  const [depositValue, setDepositValue] = useState('');

  const handleInputChangeFromKeyboard = (value: string) => {
    setDepositValue(oldValue => `${oldValue}${value}`);
  }

  const clearInput = () => {
    setDepositValue('');
  }

  const cancelOperation = () => {
    setDepositValue('');
    onCancelOperation(false);
  }

  const handleOperationSubmit = () => {
    // TODO
    console.log(depositValue);
    setDepositValue('');
    onCancelOperation(false);
  }

  return (
    <div className="deposit" {...rest}>
      <input
        type="text"
        name="depositValue"
        value={depositValue}
        placeholder="R$ 0"
        disabled
      />

      <Keyboard
        onNumberPress={handleInputChangeFromKeyboard}
        onClearPress={clearInput}
        onCancelPress={cancelOperation}
        onOkPress={handleOperationSubmit}
      />
    </div>
  );
}
