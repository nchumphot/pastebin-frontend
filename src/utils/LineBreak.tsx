export function LineBreak(props: {
  str: string;
  isShort: boolean;
}): JSX.Element {
  const wordArr = props.isShort
    ? props.str.split("\n").slice(0, 5)
    : props.str.split("\n");
  return (
    <>
      {wordArr.map((line, idx) => (
        <div key={idx}>
          {line} <br />
        </div>
      ))}
    </>
  );
}
