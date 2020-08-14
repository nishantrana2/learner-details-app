import React, { Component } from 'react';
// import logo from './logo.svg';

// import classes from "./App.module.css";
import LearnerDetails from './containers/LearnerDetails/LearnerDetails';
import { Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
        <main >
            <Route
                path="/"
                render={
                    () =>
                        < LearnerDetails />
                }
            />
        </main>
    );

}
}


