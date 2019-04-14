import React, { Component } from "react";

export default class Pictures extends Component{
    
    render() {
        let imgs = ["https://i.imgur.com/XqCMmOE.jpg",
        "https://i.imgur.com/mJ0NvPe.jpg",
        "https://i.imgur.com/cYE2N4p.jpg"];
        const lists = imgs.map(img=>(
            <div class="education margin-b-50">
                <img src={img} alt="cat"></img>
            </div>
        ))
        return (
        <section class="education-section section">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-3">
                        <div class="heading">
                            <h3><b>Pictures</b></h3>
                            <h6 class="font-lite-black"><b>Some cat pictures</b></h6>
                        </div>
                    </div>
                    
                    <div class="col-sm-12 col-md-9">
                        {lists}
                    </div>
                </div>
            </div>
        </section>
        )
    }
}