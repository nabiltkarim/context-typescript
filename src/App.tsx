import * as React from "react";
import { AppContextInterface, AppContextProvider } from "./AppContext";
import { Book } from "./Book";

const sampleAppContext: AppContextInterface = {
  name: "Book123",
  author: "Author123"
};

const App = () => (
  <AppContextProvider value={sampleAppContext}>
    <Book />
  </AppContextProvider>
);

export default App;
