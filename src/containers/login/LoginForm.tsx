import Input from "@/components/inputField/Input";
import { useUserStore } from "@/store/useUserStore";

export default function LoginForm() {
  const { email, password, setEmail, setPassword } =
    useUserStore();
  return (
    <div className="w-full mb-4">
      <Input
        type="email"
        placeholder="아이디(이메일) 입력"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full h-[54px] rounded-[10px] flex justify-center items-center bg-[#6b60be] text-white hover:bg-[#5a51b3] mt-8"
        onClick={() => console.log("로그인 완료")}
      >
        로그인
      </button>
    </div>
  );
}
