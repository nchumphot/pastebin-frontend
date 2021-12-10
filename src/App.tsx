import { useState } from "react";
import { PastesDisplay } from "./components/PastesDisplay";
import { PostModal } from "./components/PostModal";
import { SelectedPaste } from "./components/SelectedPaste";
import { IPaste } from "./utils/IPaste";
import { useEffect } from "react";
import { fetchData } from "./utils/fetchData";
import { PageHeader } from "./components/PageHeader";
import "./App.css";

function App(): JSX.Element {
  const [selection, setSelection] = useState<number>(0);
  const [pastes, setPastes] = useState<IPaste[]>([]);

  useEffect(() => {
    const getPastes = async () => {
      const data = await fetchData(
        "https://pastebin-c3a8.herokuapp.com/pastes/recent"
      );
      setPastes(data);
    };
    getPastes();
  }, [pastes]);

  return (
    <>
      <PageHeader />
      <PostModal {...{ pastes, setPastes }} />
      <div className="columns">
        <PastesDisplay setSelection={setSelection} {...{ pastes, setPastes }} />
        <SelectedPaste {...{ selection, setSelection }} />
      </div>
    </>
  );
}

export default App;
