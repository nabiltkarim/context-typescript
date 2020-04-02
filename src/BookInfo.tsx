import * as React from "react";
import { AppContextConsumer } from "./AppContext";

export const BookInfo = () => (
  <AppContextConsumer>
    {appContext =>
      appContext && (
        <div>
          Name: {appContext.name}, Author: {appContext.author}
        </div>
      )
    }
  </AppContextConsumer>
);

// AppContextConsumer requires a function as a child.
// This function receives the context value and returns a JSX element
