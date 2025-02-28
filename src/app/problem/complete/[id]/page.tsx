import Header from "@/components/Header";
import CompleteForm from "@/containers/problem/CompleteForm";

export default async function complete({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="w-full">
      <Header buttonSrc="/icons/Back_Button.png" />
      <CompleteForm id={id} />
    </div>
  );
}
