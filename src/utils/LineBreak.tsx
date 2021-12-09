export function LineBreak(props: {
  str: string;
  isShort: boolean;
}): JSX.Element {
  const wordArr = props.isShort
    ? props.str.split("\n").slice(0, 5)
    : props.str.split("\n");
  return (
    <div className={props.isShort ? "paste-body" : "selected-paste-body"}>
      {wordArr.map((line, idx) => (
        <div key={idx}>
          {line} <br />
        </div>
      ))}
    </div>
  );
}
