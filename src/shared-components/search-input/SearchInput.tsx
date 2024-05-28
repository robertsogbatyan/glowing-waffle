import React, {ChangeEvent, useEffect, useRef} from 'react';
import {Input} from '../input';

type TSearchInputProps = {
  value?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  onSettled?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
};

const SETTLED_TIME: number = 500;

const SearchInput: React.FC<TSearchInputProps> = ({value, onChange, onSettled}) => {
  const timeoutHandle = useRef<ReturnType<typeof setTimeout> | undefined>();

  useEffect(() => {
    return () => {
      if (timeoutHandle.current) {
        clearTimeout(timeoutHandle.current);
        timeoutHandle.current = undefined;
      }
    };
  }, []);

  const onInputChange = (value: string, event: ChangeEvent<HTMLInputElement>) => {
    if (timeoutHandle.current) {
      clearTimeout(timeoutHandle.current);
      timeoutHandle.current = undefined;
    }

    onChange?.(value, event);

    if (onSettled) {
      timeoutHandle.current = setTimeout(() => {
        onSettled(value, event);
        timeoutHandle.current = undefined;
      }, SETTLED_TIME);
    }
  };

  return <Input value={value} onChange={onInputChange} />;
};

export {SearchInput};
