import React, {Component, useEffect, useState} from "react";
import {CSSTransition} from 'react-transition-group'
import {
    BrowserRouter as Router, Redirect,
    Route,
} from "react-router-dom";

import './App.scss';
import Gender from "./Pages/Gender/Gender";
import PhysicalParameters from "./Pages/PhysicalParameters/PhysicalParameters";

const routes = [
    {path: '/', name: 'Gender', Component: App},
    {path: '/gender', name: 'Gender', Component: Gender},
    {path: '/phys', name: 'Phys', Component: PhysicalParameters},
]

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMale: true,
            age: '',
            height: '',
            curWeight: '',
            purpose: 'Выбрать',
            targetWeight: ''
        }
        this.setGender = this.setGender.bind(this);
        this.setParams = this.setParams.bind(this);
    }

    setGender(isMale) {
        this.setState({
            isMale: isMale
        });
    }

    setParams(params) {
        this.setState(params);
    }

    render() {
        return (
            <Router>
                <div className="root">
                    {routes.map(({path, Component}) => (
                        <Route key={path} exact path={path}>
                            {path === '/' ?
                                <Redirect to="/gender" />
                                : ({match}) => (
                                    <CSSTransition
                                        in={match != null}
                                        timeout={300}
                                        classNames="page"
                                        unmountOnExit>
                                        <div
                                            className={"page " + (path === '/gender' ? 'forward' : 'back')}>
                                            {path === '/gender'
                                                ?
                                                <Component curGender={this.state.isMale} setupGender={this.setGender}/>
                                                : <Component setupParams={this.setParams}/>
                                            }
                                        </div>
                                    </CSSTransition>
                                )}
                        </Route>
                    ))}
                </div>
            </Router>
        );
    }
}

export default App;


