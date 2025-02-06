export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full sm:max-w-[460px] min-h-real-screen mx-auto p-6 bg-white rounded-xl shadow-lg flex flex-col justify-center items-center relative overflow-hidden">
      {children}
    </div>
  );
}
