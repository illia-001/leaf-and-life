import { Interstitial } from "@/types/interstitialt";
import Image from "next/image";

export const InterstitialContent = ({ item }: { item: Interstitial }) => {
  return (
    <div className="flex flex-col items-center space-y-4 gap-4">
      <Image
        src={item.image}
        width={342}
        loading="eager"
        height={342}
        alt="icon"
        className="aspect-square lg:w-110 object-cover rounded-2xl mb-10 col-span-full sm:col-span-3"
      />
      <article className="flex flex-col items-center gap-6 sm:col-span-3">
        <h1 className="font-sans text-2xl text-accent text-center">{item.title}</h1>

        <p className="text-accent">{item.description}</p>
        <div className="flex gap-4 w-full justify-center">
          <div className="flex justify-center items-center text-accent text-sm text-center gap-3">
            <div className="flex items-center justify-center size-10 sm:size-13 bg-bg-icon rounded-full">
              <Image
                src="/icons/delivery.svg"
                width={18}
                height={18}
                alt="delivery-icon"
                className="sm:w-6"
              />
            </div>
            Free Replacement
          </div>
          <div className="flex justify-center items-center text-accent text-sm text-center gap-2">
            <div className="flex items-center justify-center size-10 sm:size-13 bg-bg-icon rounded-full">
              <Image
                src="/icons/guidance.svg"
                width={18}
                height={18}
                className="sm:w-6"
                alt="guidance-icon"
              />
            </div>
            Expert Guidance
          </div>
        </div>
      </article>
    </div>
  );
};