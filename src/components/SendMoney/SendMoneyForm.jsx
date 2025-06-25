import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";

export default function SendMoneyForm() {
  const [step, setStep] = useState(1);

  const goNext = () => setStep((prev) => prev + 1);
  const goBack = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow">
        {step === 1 && <StepOne onNext={goNext} />}
        {step === 2 && <StepTwo onNext={goNext} onBack={goBack} />}
        {step === 3 && <StepThree onNext={goNext} onBack={goBack} />}
        {step === 4 && <StepFour onNext={goNext} onBack={goBack} />}
        {step === 5 && <StepFive onNext={goNext} onBack={goBack} />}
        {step === 6 && <StepSix onNext={goNext} onBack={goBack} />}
      </div>
    </div>
  );
}
