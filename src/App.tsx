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
  const [selection, setSelection] = useState<IPaste | undefined>();
  const [pastes, setPastes] = useState<IPaste[]>([]);

  useEffect(() => {
    fetchData("https://pastebin-c3a8.herokuapp.com/pastes/recent", setPastes);
  }, [pastes]);

  return (
    <>
      <PageHeader />
      <PostModal {...{ pastes, setPastes }} />
      <div className="columns">
        <PastesDisplay setSelection={setSelection} {...{ pastes, setPastes }} />
        <SelectedPaste selection={selection} />
      </div>
    </>
  );
}

export default App;
