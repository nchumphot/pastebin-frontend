import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { IPaste } from "../utils/IPaste";

export function PastesDisplay(): JSX.Element {
    const [pastes, setPastes] = useState<IPaste[]>([]);

    useEffect(
        () => {fetchData("https://pastebin-c3a8.herokuapp.com/pastes/recent", setPastes)}, []
    )

    console.log(pastes);

    const PasteItems = (item: IPaste) : JSX.Element => {
        return (
            <div className="paste">
                {item.title === null ? <h3>Untitled</h3> : <h3>{item.title}</h3>}
                <small>{item.creation_date}</small>
                <p>{item.body}</p>
            </div>
        )
    }
    return (
    <div className="pastesdisplay">
        {pastes.map((paste) => PasteItems(paste))}
    </div>)
}