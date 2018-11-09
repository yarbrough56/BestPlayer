import React, { Component } from 'react';
import { TopNavBar } from './TopNavBar';
import { Main } from './Main';
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopNavBar/>
                <Main/>
            </div>
        );
    }
}

export default App;