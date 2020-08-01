import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./styles.js";
import App from "./App";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { store } from "./store/reducers";

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById("root")
);
