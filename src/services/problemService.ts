export async function submitResolution(
  id: string,
  resolution: string,
  satisfaction: number
) {
  const response = await fetch(
    `/api/problems/${id}/resolve`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resolution, satisfaction }),
    }
  );
  if (!response.ok) {
    throw new Error("문제 해결을 제출하는데 실패했습니다.");
  }
  return await response.json();
}
