import { useState } from "react";
import { handleEdit } from "../utils/handleEdit";

export function EditModal(props: {
  id: number;
  title: string;
  body: string;
  //   setPastes: React.Dispatch<React.SetStateAction<IPaste[]>>;
  //   pastes: IPaste[];
}): JSX.Element {
  const [title, setTitle] = useState<string>(props.title);
  const [body, setBody] = useState<string>(props.body);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Edit
      </button>

      <div
        className="modal fade"
        id="exampleModal"
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
                  setTitle("");
                  setBody("");
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
                onClick={() => handleEdit(props.id, props.title, props.body)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
