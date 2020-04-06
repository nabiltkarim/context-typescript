import * as React from "react";
import { AppContextConsumer } from "./AppContext";

export const BookInfo = () => (
  <AppContextConsumer>
    {(appContext) =>
      appContext && (
        <React.Fragment>
          <div>
            Name: {appContext.name}, Author: {appContext.author}
          </div>
          <div>
            <button onClick={() => appContext.setAuthorName("Author changed")}>
              Change Author
            </button>
          </div>
        </React.Fragment>
      )
    }
  </AppContextConsumer>
);

// AppContextConsumer requires a function as a child.
// This function receives the context value and returns a JSX element
