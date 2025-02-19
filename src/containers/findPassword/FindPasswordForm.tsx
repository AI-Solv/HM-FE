import Input from "@/components/inputField/Input";
import { useEffect } from "react";
import { usePasswordRecoveryStore } from "@/store/usePasswordRecoveryStore";
import Button from "@/components/button/Button";
import AuthTimer from "./AuthTimer";

export default function FindPasswordForm({
  currentStep,
}: {
  currentStep: number;
}) {
  const {
    email,
    verificationCode,
    password,
    confirmPassword,
    emailError,
    verificationError,
    passwordError,
    confirmPasswordError,
    setEmail,
    setVerificationCode,
    setTimer,
    setPassword,
    setConfirmPassword,
    setEmailError,
    setVerificationError,
    setPasswordError,
    setConfirmPasswordError,
  } = usePasswordRecoveryStore();

  //   useEffect(() => {
  //     //서버 인증번호랑 확인하는 코드
  //     //지금은 임시 번호로 사용
  //     if (
  //       verificationCode &&
  //       verificationCode !== verificationCodeData
  //     ) {
  //       setVerificationError("인증번호가 틀렸습니다.");
  //     } else {
  //       setVerificationError("");
  //     }
  //   }, [verificationCode]);

  const handleReRequest = async () => {
    // API 호출 코드 추가
    setTimeout(() => {
      setTimer(299);
    }, 1000);
  };

  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleVerificationCodeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVerificationCode(e.target.value);
    setVerificationError("");
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(e.target.value);
    if (!/[0-9]/.test(e.target.value)) {
      setPasswordError("숫자가 포함되지 않았습니다.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError(
        "비밀번호가 일치하지 않습니다."
      );
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <div>
      {currentStep === 1 && (
        <Input
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={handleEmailChange}
          errorMessage={emailError}
        />
      )}
      {currentStep === 2 && (
        <>
          <div className="flex items-center justify-between">
            <div className="text-[#bdbdbd] text-base font-normal font-['Pretendard'] leading-tight">
              {email}
            </div>
            <Button
              label="재요청"
              size="small"
              onClick={handleReRequest}
            />
          </div>
          <Input
            type="text"
            placeholder="인증번호를 입력하세요"
            value={verificationCode}
            onChange={handleVerificationCodeChange}
            errorMessage={verificationError}
            rightComponent={<AuthTimer />}
          />
        </>
      )}
      {currentStep === 3 && (
        <>
          <Input
            label="비밀번호"
            type="password"
            placeholder="영문, 숫자, 특수 문자를 사용한 8~20자"
            value={password}
            onChange={handlePasswordChange}
            errorMessage={passwordError}
          />
          <Input
            label="비밀번호 확인"
            type="password"
            placeholder="위의 비밀번호를 다시 입력해 주세요."
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            errorMessage={confirmPasswordError}
          />
        </>
      )}
    </div>
  );
}
