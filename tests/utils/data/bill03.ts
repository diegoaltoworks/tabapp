export const id: string = 'sample';
export const title: string = 'thirds';
export const people: Person[] = [
  {
    billId: id,
    id: '1',
    name: 'P1',
  },
  {
    billId: id,
    id: '2',
    name: 'P2',
  },
  {
    billId: id,
    id: '3',
    name: 'P3',
  },
];
export const items: Item[] = [
  {
    billId: id,
    id: 'A',
    name: 'Thing',
    amount: 120,
    splits: [{personId: '1'}, {personId: '2'}, {personId: '3'}],
  },
];
export const splits: BillSplit[] = [
  {
    ...people[0],
    personId: people[0].id,
    amount: 40,
    share: 33.3,
  },
  {
    ...people[1],
    personId: people[1].id,
    amount: 40,
    share: 33.3,
  },
  {
    ...people[2],
    personId: people[2].id,
    amount: 40,
    share: 33.3,
  },
];

export const bill: Bill = {
  id,
  title,
  people,
  items,
  splits,
};
export default bill;
