import { useState } from "react";
import { postData } from "../utils/postData";
import { fetchData } from "../utils/fetchData";
import { IPaste } from "../utils/IPaste";

export function PostModal(props: {
  setPastes: React.Dispatch<React.SetStateAction<IPaste[]>>;
  pastes: IPaste[];
}): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Create new
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
                Create New Paste
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
                placeholder="Optional title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <br />
              <input
                id="bodyinput"
                placeholder="Paste body here"
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
                  postData(title, body).then(() => {
                    fetchData(
                      "https://pastebin-c3a8.herokuapp.com/pastes/recent",
                      props.setPastes
                    );
                    setTitle("");
                    setBody("");
                  });
                }}
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
