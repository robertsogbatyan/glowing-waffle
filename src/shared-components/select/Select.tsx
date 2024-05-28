import React, {ChangeEvent} from 'react';
import {StyledSelect} from './styled';

type TSelectProps = {
  options: TSelectOption[];
  value?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLSelectElement>) => void;
};

type TSelectOption = {
  value: string;
  label?: string;
};

const Select: React.FC<TSelectProps> = ({options, value, onChange}) => {
  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value: string = event.target.value as string;

    onChange?.(value, event);
  };

  return (
    <StyledSelect value={value} onChange={onSelectChange}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label || o.value}
        </option>
      ))}
    </StyledSelect>
  );
};

export {Select};
