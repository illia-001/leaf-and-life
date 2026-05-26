import { Button } from "@/components/button";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

import howItWorks from "@/data/howItQorks.json";
import whyLeafAndLife from "@/data/whyLeafeAndLife.json";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen z-10 grid grid-cols-1 bg-primary md:gap-x-4 md:grid-cols-6  px-4 lg:px-8">
        <div className="col-span-full flex justify-center">
          <Image
            width={390}
            height={480}
            src="/Intro.png"
            alt="intro-image"
            loading="eager"
            className="lg:w-120 lg:rounded-full"
          />
        </div>
        <section className=" flex flex-col items-center px-4 py-12 gap-4 col-span-full">
          <h1 className="text-3xl font-sans text-text text-center font-semibold">
            Curating Tranquility, One Leaf at a Time
          </h1>
          <p className="text-text-accent font-mono text-xl text-center">
            Transform your living space into a personal sanctuary with plants
            perfectly matched to your lifestyle and home environment.
          </p>
          <Link href="/quiz">
            <Button>Take the Quiz</Button>
          </Link>
        </section>

        <section className=" rounded-2xl flex flex-col col-span-3 w-full items-center px-4 py-12 gap-12 bg-secondary mb-20">
          <h1 className="text-3xl text-text text-center font-sans font-semibold">
            How it Works
          </h1>
          {howItWorks.map((item) => (
            <article key={item.title} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-bg-icon rounded-full mb-4">
                <Image
                  src={item.icon}
                  width={30}
                  height={30}
                  alt={item.title}
                />
              </div>
              <h2 className="text-2xl text-text mb-2">{item.title}</h2>
              <p className="text-text-accent text-center">
                {item.descritption}
              </p>
            </article>
          ))}
        </section>

        <section className=" rounded-2xl flex flex-col col-span-3 items-center not-first:gap-8 mb-20 px-4 py-12 bg-secondary">
          <h1 className="text-text font-semibold text-3xl font-sans">
            Why Leaf & Life
          </h1>
          {whyLeafAndLife.map((item) => (
            <article
              key={item.title}
              className="bg-secondary w-full flex flex-col p-6 rounded-3xl shadow-[0_16px_32px_-8px_#0D211926]"
            >
              <Image src={item.icon} height={22} width={22} alt={item.icon} />

              <h3 className="text-text text-sm font-semibold pt-2 font-mono">
                {item.title}
              </h3>
              <p className="text-text-accent">{item.descritption}</p>
            </article>
          ))}
        </section>
        <section className=" rounded-2xl bg-text flex col-span-full flex-col items-center px-4 py-24 gap-6 w-full">
          <h1 className="text-3xl font-sans text-center w-63">
            Ready to find your match?
          </h1>
          <h2 className="text-secondary text-center">
            Start your journey toward a greener, more peaceful home today.
          </h2>
          <Link href="/quiz">
            <Button color="active">Start Quiz</Button>
          </Link>
        </section>
      </main>
    </>
  );
}
