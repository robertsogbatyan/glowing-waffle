import React, {ChangeEvent} from 'react';
import {StyledInput} from './styled';

type TInputProps = {
  value?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<TInputProps> = ({value, onChange}) => {
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value as string;

    onChange?.(value, event);
  };

  return <StyledInput type={'text'} value={value} onChange={onInputChange} />;
};

export {Input};
