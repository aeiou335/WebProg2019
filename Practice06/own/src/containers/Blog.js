import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'

import Intro from "./Intro";
import Posts from "./Posts";
import Pictures from "./Pictures";

export default class Blog extends Component{
    render() {
        return (
        <div>
            <section className="btn-section section">
            <div className="container">            
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading">
                            <h4><b>Buttons</b></h4>
                        </div>
                    </div>
                </div>
            
                <button type="button" className="delete-button">
                    <NavLink to="/intro" exact>
                        Introduction
                    </NavLink>
                </button>
                <button type="button" className="delete-button">
                    <NavLink to="/posts" exact>
                        Posts
                    </NavLink>
                </button>
                <button type="button" className="delete-button">
                    <NavLink to="/picture" exact>
                    Pictures
                    </NavLink>
                </button>
                <button type="button" className="delete-button">
                    <NavLink to="/home" exact>
                        Home
                    </NavLink>
                </button>
            </div>
            </section>
            <Switch>
                <Route path="/intro" component={Intro} />
                <Route path="/posts" component={Posts} />
                <Route path="/posts/:id?" component={Posts} />
                <Route path="/picture" component={Pictures} />
                <Redirect from="/home" to="/" />
            </Switch>
        </div>
        
        )
    }
}