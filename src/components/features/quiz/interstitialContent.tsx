import { Interstitial } from "@/types/IInterstitialt";
import Image from "next/image";
import Icon from "../../ui/icon";

export const InterstitialContent = ({ item }: { item: Interstitial }) => {
  const { title, description, image, icons } = item;
  return (
    <div className="flex flex-col items-center space-y-4 gap-4">
      <Image
        src={image}
        width={342}
        loading="eager"
        height={342}
        alt="icon"
        className="aspect-square lg:w-110 object-cover rounded-2xl mb-10 col-span-full sm:col-span-3"
      />
      <article className="flex flex-col items-center gap-6 sm:col-span-3">
        <h1 className="font-sans text-2xl text-accent text-center">{title}</h1>

        <p className="text-accent">{description}</p>
        <div className="flex gap-4 w-full justify-center">
          {icons.map((icon) => (
            <div
              key={icon.label}
              className="flex justify-center items-center text-accent text-sm text-center gap-3"
            >
              <div className="flex items-center justify-center size-10 sm:size-13 bg-bg-icon rounded-full">
                <Icon iconUrl={icon.url} size={30} classNames=" bg-accent" />
              </div>
              {icon.label}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};
