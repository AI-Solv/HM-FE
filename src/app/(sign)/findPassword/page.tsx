"use client";

import FindPasswordTitle from "@/containers/findPassword/FindPasswordTitle";
import FindPasswordForm from "@/containers/findPassword/FindPasswordForm";
import Button from "@/components/button/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePasswordRecoveryStore } from "@/store/usePasswordRecoveryStore";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const verificationCodeData = "12345";
  const router = useRouter();
  const {
    email,
    verificationCode,
    password,
    confirmPassword,
    emailError,
    verificationError,
    passwordError,
    confirmPasswordError,
    setTimer,
    setVerificationError,
  } = usePasswordRecoveryStore();

  const isStep1Valid = email && !emailError;
  const isStep2Valid =
    verificationCode && !verificationError;
  const isStep3Valid =
    password &&
    confirmPassword &&
    !passwordError &&
    !confirmPasswordError;

  const isFormValid =
    (currentStep === 1 && isStep1Valid) ||
    (currentStep === 2 && isStep2Valid) ||
    (currentStep === 3 && isStep3Valid);

  const handleNextStep = () => {
    if (currentStep == 1) {
      //이메일로 인증번호 전송 API
      setCurrentStep(currentStep + 1);
      setTimer(299);
    } else if (currentStep == 2) {
      if (verificationCode !== verificationCodeData) {
        setVerificationError("인증번호가 틀렸습니다.");
      } else {
        setVerificationError("");
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleSubmit = () => {
    // 비밀번호 찾기 로직 처리 (API 호출 등)
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div>
        <div className="w-[115px] h-[18px] text-[#7168b4] text-base font-bold font-['Pretendard'] mt-6 mb-4">
          비밀번호 찾기
        </div>
        <FindPasswordTitle currentStep={currentStep} />
        <FindPasswordForm currentStep={currentStep} />
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
