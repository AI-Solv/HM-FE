"use client";

import Textarea from "@/components/inputField/Textarea";
import { useState } from "react";
import { submitResolution } from "@/services/problemService";
import ReviewForm from "./ReviewForm";
import Button from "@/components/button/Button";

export default function CompleteForm({
  id,
}: {
  id: string;
}) {
  const [resolution, setResolution] = useState("");
  const [resolveRating, setResolveRating] = useState(0);
  const [aiRating, setAiRating] = useState(0);

  const handleSubmit = async () => {
    //await submitResolution(id, resolution, rating);
    console.log("해답:", resolution);
    console.log("해답 만족도 점수:", resolveRating);
    console.log("고미니 만족도 점수:", aiRating);
  };

  return (
    <div className="w-full">
      <Textarea
        label="나의 해답"
        placeholder={`고민 결과 어떤  선택을 했는지 알려주세요!\n지금 적지 않아도 나중에 다시 적을 수 있어요!`}
        value={resolution}
        onChange={(e) => setResolution(e.target.value)}
      />
      <ReviewForm
        title="해답 만족도"
        detail="고민을 해결한 방법이 얼마나 만족스러운지 체크해주세요!"
        rating={resolveRating}
        setRating={setResolveRating}
      />
      <ReviewForm
        title="고미니 만족도"
        detail="고미니의 조언이 얼마나 도움이 되었는지 체크해주세요!"
        rating={aiRating}
        setRating={setAiRating}
      />
      <Button label="완료" onClick={handleSubmit} />
    </div>
  );
}
