import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { SortButtons } from './Buttons';
import { GoodsList } from './GoodsList';
import { SortType } from './types';
import { getSortedGoods, GOODS_FROM_SERVER } from './utils';

export const App: React.FC = () => {
  const [sortField, setSortField] = useState<SortType>(SortType.DEFAULT);
  const [isReversed, setIsReversed] = useState<boolean>(false);
  const [displayedGoods, setDisplayedGoods]
    = useState<string[]>([...GOODS_FROM_SERVER]);

  useEffect(() => {
    // eslint-disable-next-line max-len
    setDisplayedGoods(getSortedGoods(displayedGoods, { sortField, isReversed }));
  }, [sortField, isReversed]);

  const handleReset = (): void => {
    setSortField(SortType.DEFAULT);
    setIsReversed(false);
  };

  const handleReversedToggle = (): void => {
    setIsReversed(prevState => !prevState);
  };

  return (
    <div className="section content">
      <SortButtons
        sortField={sortField}
        isReversed={isReversed}
        setSortField={setSortField}
        handleReversedToggle={handleReversedToggle}
        handleReset={handleReset}
      />
      <GoodsList goods={displayedGoods} />
    </div>
  );
};
