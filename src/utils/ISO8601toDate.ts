export function ISO8601toDate(timeStr: string): string {
  const date = new Date(timeStr);
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dateStr = day + "/" + month + "/" + year;
  return dateStr;
}
