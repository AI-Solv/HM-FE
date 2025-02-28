import { ReactNode } from "react";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full relative">
      <div
        className="absolute top-0 left-0 w-full bg-[url('/images/Problem_Background.png')] bg-cover bg-no-repeat"
        style={{
          width: "calc(100% + 48px)",
          marginLeft: "-24px",
          marginRight: "-24px",
          marginTop: "-24px",
          height: "calc(100vh - 320px)",
        }}
      ></div>
      {children}
    </div>
  );
}
