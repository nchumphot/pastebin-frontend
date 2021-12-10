import { IPaste } from "../utils/IPaste";
import { LineBreak } from "../utils/LineBreak";
import { ISO8601toDate } from "../utils/ISO8601toDate";
import { handleDelete } from "../utils/handleDelete";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { EditModal } from "./EditModal";

export function SelectedPaste(props: {
  selection: number;
  setSelection: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  const [selectedPaste, setSelectedPaste] = useState<IPaste>({
    id: 0,
    title: "",
    body: "",
    creation_date: "",
  });

  const getSelectedPaste = async () => {
    const data = await fetchData(
      `https://pastebin-c3a8.herokuapp.com/pastes/${props.selection}`
    );
    setSelectedPaste(data[0]);
  };

  useEffect(() => {
    getSelectedPaste();
  });

  if (props.selection !== 0) {
    return (
      <div className="selected-paste">
        {selectedPaste.title === null ? (
          <h3 className="selected-paste-title">Untitled</h3>
        ) : (
          <h3 className="selected-paste-title">{selectedPaste.title}</h3>
        )}
        <small className="selected-paste-date">
          {ISO8601toDate(selectedPaste.creation_date)}
        </small>
        <LineBreak str={selectedPaste.body} isShort={false} />
        <EditModal
          id={selectedPaste.id}
          title={selectedPaste.title === null ? "" : selectedPaste.title}
          body={selectedPaste.body}
        />
        <button
          onClick={() => {
            handleDelete(props.selection);
            props.setSelection(0);
          }}
        >
          Delete
        </button>
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
