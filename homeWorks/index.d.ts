export type Default = {
  symbol: string,
  separator: string,
  decimal: string,
  formatWithSymbol: boolean,
  errorOnInvalid: boolean,
  precision: number,
  pattern: string,
  negativePattern: string
}
export type Round = (v: number) => number;
export type Pow = (p: number) => number;
export type Rounding = (value: number, increment: number) => number;

export type Value = number|string|Currency;
export type Opts = {
  decimal: string,
  errorOnInvalid: boolean,
  precision: number,

}
export class Currency extends CurProto {
  constructor(
    value: Value,
    opts: Opts
  )
  _setting: {};
  _precision: number;
}

export type parse = (
  value: Value, 
  opts: Opts,
  useRounding: boolean
) => number|Error;

export class CurProto {
  add(number: number): Currency;
  subtract(number: number): Currency;
  multiply(number: number): Currency;
  divide(number: number): Currency;
  distribute(count: number): Currency[];
  dollars(): number;
  cents(): number;
  format(useSymbol: boolean): string;
  toString(): string;
  toJSON(): string;
}