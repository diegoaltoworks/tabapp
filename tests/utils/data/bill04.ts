//import {splitBill} from '@backend/lib/bills';

export const id: string = 'sample';
export const title: string = 'quad';
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
    name: 'Thing 1 2',
    amount: 30,
    splits: [{personId: '1'}, {personId: '2'}],
  },
  {
    billId: id,
    id: 'B',
    name: 'Thing 1 2 3',
    amount: 45,
    splits: [{personId: '1'}, {personId: '2'}, {personId: '3'}],
  },
  {
    billId: id,
    id: 'C',
    name: 'Thing 2 3 4',
    amount: 60,
    splits: [{personId: '2'}, {personId: '3'}, {personId: '4'}],
  },
  {
    billId: id,
    id: 'D',
    name: 'Thing 4',
    amount: 50,
    splits: [{personId: '4'}],
  },
];
export const splits: BillSplit[] = [
  {personId: '1', amount: 30, share: 16.2},
  {personId: '2', amount: 50, share: 27},
  {personId: '3', amount: 35, share: 18.9},
  {personId: '4', amount: 70, share: 37.8},
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
//const sss = JSON.stringify(split);
//sss;
