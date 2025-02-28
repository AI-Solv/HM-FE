"use client";

import { useState } from "react";
import ReviewRating from "./ReviewRating";

interface ReviewFormProps {
  title: string;
  detail: string;
  rating: number;
  setRating: (rating: number) => void;
}

export default function ReviewForm({
  title,
  detail,
  rating,
  setRating,
}: ReviewFormProps) {
  const [clicked, setClicked] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleStarClick = (index: number) => {
    const updatedClicked = clicked.map(
      (_, i) => i <= index
    );
    setClicked(updatedClicked);
    setRating(index + 1);
    console.log("만족도 점수:", rating);
  };

  return (
    <div className="mt-4">
      <div className="w-[314px] text-[#424242] text-lg font-medium font-['Pretendard'] leading-tight mb-2">
        {title}
      </div>
      <div className="w-[314px] text-[#757575] text-ms font-normal font-['Pretendard'] leading-tight mb-2">
        {detail}
      </div>
      <div className="w-full h-[62px] flex justify-center items-center rounded-[10px] border border-[#d3d3d3] p-4">
        <ReviewRating
          clicked={clicked}
          onStarClick={handleStarClick}
        />
      </div>
    </div>
  );
}
