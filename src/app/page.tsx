"use client";

import { Button } from "@/components/ui/button";
import Header from "@/components/layout/header";
import Image from "next/image";
import howItWorks from "@/data/howItWorks.json";
import whyLeafAndLife from "@/data/whyLeafAndLife.json";
import Icon from "@/components/ui/icon";
import Footer from "@/components/layout/footer";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/Routing";

const homePageImage = "https://res.cloudinary.com/dryw0xncr/image/upload/v1779798491/Intro_h1tegm.png";

export default function Home() {
  const router = useRouter();
  const handleClickButton = () => {
    router.push(ROUTES.QUIZ);
  };

  return (
    <>
      <Header />
      <div className="col-span-full bg-primary flex justify-center z-1 ">
        <div className="relative w-full aspect-square max-w-lg">
          <Image
            fill
            src={homePageImage}
            alt="home-page-image"
            loading="eager"
            className="sm:rounded-full z-2 object-cover"
          />
        </div>
      </div>
      <main className="min-h-screen z-10 grid grid-cols-1 bg-primary md:gap-x-4 md:grid-cols-6 px-4 lg:px-8">
        <section className="z-2 bg-primary flex flex-col items-center px-4 py-12 gap-4 col-span-full">
          <h1 className="text-3xl text-text text-center font-semibold">
            Curating Tranquility, One Leaf at a Time
          </h1>
          <p className="text-text-accent text-xl text-center">
            Transform your living space into a personal sanctuary with plants
            perfectly matched to your lifestyle and home environment.
          </p>
          <Button  onClick={handleClickButton} className="bg-accent px-4">Take the Quiz</Button>
        </section>

        <section className="z-2 rounded-2xl flex flex-col col-span-3 w-full items-center px-4 py-12 gap-12 bg-secondary mb-20">
          <h2 className="text-3xl text-text text-center font-semibold">
            How it Works
          </h2>
          {howItWorks.map((item) => (
            <article key={item.title} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-bg-icon rounded-full mb-4">
                <Icon iconUrl={item.icon} classNames="bg-accent" size={30} />
              </div>
              <h3 className="text-2xl text-text mb-2">{item.title}</h3>
              <p className="text-text-accent text-center">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl flex flex-col md:col-span-3 items-center gap-12 mb-20 px-4 py-12 bg-secondary">
          <h2 className="text-text font-semibold text-3xl">
            Why Leaf & Life
          </h2>
          {whyLeafAndLife.map((item) => (
            <article
              key={item.title}
              className="bg-secondary w-full gap-2 flex flex-col p-6 rounded-3xl shadow-card"
            >
              <Icon iconUrl={item.icon} classNames="bg-accent" />

              <h3 className="text-text text-sm font-semibold pt-2">
                {item.title}
              </h3>
              <p className="text-text-accent">{item.description}</p>
            </article>
          ))}
        </section>
        <section className="rounded-2xl bg-accent flex col-span-full flex-col items-center px-4 py-24 gap-6 w-full shadow-card">
          <h2 className="text-3xl text-center w-63">
            Ready to find your match?
          </h2>
          <h3 className="text-secondary text-center">
            Start your journey toward a greener, more peaceful home today.
          </h3>
          <Button onClick={handleClickButton} className="px-4" color="active">
            Start Quiz
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
