import Input from "@/components/inputField/Input";
import Button from "@/components/button/Button";
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
      <Button
        label="로그인"
        onClick={() => console.log("로그인 클릭!")}
      />
    </div>
  );
}
