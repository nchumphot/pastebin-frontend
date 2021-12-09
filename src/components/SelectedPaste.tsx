import { IPaste } from "../utils/IPaste";
import { LineBreak } from "../utils/LineBreak";
import { ISO8601toDate } from "../utils/ISO8601toDate";

export function SelectedPaste(props: {
  selection: IPaste | undefined;
}): JSX.Element {
  if (props.selection !== undefined) {
    return (
      <div className="selected-paste">
        {props.selection.title === null ? (
          <h3 className="selected-paste-title">Untitled</h3>
        ) : (
          <h3 className="selected-paste-title">{props.selection.title}</h3>
        )}
        <small className="selected-paste-date">
          {ISO8601toDate(props.selection.creation_date)}
        </small>
        <LineBreak str={props.selection.body} isShort={false} />
      </div>
    );
  } else {
    return (
      <div className="no-paste-selected">
        <p>Select a paste</p>
      </div>
    );
  }
}
