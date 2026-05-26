"use client";
import { useEffect, useState } from "react";
import Loader from "./loader";
import { IoCheckmarkDoneCircleSharp, IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/hooks/useQuiz";

interface Props {
  isVisible: (status: boolean) => void;
}

export default function CheckoutModal({ isVisible }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { setStep } = useQuiz();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    isVisible(false);
    router.push("/");
    setStep(0);
  };

  return (
    <>
      <div className="fixed inset-0 h-screen z-50 flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm cursor-pointer"
          onClick={handleCloseModal}
        />

        <div className="relative w-full max-w-md flex flex-col gap-6 p-8 shadow-2xl bg-secondary border-2 border-accent rounded-3xl z-10 animate-in fade-in zoom-in-95 duration-200">
          <button
            className="absolute top-4 right-4 text-text/70 hover:text-text cursor-pointer transition-colors"
            onClick={handleCloseModal}
            aria-label="Close modal"
          >
            <IoClose size={28} />
          </button>

          <div className="flex flex-col items-center gap-5 mt-2">
            {isLoading ? (
              <>
                <h1 className="font-sans font-semibold text-center text-text text-2xl">
                  Processing...
                </h1>
                <Loader />
              </>
            ) : (
              <>
                <h1 className="font-sans font-semibold text-center text-text text-2xl leading-snug">
                  Payment has been successfully processed!
                </h1>
                <IoCheckmarkDoneCircleSharp size={56} className="text-text" />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
