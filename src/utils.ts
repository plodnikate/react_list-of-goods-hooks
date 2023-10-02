import { SortType, SortingOptions } from './types';

export const GOODS_FROM_SERVER: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const getSortedGoods
  = (goods: string[], { sortField, isReversed }: SortingOptions): string[] => {
    if (sortField === SortType.DEFAULT) {
      return GOODS_FROM_SERVER;
    }

    const sortedGoods = [...goods];

    sortedGoods.sort((good1, good2) => {
      switch (sortField) {
        case SortType.ALPHABET:
          return good1.localeCompare(good2);
        case SortType.LENGTH:
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      sortedGoods.reverse();
    }

    return sortedGoods;
  };
