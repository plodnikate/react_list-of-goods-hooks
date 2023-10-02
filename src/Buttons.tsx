import React from 'react';
import cn from 'classnames';
import { SortType } from './types';

type Props = {
  sortField: SortType,
  isReversed: boolean,
  setSortField: (type: SortType) => void,
  handleReversedToggle: () => void,
  handleReset: () => void,
};

export const SortButtons: React.FC<Props>
  = ({
    sortField,
    isReversed,
    setSortField,
    handleReversedToggle,
    handleReset,
  }) => {
    const isSorted = sortField !== SortType.DEFAULT || isReversed;

    return (
      <div className="buttons">
        <button
          type="button"
          className={cn('button is-info', {
            'is-light': sortField !== SortType.ALPHABET,
          })}
          onClick={() => setSortField(SortType.ALPHABET)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn('button is-success', {
            'is-light': sortField !== SortType.LENGTH,
          })}
          onClick={() => setSortField(SortType.LENGTH)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn('button is-warning', {
            'is-light': !isReversed,
          })}
          onClick={handleReversedToggle}
        >
          Reverse
        </button>

        {isSorted && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>
    );
  };
