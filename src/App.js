import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import './css/App.css';

function App() {
    const [mode, setMode] = useState('light');
    const [theme, setTheme] = useState('rgb(255,255,255)');

    const changeMode = (themeColor) => {
        if (mode === 'dark') {
            setMode('light');
            setTheme(themeColor);
            document.body.style.backgroundColor = themeColor;
            console.log(themeColor);
        } else {
            setTheme('rgb(255,255,255');
            setMode('dark');
            document.body.style.backgroundColor = themeColor;
        }
    };
    return (
        <Router>
            <div className="App">
                <Navbar about="About TextUtils" mode={mode} theme={theme} changeMode={changeMode} />
                {/* <Alert /> */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <TextArea heading="Input Your Text To" mode={mode} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
