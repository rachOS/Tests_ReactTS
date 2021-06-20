export interface IAdder {
  add(number: number, ...numbers: number[]): number;
}

export interface ISubtractor {
  substract(number: number, ...numbers: number[]): number;
}

export default interface ICalculator extends IAdder, ISubtractor {
  multiply(number: number, ...numbers: number[]): number;
  divide(number: number, ...numbers: number[]): number;
}
