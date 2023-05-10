import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux"; // legacy
import reduxThunk from "redux-thunk";

//jeito novo da linha acima : import { configureStore } from '@reduxjs/toolkit'

import App from "./components/App";
import reducers from "./reducers";

//const stores = configureStore()
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
