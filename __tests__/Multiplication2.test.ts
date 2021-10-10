import { mocked } from 'ts-jest/utils';
import { Dollar } from '../Dollar';
jest.mock('../Dollar');

const mDollar = Dollar as jest.MockedClass<typeof Dollar>;

describe('Dollar', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    mDollar.mockClear();
  });
  test('', () => {
    expect(Dollar).not.toHaveBeenCalled();
  });
  it('', () => {
    const five: Dollar = new Dollar(5);
    expect(jest.isMockFunction(five.times(5))).toBeFalsy();

    expect(mDollar).toHaveBeenCalledTimes(1);
    console.log(mDollar);

    const times = jest.spyOn(five, 'times');
    expect(jest.isMockFunction(times)).toBeTruthy();
    expect(times).toHaveBeenCalledTimes(1);
    five.times(5);
    expect(times).toHaveBeenCalledTimes(2);
  });
});

export {};
