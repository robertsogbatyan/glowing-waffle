import React, {useEffect, useState} from 'react';
import {Button} from '../button';
import {StyledPage, StyledWrapper} from './styled';

type TPaginationProps = {
  currentPage?: number;
  totalPages: number;
  onPageChange?: (page: number) => void | Promise<unknown>;
};

const Pagination: React.FC<TPaginationProps> = ({currentPage, totalPages, onPageChange}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (currentPage) {
      setPage(currentPage);
    }
  }, [currentPage]);

  const onFirstPageClick = () => {
    const newPage: number = 1;

    setPage(newPage);
    onPageChange?.(newPage);
  };

  const onPrevPageClick = () => {
    const newPage: number = page - 1;

    setPage(newPage);
    onPageChange?.(newPage);
  };

  const onNextPageClick = () => {
    const newPage: number = page + 1;

    setPage(newPage);
    onPageChange?.(newPage);
  };

  const onLastPageClick = () => {
    const newPage: number = totalPages;

    setPage(newPage);
    onPageChange?.(newPage);
  };

  return (
    <StyledWrapper>
      <Button
        className={'hidden-phone'}
        type={'primary'}
        size={'sm'}
        onClick={onFirstPageClick}
        disabled={page === 1}
      >
        {'<<'}
      </Button>
      <Button type={'primary'} size={'sm'} onClick={onPrevPageClick} disabled={page === 1}>
        {'<'}
      </Button>
      <StyledPage>
        {page} / {totalPages}
      </StyledPage>
      <Button type={'primary'} size={'sm'} onClick={onNextPageClick} disabled={page === totalPages}>
        {'>'}
      </Button>
      <Button
        className={'hidden-phone'}
        type={'primary'}
        size={'sm'}
        onClick={onLastPageClick}
        disabled={page === totalPages}
      >
        {'>>'}
      </Button>
    </StyledWrapper>
  );
};

export {Pagination};
