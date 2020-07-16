import React from "react";

import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import HangmanApp from "./components/HangmanApp";
import Footer from "./components/Footer";
import Page from "./components/Page";

function App() {
    const cakeresume =
        "https://www.cakeresume.com/s--xsdQ1rioVY0dvThLuhajWA--/hitz";
    return (
        <div className="App">
            <Header cakeresume={cakeresume} />
            <ProjectList />
            <Page>
                <HangmanApp />
            </Page>
            <Footer cakeresume={cakeresume} />
        </div>
    );
}

export default App;
