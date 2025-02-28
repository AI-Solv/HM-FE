import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ModalButton from "../button/ModalButton";

interface ModalProps {
  text: string;
  setModal: () => void;
  otherPage: string;
}

export default function Modal({
  text,
  setModal,
  otherPage,
}: ModalProps) {
  const router = useRouter();

  const preventOffModal = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const redirectToOtherPage = () => {
    router.push(otherPage);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      id="모달 외부"
      className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-500/50"
    >
      <div
        id="모달"
        onClick={preventOffModal}
        className="w-80 h-[147px] justify-center items-center bg-white rounded-[15px] overflow-hidden"
      >
        <div className="text-[#222222] text-base font-medium font-['Pretendard'] text-center mt-8">
          {text}
        </div>
        <div className="flex justify-between p-4 gap-2 mb-4">
          <ModalButton label="아니요" onClick={setModal} />
          <ModalButton
            label="네"
            onClick={redirectToOtherPage}
          />
        </div>
      </div>
    </div>
  );
}
