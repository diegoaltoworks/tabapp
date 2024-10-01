import {describe, it} from 'vitest';
import {expect} from 'vitest';
import {process} from '@backend/lib/bills';
import bills from '@tests/utils/data';

describe.each(bills)(`split bill $title`, bill => {
  const {splits} = process(bill);

  it('returns an array of splits', () => {
    expect(splits).toBeInstanceOf(Array);
  });
  it('splits by correct number of people', () => {
    // number of splits matches number of people
    expect(splits).toHaveLength(bill?.people?.length || 0);
  });

  test.each(splits)('Person $personId to pay $amount', split => {
    const expected = bill.splits?.find(p => p.personId == split.personId);

    if (!expected) {
      expect(split).toMatchObject({
        amount: 0,
        share: 0,
      });
      return;
    }

    expect(split.amount).toEqual(expected.amount);
    expect(split.share).toEqual(expected.share);
  });
});
