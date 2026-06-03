import Image from "next/image";
import { useEffect } from "react";
import Loader from "./loader";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/Routing";
import Icon from "./icon";

const analysisItems = [
  { icon: "https://res.cloudinary.com/dryw0xncr/image/upload/v1779801795/sun-2-svgrepo-com_m59vnc.svg", label: "Lighting Analysis", size: 24 },
  { icon: "https://res.cloudinary.com/dryw0xncr/image/upload/v1780162048/Icon_33_jphe8f.svg", label: "Space Mapping", size: 20 },
  { icon: "https://res.cloudinary.com/dryw0xncr/image/upload/v1779798864/guidance_yrnamb.svg", label: "Matching Flora", size: 24 },
];

export const Preloader = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(ROUTES.CHECKOUT);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-10">
      <Image
        src="https://res.cloudinary.com/dryw0xncr/image/upload/v1779884675/A_lush_Monstera_Deliciosa_plant_kdtnmh.png"
        width={250}
        height={250}
        alt="preloading-image"
        loading="eager"
        className="rounded-full object-contain z-1 sm:w-75 md:w-100 border border-accent "
      />

      <article className="flex flex-col gap-4 items-center">
        <h2 className="text-text text-3xl text-center">
          Curating your perfect botanical matches...
        </h2>
        <p className="text-accent text-center mb-5 sm:mb-10">
          We&apos;re analyzing your lighting, space, and care style to find
          plants that will thrive in your home.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          {analysisItems.map((item) => (
            <div key={item.label} className="flex gap-2 text-accent items-center text-sm font-semibold">
            <div className="bg-accent rounded-full w-8 aspect-square flex justify-center items-center">
              <Icon
                iconUrl={item.icon}
                classNames="bg-bg-icon"
                size={item.size}
              />
            </div>
            {item.label}
          </div>
          ))}

        </div>
      </article>
      <Loader />
    </div>
  );
};
