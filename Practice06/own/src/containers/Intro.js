import React, { Component } from "react";

export default class Intro extends Component{
    render(){
        return (
            <section className="about-section section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                            <div className="heading">
                                <h3><b>About me</b></h3>
                                <h6 className="font-lite-black"><b>Self Introduction</b></h6>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-9">
                            <p className="margin-b-50">I’m a black cat named Charlie. 
                            I like to sleep, eat fish and play with my neighbor named Bobby.
                            I usually think about what's the difference between a cat and a person.
                            After a long time, I feel like there might be no difference between us.</p>
                        </div>
                    </div>
                </div>
	        </section>
	
        )
    }
}