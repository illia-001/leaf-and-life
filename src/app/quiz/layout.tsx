import TopBar from "@/components/layout/topBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Your Perfect Plant Subscription | Leaf & Life Quiz",
  description:
    "Take our quick 2-minute plant care quiz! Tell us about your space, lighting, and lifestyle, and we'll curate a personalized PlantBox just for you.",
  keywords: [
    "plant subscription",
    "personalized plant box",
    "houseplants quiz",
    "indoor plants delivery",
    "Leaf & Life",
  ],
  openGraph: {
    title: "Discover Your Green Match | Leaf & Life",
    description: "Answer a few simple questions and get a personalized selection of sustainable indoor plants delivered to your door.",
    url: "https://leaf-and-life.vercel.app/quiz", 
    siteName: "Leaf & Life",
    images: [
      {
        url: "openGraphImage.png",
        width: 1200,
        height: 630,
        alt: "Leaf & Life Personalized Plant Quiz",
      },
    ],
    locale: "en_US",
    type: "website",
  }
}

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <TopBar />
      {children}
    </div>
  );
}
