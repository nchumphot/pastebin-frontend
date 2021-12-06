import { IPaste } from "../utils/IPaste";

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
        <small>{props.selection.creation_date}</small>
        <p>{props.selection.body}</p>
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
