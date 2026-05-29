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
  title: "Leaf & Life | Personalized Plant Subscription",
  description: "Discover curated houseplant boxes tailored to your space and lifestyle. Take our quick plant care quiz and start your green journey.",
  icons: {
    icon: "https://res.cloudinary.com/dryw0xncr/image/upload/v1779884659/leaf-svgrepo-com_dw9kig.svg"
  }
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
