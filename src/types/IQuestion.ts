import { IItemType } from "./IItemType";

type Variants = IItemType.MULTIPLE | IItemType.SINGLE;

interface Options {
  value: string;
  label: string;
  icon: string;
}

export interface IQuestion {
  id: string;
  type: Variants;
  question: string;
  options: Options[];
}
