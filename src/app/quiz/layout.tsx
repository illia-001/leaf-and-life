"use client";
import NavigationBar from "@/components/navigationBar";
import TopBar from "@/components/topBar";

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <TopBar />
      {children}
    </>
  );
}
