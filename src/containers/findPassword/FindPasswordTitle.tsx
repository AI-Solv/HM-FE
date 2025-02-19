export default function FindPasswordTitle({
  currentStep,
}: {
  currentStep: number;
}) {
  return (
    <div className="mb-6">
      <div className="text-[#222222] text-2xl font-bold font-['Pretendard'] mb-3 whitespace-pre-wrap">
        {currentStep === 1 &&
          `가입 시 등록했던\n이메일 주소를 입력해주세요.`}
        {currentStep === 2 && "인증번호를 입력해주세요."}
        {currentStep === 3 && "비밀번호를 변경해주세요."}
      </div>
      <div className="h-[21px] text-[#424242] text-sm font-medium font-['Pretendard']">
        {currentStep === 1 &&
          "이메일 주소로 인증번호를 보내드립니다."}
        {currentStep === 2 &&
          "이메일에 도착한 인증번호를 확인해주세요."}
      </div>
      <br />
    </div>
  );
}
