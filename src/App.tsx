import React, { useState } from "react";
import { AppContextInterface, AppContextProvider } from "./AppContext";
import { Book } from "./Book";

const App = () => {
  const [bookName, setBookName] = useState<string>("Book123");
  const [authorName, setAuthorName] = useState<string>("Author123");

  const sampleAppContext: AppContextInterface = {
    name: bookName,
    author: authorName,
    setBookName: (e) => setBookName(e),
    setAuthorName: (e) => setAuthorName(e),
  };

  return (
    <AppContextProvider value={sampleAppContext}>
      <Book />
    </AppContextProvider>
  );
};

export default App;
