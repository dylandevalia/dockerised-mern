import React from 'react';
import './index.scss';

export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
