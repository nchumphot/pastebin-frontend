import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { IPaste } from "../utils/IPaste";
import { ISO8601toDate } from "../utils/ISO8601toDate";

export function PastesDisplay(props: {
  setSelection: React.Dispatch<React.SetStateAction<IPaste | undefined>>;
}): JSX.Element {
  const [pastes, setPastes] = useState<IPaste[]>([]);

  useEffect(() => {
    fetchData("https://pastebin-c3a8.herokuapp.com/pastes/recent", setPastes);
  }, []);

  const PasteItems = (item: IPaste): JSX.Element => {
    const dateStr = ISO8601toDate(item.creation_date);
    return (
      <div className="paste" key={item.id}>
        {item.title === null ? <h3>Untitled</h3> : <h3>{item.title}</h3>}
        <small>{dateStr}</small>
        <p>{item.body}</p>
        <button onClick={() => props.setSelection(item)}>See more</button>
      </div>
    );
  };
  return (
    <div className="pastesdisplay">
      {pastes.map((paste) => PasteItems(paste))}
    </div>
  );
}
