import React from 'react';
// styles
import './styles.css';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'large';
  classes?: string | string[];
}

export const Panel: React.FC<PanelProps> = ({ children, size, classes }) => {
  return (
    <div
      className={
        `panel-container
        ${classes}
        ${size && size === 'large' && 'panel-container--large'}`
      }
    >
      {children}
    </div>
  );
}

Panel.defaultProps = {
  size: 'default',
}
