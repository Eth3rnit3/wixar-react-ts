import * as React from 'react';

import './Button.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.FunctionComponent<IButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`wixar-button ${rest.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
