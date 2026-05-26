"use client";
import TopBar from "@/components/layout/topBar";

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
