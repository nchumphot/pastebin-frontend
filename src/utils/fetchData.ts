import { IPaste } from "./IPaste";

export async function fetchData(url: string): Promise<IPaste[]> {
  const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody.data;
}
