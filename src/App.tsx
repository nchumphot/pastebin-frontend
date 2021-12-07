import { useState } from "react";
import { PastesDisplay } from "./components/PastesDisplay";
import { PostModal } from "./components/PostModal";
import { SelectedPaste } from "./components/SelectedPaste";
import { IPaste } from "./utils/IPaste";
import { useEffect } from "react";
import { fetchData } from "./utils/fetchData";

function App(): JSX.Element {
  const [selection, setSelection] = useState<IPaste | undefined>();
  const [pastes, setPastes] = useState<IPaste[]>([]);

  useEffect(() => {
    fetchData("https://pastebin-c3a8.herokuapp.com/pastes/recent", setPastes);
  }, [pastes]);

  return (
    <>
      <PostModal {...{ pastes, setPastes }} />
      <PastesDisplay setSelection={setSelection} {...{ pastes, setPastes }} />
      <h1>==========================================</h1>
      <SelectedPaste selection={selection} />
    </>
  );
}

export default App;
