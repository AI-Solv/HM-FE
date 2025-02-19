interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full h-2 bg-[#f1eeff] rounded-full mb-10">
      <div
        className="h-full bg-[#d0c8ff] rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
