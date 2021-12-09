export async function handleEdit(
  id: number,
  title: string,
  body: string
): Promise<void> {
  const bodyInfo = { title: title, body: body };
  await fetch(`https://pastebin-c3a8.herokuapp.com/pastes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyInfo),
  });
}
