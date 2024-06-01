import {useCallback, useEffect, useMemo} from 'react';
import {useSearchParams} from 'react-router-dom';

// Custom hook that acts like useState but also synchronizes the state with the search params
// I haven't used this in the users page, as there we need multiple search params that are dependent on each other. Using this hook in that scenario will cause unnecessary rerenders.
function useSearchParamState<TParam>(
  paramName: string,
  initialValue: TParam,
  stringify?: (param: TParam) => string | null,
  parse?: (paramString: string | null) => TParam
) {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramValue: string | null = searchParams.get(paramName);

  useEffect(() => {
    const initialParamValue: string | null = stringify
      ? stringify(initialValue)
      : (paramValue as string | null);

    if (paramValue === null && initialParamValue !== null) {
      setSearchParams((searchParams: URLSearchParams) => {
        const newSearchParams = new URLSearchParams(searchParams);

        newSearchParams.set(paramName, initialParamValue);

        return newSearchParams;
      });
    }
  }, []);

  const value: TParam = useMemo<TParam>(() => {
    const paramValue: string | null = searchParams.get(paramName);
    const value: TParam = parse ? parse(paramValue) : (paramValue as TParam);

    return value;
  }, [paramValue, paramName]);

  const setValue: (value: TParam) => void = useCallback(
    (value: TParam) => {
      setSearchParams((searchParams: URLSearchParams) => {
        const paramValue: string | null = stringify ? stringify(value) : (value as string | null);
        const newSearchParams = new URLSearchParams(searchParams);

        if (paramValue === null) {
          newSearchParams.delete(paramName);
        } else {
          newSearchParams.set(paramName, paramValue);
        }

        return newSearchParams;
      });
    },
    [searchParams, paramName]
  );

  return [value, setValue] as const;
}

export {useSearchParamState};
