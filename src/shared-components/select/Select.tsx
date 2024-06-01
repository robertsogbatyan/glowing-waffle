import React, {ChangeEvent} from 'react';
import {StyledSelect} from './styled';

type TSelectProps = {
  options: TSelectOption[];
  value?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
};

type TSelectOption = {
  value: string;
  label?: string;
};

const Select: React.FC<TSelectProps> = ({options, value, onChange, placeholder}) => {
  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value: string = event.target.value as string;

    onChange?.(value, event);
  };

  return (
    <StyledSelect value={value} onChange={onSelectChange}>
      {placeholder && (
        // If there's a possibility that an option value can be the key of placeholder, we can generate it with useId
        <option key={'_placeholder'} value={undefined} hidden disabled>
          {placeholder}
        </option>
      )}
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label || o.value}
        </option>
      ))}
    </StyledSelect>
  );
};

export {Select, type TSelectOption};
