import * as React from 'react';

import './FlatSelect.scss';
import useHandleOutsideClick from '../../utils/hooks/useHandleOutsideClick';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

interface IFlatSelectProps {
  options: any[];
  optionLabel?: string;
  optionValue?: string;
  value: string;
  className?: string;
  onChange: (value: string) => {}
}

const FlatSelect: React.FunctionComponent<IFlatSelectProps> = ({
  options = [],
  optionLabel = 'label',
  optionValue = 'value',
  value = '',
  onChange,
  ...rest
}) => {
  const [_isOpen, set_isOpen] = React.useState(false);
  const selectRef = React.useRef(null);
  useHandleOutsideClick(selectRef, () => set_isOpen(false));
  const selectedOption = options.find((option: any) => option[optionValue] === value);
  return (
    <div
      {...rest}
      className={`wixar-select ${rest.className}`}
      ref={selectRef}
    >
      {
        selectedOption &&
          <p onClick={() => set_isOpen(!_isOpen)}>
            {selectedOption[optionValue]}
            {
              _isOpen 
              ? <MdArrowDropUp />
              : <MdArrowDropDown />
            }
          </p>
      }
      <ul className={_isOpen ? 'wixar-select-list wixar-select-list-open' : 'wixar-select-list wixar-select-list-close'}>
        {
          options.map((option: any) => {
            return (
              <li
                key={option[optionValue]}
                onClick={() => {
                  onChange(option[optionValue]);
                  set_isOpen(false);
                }}
              >
                {option[optionLabel]}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default FlatSelect;
