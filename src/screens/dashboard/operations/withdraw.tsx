import React, { useState } from 'react';
// components
import { Keyboard } from '../../../components';
// styles
import './styles.css';

interface WithdrawProps extends React.HTMLAttributes<HTMLDivElement> {
  onCancelOperation: Function;
}

export const Withdraw: React.FC<WithdrawProps> = ({ onCancelOperation, ...rest }) => {
  const [withdrawValue, setWithdrawValue] = useState('');

  const handleInputChangeFromKeyboard = (value: string) => {
    setWithdrawValue(oldValue => `${oldValue}${value}`);
  }

  const clearInput = () => {
    setWithdrawValue('');
  }

  const cancelOperation = () => {
    setWithdrawValue('');
    onCancelOperation(false);
  }

  const handleOperationSubmit = () => {
    // TODO
    console.log(withdrawValue);
    setWithdrawValue('');
    onCancelOperation(false);
  }

  return (
    <div className="withdraw" {...rest}>
      <input
        type="text"
        name="withdrawValue"
        value={withdrawValue}
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
