import SNSLoginButton from "@/components/button/SNSLoginButton";

export default function SNSLogin() {
  return (
    <div>
      <div className="w-full flex justify-center items-center mt-20 mb-6">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="text-[#bdbdbd] text-sm font-medium font-['Pretendard'] leading-tight">
          SNS 계정으로 로그인
        </span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>
      <div className="w-full flex justify-center items-center gap-2">
        <SNSLoginButton
          imageSrc="/images/KaKaoTalk_Button.png"
          alt="카카오 로그인"
          onClick={() => console.log("카카오 로그인")}
        />
        <SNSLoginButton
          imageSrc="/images/NaverButton.png"
          alt="네이버 로그인"
          onClick={() => console.log("네이버 로그인")}
        />
        <SNSLoginButton
          imageSrc="/images/Apple_Button.png"
          alt="애플 로그인"
          onClick={() => console.log("애플 로그인")}
        />
      </div>
    </div>
  );
}
