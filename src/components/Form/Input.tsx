import * as React from 'react';
import rdms from 'randomstring';

import './Input.scss';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  classNames?: {
    root: string;
    label: string;
    input: string;
  };
  label?: string;
}

const Input: React.FunctionComponent<IInputProps> = ({
  id = rdms.generate(7),
  name = rdms.generate(7),
  classNames = {root: '', label: '', input: ''},
  className,
  label,
  ...rest
}) => {
  const isABox = rest.type === 'radio' || rest.type === 'checkbox'
  return (
    <div className={`${classNames.root} ${className} ${isABox ? 'box' : ''} wixar-form-group`}>
      {
        label &&
          <label
            className={`${classNames.label} wixar-form-label`}
            htmlFor={id}
          >
            {label}
          </label>
      }
      <input {...rest} className={`${classNames.input} wixar-form-input`} id={id} name={name} />
    </div>
  );
};

export default Input;
