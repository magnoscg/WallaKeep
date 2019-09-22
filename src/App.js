import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./components/home/Home";
import SignIn from "./components/sign-in/SignIn";

// ESTE FICHERO NO HAY QUE TOCARLO

class App extends Component {
    render() {
        return <div>
            <Router>
                <Switch>
                <Route exact path="/" component={SignIn}/>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/home" component={Home}/>
                <Route component={SignIn}/>
                </Switch>
            </Router>
            <span className="easter-egg"><a target={`_blank`} href="https://stackblitz.com/@Linkaynn">Made with <span>❤</span>️ to KeepCoding React Class</a></span>
        </div>
    }
}

export default App;
