// import { useEffect, useState } from "react";
// import { fetchData } from "../utils/fetchData";
import { IPaste } from "../utils/IPaste";
import { ISO8601toDate } from "../utils/ISO8601toDate";
import { LineBreak } from "../utils/LineBreak";

export function PastesDisplay(props: {
  setSelection: React.Dispatch<React.SetStateAction<number>>;
  setPastes: React.Dispatch<React.SetStateAction<IPaste[]>>;
  pastes: IPaste[];
}): JSX.Element {
  const PasteItems = (item: IPaste): JSX.Element => {
    const dateStr = ISO8601toDate(item.creation_date);
    return (
      <div className="paste" key={item.id}>
        {item.title === null ? (
          <h3 className="paste-title">Untitled</h3>
        ) : (
          <h3 className="paste-title">{item.title}</h3>
        )}
        <small>{dateStr}</small>
        <LineBreak str={item.body} isShort={true} />
        <button onClick={() => props.setSelection(item.id)}>See more</button>
      </div>
    );
  };
  return (
    <div className="paste-display">
      {props.pastes.map((paste) => PasteItems(paste))}
    </div>
  );
}
