interface AuthTitleProps {
  title: string;
  subtitle?: string;
}

export default function AuthTitle({
  title,
  subtitle,
}: AuthTitleProps) {
  return (
    <div className="mb-6">
      <h1 className="text-[#222222] text-2xl font-bold font-['Pretendard'] mb-3">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[#767676] text-base font-medium font-['Pretendard']">
          {subtitle}
        </p>
      )}
      <br />
    </div>
  );
}
