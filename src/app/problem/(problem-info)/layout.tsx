import { ReactNode } from "react";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full p-6 relative">
      <div
        className="absolute inset-0 w-full bg-[url('/images/Problem_Background.png')] bg-cover bg-no-repeat"
        style={{
          marginTop: "-24px",
          height: "calc(100vh - 320px)",
        }}
      ></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
