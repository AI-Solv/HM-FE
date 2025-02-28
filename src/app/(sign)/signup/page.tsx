"use client";

import SignupTitle from "@/containers/signup/SignupTitle";
import ProgressBar from "@/components/ProgressBar";
import SignupForm from "@/containers/signup/SignupForm";
import Button from "@/components/button/Button";
import { useSignupStore } from "@/store/useSignupStore";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();
  const totalSteps = 3;
  const {
    email,
    password,
    confirmPassword,
    nickname,
    emailError,
    passwordError,
    confirmPasswordError,
    isChecked14,
    isCheckedTerms,
    isCheckedInformation,
  } = useSignupStore();

  const isStep1Valid =
    email &&
    password &&
    confirmPassword &&
    !emailError &&
    !passwordError &&
    !confirmPasswordError;
  const isStep2Valid =
    isChecked14 && isCheckedTerms && isCheckedInformation;
  const isStep3Valid = nickname.length >= 2;

  const isFormValid =
    (currentStep === 1 && isStep1Valid) ||
    (currentStep === 2 && isStep2Valid) ||
    (currentStep === 3 && isStep3Valid);

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = () => {
    console.log("회원가입 완료");
    setCurrentStep(currentStep + 1);
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div>
        <div className="w-[115px] h-[18px] text-[#7168b4] text-base font-bold font-['Pretendard'] mt-6 mb-4">
          회원가입
        </div>
        <SignupTitle currentStep={currentStep} />
        <ProgressBar
          currentStep={currentStep}
          totalSteps={4}
        />
        <SignupForm currentStep={currentStep} />
      </div>
      <Button
        label={currentStep === totalSteps ? "완료" : "다음"}
        onClick={
          currentStep === totalSteps
            ? handleSubmit
            : handleNextStep
        }
        disabled={!isFormValid}
      />
    </div>
  );
}
