import React, { useCallback, useEffect } from 'react';
// styles
import './styles.css';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface KeyboardProps {
  onNumberPress: Function;
  onClearPress: Function;
  onCancelPress: Function;
  onOkPress: Function;
}

export const Keyboard: React.FC<KeyboardProps> = ({ onNumberPress, onCancelPress, onClearPress, onOkPress }) => {
  const onButtonPress = useCallback((event: MouseEvent) => {
    if ((event.target as HTMLElement).id !== 'keyboard') {
      const buttonEl = document.getElementById((event.target as HTMLElement).id);

      if (buttonEl) buttonEl.classList.add('button-pressed');
    }
  }, []);

  const onButtonLeave = useCallback((event: MouseEvent) => {
    if ((event.target as HTMLElement).id !== 'keyboard') {
      const buttonEl = document.getElementById((event.target as HTMLElement).id);

      if (buttonEl) buttonEl.classList.remove('button-pressed');
    }
  }, []);

  useEffect(() => {
    const keyboardNumbersEl = document.getElementById('keyboard');

    if (keyboardNumbersEl) {
      keyboardNumbersEl.addEventListener('mousedown', onButtonPress, false);
      keyboardNumbersEl.addEventListener('mouseup', onButtonLeave, false);

      return () => {
        keyboardNumbersEl.removeEventListener('mousedown', onButtonPress, false);
        keyboardNumbersEl.removeEventListener('mouseup', onButtonLeave, false);
      }
    }
  }, [onButtonPress, onButtonLeave]);

  return (
    <div className="keyboard" id="keyboard">
      <div className="keyboard__numbers">
        {numbers.map(value => (
          <button
            key={`number-${value}`}
            type="button"
            className="number"
            id={`number-${value}`}
            onClick={() => onNumberPress(value)}
          >
            {value}
          </button>
        ))}
        <button
          type="button"
          className="number"
          id='number-0'
          onClick={() => onNumberPress(0)}
        >
          0
        </button>
      </div>
      <div className="keyboard__actions">
        <button
          type="button"
          className="action cancel"
          id='cancel'
          onClick={() => onCancelPress()}
        >
          Cancelar
        </button>
        <button
          type="button"
          className="action clear"
          id='clear'
          onClick={() => onClearPress()}
        >
          Limpar
        </button>
        <button
          type="button"
          className="action confirm"
          id='confirm'
          onClick={() => onOkPress()}
        >
          OK
        </button>
      </div>
    </div>
  );
}
