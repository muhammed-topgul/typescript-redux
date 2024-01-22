import React, {JSX} from 'react';
import {Provider} from "react-redux";
import {store} from "./data/store";
import RepositoryList from "./component/RepositoryList";

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <div>
                <h1>Search for a package</h1>
                <RepositoryList/>
            </div>
        </Provider>
    );
}

export default App;
