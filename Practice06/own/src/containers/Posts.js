import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'

export default class Posts extends Component{
    render() {
        const postIDs = ["1", "2", "3"];
        const postName = ["how to be a cat", "what's the difference between cat and human", "how to talk with cat"];
        const lists = postIDs.map((i, index) => (
            <div class="education margin-b-50">
                <NavLink to={"/posts/" + i}>{postName[index]}</NavLink>
            </div>
        ));
        return(
            <section class="experience-section section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-3">
                            <div class="heading">
                                <h3><b>Posts</b></h3>
                                <h6 class="font-lite-black"><b>What I'm thinking about</b></h6>
                            </div>
                        </div>
                        
                        <div class="col-sm-12 col-md-9">
                            <div class="education-wrapper">
                                {lists}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}