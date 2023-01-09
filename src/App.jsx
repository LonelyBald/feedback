import React from "react";
import { Layout } from "./components/Layout";
import "./scss/layout.scss";
import { Provider } from "react-redux";
import { store } from "./redux";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
