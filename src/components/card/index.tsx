import React from 'react';
// styles
import './styles.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  image: any;
}

export const Card: React.FC<CardProps> = ({ text, image }) => {
  return (
    <div className="card">
      <div className="card__text">
        {text}
      </div>
      <div className="card__image">
        <img src={image} alt="Imagem do card"/>
      </div>
    </div>
  );
}
