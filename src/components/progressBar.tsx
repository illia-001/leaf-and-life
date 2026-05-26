interface Props {
  currentStep: number;
  totalSteps: number;
  width: string;
}

export default function ProgressBar({ currentStep, totalSteps, width }: Props) {
  return (
    <>
      <div
        className="h-1 bg-accent absolute bottom-0 rounded-xl left-0 transition-all ease-out duration-300"
        style={{ width}}
      />
      <div className="text-primary text-sm font-semibold bg-accent px-2 text-center rounded-tr-md absolute left-0 bottom-0">
        Step {currentStep} of {totalSteps}
      </div>
    </>
  );
}
