import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import mail from "./mail";
import Login from "./Login";
import sendmail from "./sendmail";
import {Provider} from 'react-redux';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Switch>
                            <Route path="/logged" component={mail} />
                            <Route path="/sendm" component={sendmail}/>
                            <Route path="/" component={Login} />
                        </Switch>
                    </div>
                </Router>

            </div>
        );
    }
}


export default App;