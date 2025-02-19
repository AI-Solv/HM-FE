import Input from "@/components/inputField/Input";
import Checkbox from "@/components/checkbox/Checkbox";
import { useSignupStore } from "@/store/useSignupStore";

export default function SignupForm({
  currentStep,
}: {
  currentStep: number;
}) {
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
    setEmail,
    setPassword,
    setConfirmPassword,
    setNickname,
    setEmailError,
    setPasswordError,
    setConfirmPasswordError,
    setIsChecked14,
    setIsCheckedTerms,
    setIsCheckedInformation,
  } = useSignupStore();

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
    <div className="max-w-md mx-auto space-y-6">
      {currentStep === 1 && (
        <>
          <Input
            label="아이디(이메일)"
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={handleEmailChange}
            errorMessage={emailError}
          />
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
      {currentStep === 2 && (
        <div>
          <label>
            <Checkbox
              type="plain"
              label="만 14세 이상입니다."
              checked={isChecked14}
              onChange={() => setIsChecked14(!isChecked14)}
            />
          </label>
          <label>
            <Checkbox
              type="link"
              label="서비스 이용약관"
              checked={isCheckedTerms}
              onChange={() =>
                setIsCheckedTerms(!isCheckedTerms)
              }
              linkHref="/terms"
            />
          </label>
          <label>
            <Checkbox
              type="link"
              label="개인정보 수집 및 이용 동의"
              checked={isCheckedInformation}
              onChange={() =>
                setIsCheckedInformation(
                  !isCheckedInformation
                )
              }
              linkHref="/information"
            />
          </label>
        </div>
      )}
      {currentStep === 3 && (
        <div>
          <Input
            label="닉네임"
            type="text"
            placeholder="닉네임을 입력해 주세요."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            errorMessage=""
          />
          <div className="mb-4"></div>
          <div className="text-[#424242] text-sm font-['Pretendard'] leading-tight">
            2글자 이상으로 닉네임을 입력해주세요
          </div>
        </div>
      )}
    </div>
  );
}
