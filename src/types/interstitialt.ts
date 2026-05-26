export interface Interstitial {
  id: string;
  type: "interstitial";
  title: string;
  image: string;
  description: string;
  buttonLabel: string;
  icons: { url: string; label: string }[];
}
