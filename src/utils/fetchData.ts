import React from "react";
import { IPaste } from "./IPaste";

export async function fetchData(url: string, setState: React.Dispatch<React.SetStateAction<IPaste[]>>): Promise<void> {
    const response = await fetch(url);
    const jsonBody = await response.json();
    //setState(jsonBody.rows);
    setState(jsonBody);
}