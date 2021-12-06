import { useState } from "react";
import { PastesDisplay } from "./components/PastesDisplay";
import { SelectedPaste } from "./components/SelectedPaste";
import { IPaste } from "./utils/IPaste";

function App(): JSX.Element {
  const [selection, setSelection] = useState<IPaste | undefined>();

  return (
    <>
      <PastesDisplay setSelection={setSelection} />
      <h1>==========================================</h1>
      <SelectedPaste selection={selection} />
    </>
  );
}

export default App;
