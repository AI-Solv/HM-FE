import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function ImageExplanation() {
  const [step, setStep] = useState(1);
  const handleSlideChange = (swiper: any) => {
    const newStep = swiper.realIndex + 1;
    console.log(newStep);
    setStep(newStep > 3 ? 1 : newStep);
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="mt-20 mb-6 w-full max-w-[448px]">
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide>
            <Image
              src={`/images/ImageExplanation1.png`}
              alt="이미지 1"
              width={448}
              height={444}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={`/images/ImageExplanation2.png`}
              alt="이미지 2"
              width={448}
              height={444}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={`/images/ImageExplanation3.png`}
              alt="이미지 3"
              width={448}
              height={444}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <h2 className="w-80 h-[26px] text-center text-[#222222] text-2xl font-bold font-['Pretendard'] mb-4">
        {step === 1 && "머릿속 고민, 여기에 적어주세요"}
        {step === 2 && "과거의 고민이 도와줄거예요"}
        {step === 3 && "어려운 고민은 제가 도와드릴게요!"}
      </h2>

      <div className="w-80 h-[41px] text-center text-[#424242] text-m font-normal font-['Inter'] whitespace-pre-wrap mb-10">
        {step === 1 &&
          `이곳 저곳에 적어두었던 고민들을\n모두 이곳에 정리해 봐요!`}
        {step === 2 &&
          "과거의 고민이 현재의 고민 해결을 도와줄거예요."}
        {step === 3 &&
          "함께 고민을 팝콘 처럼 팡! 터뜨려봐요"}
      </div>

      <div className="flex items-center space-x-2">
        {[1, 2, 3].map((currentStep) => (
          <div
            key={currentStep}
            className={`w-6 h-6 rounded-[3px] ${
              currentStep == step
                ? "w-[17px] h-[7px] left-0 top-0 bg-[#b1a8e6]"
                : "w-[7px] h-[7px] left-[23px] top-0 bg-[#bdbdbd]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
