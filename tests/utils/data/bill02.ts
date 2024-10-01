export const id: string = 'sample';
export const title: string = '2 out of 3';
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
  {
    billId: id,
    id: '4',
    name: 'P4',
  },
];
export const items: Item[] = [
  {
    billId: id,
    id: 'A',
    name: 'Thing',
    amount: 100,
    splits: [{personId: '1'}, {personId: '2'}],
  },
];
export const splits: BillSplit[] = [
  {
    ...people[0],
    personId: people[0].id,
    amount: 50,
    share: 50,
  },
  {
    ...people[1],
    personId: people[1].id,
    amount: 50,
    share: 50,
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

//const split = splitBill(bill);
//console.log({split});
