export async function handleDelete(id: number): Promise<void> {
  await fetch(`https://pastebin-c3a8.herokuapp.com/pastes/${id}`, {
    method: "DELETE",
  });
}
