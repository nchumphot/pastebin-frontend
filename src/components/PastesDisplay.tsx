// import { useEffect, useState } from "react";
// import { fetchData } from "../utils/fetchData";
import { IPaste } from "../utils/IPaste";
import { ISO8601toDate } from "../utils/ISO8601toDate";

export function PastesDisplay(props: {
  setSelection: React.Dispatch<React.SetStateAction<IPaste | undefined>>;
  setPastes: React.Dispatch<React.SetStateAction<IPaste[]>>;
  pastes: IPaste[];
}): JSX.Element {
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
      {props.pastes.map((paste) => PasteItems(paste))}
    </div>
  );
}
