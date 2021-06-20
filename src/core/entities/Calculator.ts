import ICalculator from '../contract/ICalculator';

export function performCalculator(
  calculator: ICalculator,
  number1: number,
  number2: number
) {
  calculator.add(number1, number2);
  calculator.substract(number1, number2);
  calculator.multiply(number1, number2);
  calculator.divide(number1, number2);
  return true;
}
