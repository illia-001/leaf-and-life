import { IInterstitial } from "@/types/IInterstitial";
import Image from "next/image";
import Icon from "../../ui/icon";

export const InterstitialContent = ({ item }: { item: IInterstitial }) => {
  const { title, description, image, icons } = item;
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-full aspect-square sm:w-110">
        <Image
          src={image}
          fill
          alt={title}
          className="object-cover rounded-2xl"
          sizes="(min-width: 1024px) 440px, 342px"
        />
      </div>
      <article className="flex flex-col items-center gap-6 sm:col-span-3">
        <h2 className="text-2xl text-accent text-center">{title}</h2>

        <p className="text-accent text-center">{description}</p>
        <div className="flex gap-4 w-full justify-center">
          {icons.map((icon) => (
            <figure
              key={icon.label}
              className="flex justify-center items-center  gap-3"
            >
              <div className="flex items-center justify-center size-10 sm:size-13 bg-bg-icon rounded-full">
                <Icon
                  iconUrl={icon.url}
                  size={30}
                  aria-hidden="true"
                  classNames="bg-accent"
                />
              </div>
              <figcaption className="text-accent text-sm text-center">
                {icon.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </article>
    </div>
  );
};
