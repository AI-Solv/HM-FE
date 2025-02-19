export default function SignupTitle({
  currentStep,
}: {
  currentStep: number;
}) {
  return (
    <div className="w-[318px] h-[30px] text-[#222222] text-2xl font-semibold font-['Pretendard'] mb-4">
      {currentStep === 1 && "이메일로 가입하기"}
      {currentStep === 2 && "이용약관"}
      {currentStep === 3 && "정보입력"}
    </div>
  );
}
