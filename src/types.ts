export enum SortType {
  ALPHABET = 'alphabet',
  LENGTH = 'length',
  DEFAULT = 'default',
}

export type SortingOptions = {
  sortField: SortType,
  isReversed: boolean,
};
