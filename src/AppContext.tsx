import * as React from "react";

export interface AppContextInterface {
  name: string;
  author: string;
  setBookName(name: string): void;
  setAuthorName(name: string): void;
}

const ctxt = React.createContext<AppContextInterface | null>(null);

export const AppContextProvider = ctxt.Provider;

export const AppContextConsumer = ctxt.Consumer;
