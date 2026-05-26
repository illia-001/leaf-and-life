import cn from "classnames";
import { useAnswers } from "@/hooks/useAnswers";
import { useEffect } from "react";

export default function Error() {
  const { error, setError } = useAnswers();

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [error, setError]);

  return (
    <div
      className={cn(
        "absolute max-w-100 -z-1 top-20 h-10 text-error-text backdrop-blur-sm font-mono -translate-y-30  text-center bg-red-300/30 border-2 border-error-border transition-all lg:right-2/6 lg:left-2/6 duration-300 ease-out pointer-events-none opacity-0 right-10 left-10 px-4 py-2 rounded-xl",
        { "translate-none opacity-90": error },
      )}
    >
      {error}
    </div>
  );
}
