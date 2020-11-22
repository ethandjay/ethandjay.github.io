import React from "react"
import ReactDOM from "react-dom"
import SiteContainer from "./components/SiteContainer";
import { AppProvider } from "./components/AppContext";

const App = () => {
    return (
        <AppProvider>
            <SiteContainer />
        </AppProvider>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('react-root')
);