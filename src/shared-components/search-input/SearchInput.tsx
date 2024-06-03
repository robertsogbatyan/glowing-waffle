import React, {useEffect, useRef, useState} from 'react';
import {Input, TInputProps} from '../input';

type TSearchInputProps = TInputProps & {
  onChange?: (value: string | undefined) => void;
};

const SETTLED_TIME: number = 500;

const SearchInput: React.FC<TSearchInputProps> = ({
  value,
  onChange,
  placeholder = 'Search...',
  ...props
}) => {
  const onChangeRef = useRef<typeof onChange>();
  const timeoutHandleRef = useRef<ReturnType<typeof setTimeout> | undefined>();

  const [innerValue, setInnerValue] = useState<string | undefined>(value);

  useEffect(() => {
    if (!timeoutHandleRef.current) {
      setInnerValue(value);
    }
  }, [value]);

  useEffect(() => {
    onChangeRef.current = onChange;

    return () => {
      onChangeRef.current = undefined;
    };
  }, [onChange]);

  useEffect(() => {
    return () => {
      if (timeoutHandleRef.current) {
        clearTimeout(timeoutHandleRef.current);
        timeoutHandleRef.current = undefined;
      }
    };
  }, []);

  const onInputChange = (value: string | undefined): void => {
    if (timeoutHandleRef.current) {
      clearTimeout(timeoutHandleRef.current);
      timeoutHandleRef.current = undefined;
    }

    setInnerValue(value);

    timeoutHandleRef.current = setTimeout(() => {
      onChangeRef.current?.(value);
      timeoutHandleRef.current = undefined;
    }, SETTLED_TIME);
  };

  return <Input value={innerValue} onChange={onInputChange} placeholder={placeholder} {...props} />;
};

export {SearchInput};
