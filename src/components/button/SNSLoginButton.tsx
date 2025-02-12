import Image from "next/image";

interface SNSLoginButtonProps {
  imageSrc: string;
  alt: string;
  onClick: () => void;
}

export default function SNSLoginButton({
  imageSrc,
  alt,
  onClick,
}: SNSLoginButtonProps) {
  return (
    <button onClick={onClick} className="w-16 h-16">
      <Image
        src={imageSrc}
        alt={alt}
        width={60}
        height={60}
      />
    </button>
  );
}
