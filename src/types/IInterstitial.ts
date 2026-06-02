import { IItemType } from "./IItemType";

interface Icons {
  url: string;
  label: string;
}

export interface IInterstitial {
  id: string;
  type: IItemType.INTER;
  title: string;
  image: string;
  description: string;
  buttonLabel: string;
  icons: Icons[];
}
