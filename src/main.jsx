import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
// ================ import bootstrap ================= //
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// ================ import fontawesome================= //
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>
    </Provider>,

)
