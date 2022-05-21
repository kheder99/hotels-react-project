import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan} from 'react-icons/fa'
export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services : [
                {
                    icon : <FaHiking />,
                    title : "Hiking",
                    info : "There is ample space for hiking"
                },
                {
                    icon : <FaCocktail />,
                    title : "Cocktail",
                    info : "There is free cocktail"
                },
                {
                    icon : <FaShuttleVan />,
                    title : " Free Shuttle ",
                    info : "We provide Shuttle services"
                }
            ]
        };
    }
    render() {
        const services = this.state.services;
        return (
            <section className='services'>
                <Title title="services" />
                <div className='services-center'>
                    {services.map((service,index)=> {
                        return (
                            <article key={index} className="service">
                                <span>{service.icon}</span>
                                <h6>{service.title}</h6>
                                <p>{service.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
