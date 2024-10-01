export const num = (val: number | string) => {
  return typeof val == 'string' ? parseInt(val) : val;
};

export const splitItem = (item: Item, people: Person[]) => {
  let units = item.splits.reduce(
    (a: number, s: ItemSplit) => a + (s.quantity || 1),
    0
  );
  let splits = item.splits.map(split => {
    let quantity = split.quantity || 1;
    let amount = num(
      split.amount
        ? split.amount
        : split.percentage
          ? (split.percentage * item.amount) / 100
          : (item.amount / units) * quantity
    );
    const share = num(amount / item.amount) * 100;
    return {
      ...split,
      quantity,
      amount,
      units,
      share,
    };
  });
  let peopleSplits: PersonItemSplit[] = people.map(p => {
    const personSplit = splits.find(s => p.id == s.personId);
    const blankSplit = {
      personId: p.id,
      quantity: 0,
      amount: 0,
      share: 0,
      units,
    };
    return personSplit ?? blankSplit;
  });
  return peopleSplits;
};

export const splitBill = (bill: Bill): BillSplit[] => {
  const itemsWithSplit: ItemsWihBillSplit[] = bill.items.map(item => ({
    ...item,
    billSplits: splitItem(item, bill.people),
  }));

  const peopleSplits = bill.people.map(person => ({
    personId: person.id,
    splits: itemsWithSplit.map(itemSplit =>
      itemSplit.billSplits.find(split => split.personId === person.id)
    ),
  }));

  const grandTotal: number = peopleSplits.reduce(
    (gt: number, person) =>
      (gt += person.splits.reduce(
        (st: number, split) => (st += split?.amount || 0),
        0
      )),
    0
  );

  const splits: BillSplit[] = peopleSplits.map(person => {
    const personId = person.personId;
    const amount = person.splits.reduce(
      (t, split) => (t += split?.amount || 0),
      0
    );
    const share = Number(((amount / grandTotal) * 100).toFixed(1));
    return {personId, amount, share};
  });

  return splits;
};

// todo:
// checksum/rounding errors notice
// currency conversios

export const process = (bill: Bill) => {
  const splits = splitBill(bill);

  return {...bill, splits};
};
