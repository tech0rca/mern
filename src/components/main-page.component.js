import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../node_modules/@fortawesome/fontawesome-free/css/brands.css';

export default class Mainpage extends Component {

    constructor(props) {
        super(props);
    }


    render () {
        return (
            <div class="parent">
            <div class="container">
                <div class="jumbotron bg-dark text-white">
                    <h1 class="display-4">Welcome!</h1>
                    <p class="lead">Welcome to this Innovation Friday page from Tech0rca.</p>
                    <hr class="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
            </div>

            <div class="row d-flex justify-content-around ">


            {/* cards */}
            <div class="card" style={{width: "18rem"}}>
            <div class="card-body">

                <h5 class="card-title">Built with React</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>

            <div class="card" style={{width: "18rem"}}>
            <div class="card-body">
                <h5 class="card-title">Written in JS</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>

            <div class="card" style={{width: "18rem"}}>
            <div class="card-body">
            <i className="fab fa-react"></i>
                <h5 class="card-title">Hosted on AWS</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>

            </div>


            
            <br/>
            {/* footer */}
            <div class="container bg-dark text-white d-flex justify-content-around ">
                FOOTER
            </div>
            </div>
        );
    }

}