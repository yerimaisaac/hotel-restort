import React, {Component} from "react";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from './Title';

export default class Services extends
Component {
    state={
        services :[
        {
            icon:<FaCocktail/>,
            title:"free cocktails",
            info:"under construction"
        },
        {
            icon:<FaHiking/>,
            title:"Endless Hinking",
            info:"under contruction"
        },
        {
            icon:< FaShuttleVan/>,
            title:"Free shuttle",
            info:"under contruction"
        },
        {
            icon:< FaBeer/>,
            title:"free Beer",
            info:"under contruction"
        },
        ]
    }
    render () {
        return (
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <h6>{item.info}</h6>
                        </article>
                    })}
                </div>
            </section>
                
            
        );
    }
}
