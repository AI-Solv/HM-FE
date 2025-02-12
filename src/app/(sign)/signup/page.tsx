"use client";

import AuthTitle from "@/containers/login/AuthTitle";
import InputField from "@/components/inputField/Input";

import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] =
    useState("");

  const [emailSuccess, setEmailSuccess] = useState("");

  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(e.target.value);
    setEmailError("");
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
      <div className="min-h-[80px]"></div>
      <AuthTitle title="이메일로 가입하기" />

      <div className="max-w-md mx-auto space-y-6">
        <InputField
          label="아이디(이메일)"
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={handleEmailChange}
          errorMessage={emailError}
          successMessage={emailSuccess}
        />

        <InputField
          label="비밀번호"
          type="password"
          placeholder="영문, 숫자, 특수 문자를 사용한 8~20자"
          value={password}
          onChange={handlePasswordChange}
          errorMessage={passwordError}
        />

        <InputField
          label="비밀번호 확인"
          type="password"
          placeholder="위의 비밀번호를 다시 입력해 주세요."
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          errorMessage={confirmPasswordError}
        />
      </div>
    </div>
  );
}
