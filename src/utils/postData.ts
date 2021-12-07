export async function postData(title: string, body: string): Promise<void> {
  try {
    const bodyInfo = { title: title, body: body };
    const response = await fetch("https://pastebin-c3a8.herokuapp.com/pastes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyInfo),
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
