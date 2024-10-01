type Bill = {
  id: string;
  title?: string;
  items: Item[];
  people: Person[];
  splits?: PersonSplit[];
};

type Item = {
  id: string;
  billId: string;
  name: string;
  amount: number;
  splits: ItemSplit[];
};

type ItemSplit = {
  personId: string;
  id?: string;
  name?: string;
  amount?: number;
  quantity?: number;
  percentage?: number;
};

type Person = {
  id: string;
  name: string;
  billId: string;
  total?: number;
  splits?: BillSplit[];
};

type BillSplit = {
  personId: string;
  amount: number;
  share: number;
};

type PersonItemSplit = {
  personId: string;
  amount: number;
  quantity: number;
  units: number;
  share: number;
};
type ItemsWihBillSplit = Item & {
  billSplits: PersonItemSplit[];
};

declare function split<Bill>(bill: BIll): BillSplit[];
