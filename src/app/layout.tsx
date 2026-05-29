import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";
import { Amplitude } from "@/amplitude/amplitude";

const notoSans = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: "600",
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Leaf & Life | Personalized Plant Subscription",
    template: "%s | Leaf & Life",
  },
  description:
    "Discover curated houseplant boxes tailored to your space and lifestyle. Take our quick plant care quiz and start your green journey.",
  keywords: [
    "plant subscription",
    "personalized plant box",
    "houseplants delivery",
    "indoor plants",
    "plant care quiz",
  ],
  icons: {
    icon: "https://res.cloudinary.com/dryw0xncr/image/upload/v1779884659/leaf-svgrepo-com_dw9kig.svg",
  },
  openGraph: {
    title: "Leaf & Life | Personalized Plant Subscription",
    description:
      "Discover curated houseplant boxes tailored to your space and lifestyle. Take our quick plant care quiz and start your green journey.",
    url: "https://leaf-and-life.vercel.app",
    siteName: "Leaf & Life",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/openGraphImage.png",
        width: 1200,
        height: 630,
        alt: "Leaf & Life Plant Subscription Boxes",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${jakartaSans.variable} antialiased`}
      data-scroll-behavior="smooth"
    >
      <Amplitude />
      <body className="flex flex-col max-w-7xl mx-auto bg-primary">
        {children}
      </body>
    </html>
  );
}
