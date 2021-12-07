import { IPaste } from "../utils/IPaste";
import { LineBreak } from "../utils/LineBreak";
import { ISO8601toDate } from "../utils/ISO8601toDate";

export function SelectedPaste(props: {
  selection: IPaste | undefined;
}): JSX.Element {
  if (props.selection !== undefined) {
    return (
      <div className="selectedpaste">
        {props.selection.title === null ? (
          <h3>Untitled</h3>
        ) : (
          <h3>{props.selection.title}</h3>
        )}
        <small>{ISO8601toDate(props.selection.creation_date)}</small>
        <LineBreak str={props.selection.body} isShort={false} />
      </div>
    );
  } else {
    return (
      <>
        <p>Select a paste</p>
      </>
    );
  }
}
