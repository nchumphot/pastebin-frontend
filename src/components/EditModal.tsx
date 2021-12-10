import { useEffect, useState } from "react";
import { handleEdit } from "../utils/handleEdit";
import { Fragment } from "react";
import { IPaste } from "../utils/IPaste";

export function EditModal(props: {
  id: number;
  title: string;
  body: string;
  setSelectedPaste: React.Dispatch<React.SetStateAction<IPaste>>;
  //   pastes: IPaste[];
}): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  useEffect(() => {
    setTitle(props.title);
    setBody(props.body);
  }, [props.title, props.body]);
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#EditModal${props.id}`}
      >
        Edit
      </button>

      <div
        className="modal fade"
        id={`EditModal${props.id}`}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Paste
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setTitle(props.title);
                  setBody(props.body);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                id="titleinput"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <br />
              <textarea
                rows={5}
                id="bodyinput"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                data-dismiss="modal"
                className="btn btn-primary"
                onClick={() => {
                  handleEdit(props.id, title, body);
                  props.setSelectedPaste({
                    id: props.id,
                    title: "",
                    body: "",
                    creation_date: "",
                  });
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
