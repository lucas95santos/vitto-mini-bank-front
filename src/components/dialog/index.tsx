import React, { useCallback, useEffect, useRef } from 'react';
// icons
import { MdClose } from 'react-icons/md';
// styles
import './styles.css';

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  headerTitle: string;
  showDialog: boolean;
  onCloseDialog: Function;
  sholdDismissDialog?: boolean;
}

export const Dialog: React.FC<DialogProps> = ({ headerTitle, showDialog, sholdDismissDialog, onCloseDialog, children }) => {
  const dialogRef = useRef<HTMLDivElement>();
  const dialogContentRef = useRef<HTMLDivElement>();

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dialogRef?.current && dialogContentRef?.current) {
      if (dialogRef?.current.contains(event.target as any) && !dialogContentRef?.current.contains(event.target as any)) {
        onCloseDialog();
      }
    }
  }, [onCloseDialog])

  useEffect(() => {
    if (sholdDismissDialog && showDialog) {
      document.addEventListener('click', handleClickOutside, false);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    }
  }, [sholdDismissDialog, showDialog, handleClickOutside]);

  return (
    <div
      ref={dialogRef as any}
      className={`dialog ${showDialog ? 'dialog--opened' : 'dialog--closed'}`}
    >
      <div className="dialog__content" ref={dialogContentRef as any}>
        <div className="dialog__content__header">
          <p>{headerTitle}</p>
          {sholdDismissDialog && <MdClose onClick={() => onCloseDialog()} />}
        </div>
        <div className="dialog__content__body">
          {children}
        </div>
      </div>
    </div>
  );
}

Dialog.defaultProps = {
  sholdDismissDialog: true
}
