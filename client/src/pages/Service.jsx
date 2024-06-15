import React, { Fragment } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Service(){
    return(
        <Fragment>
            <body>
                <div className="header-outs inner_page-banner " id="home">
                    <Menu />
                </div>
                <div className="using-border py-3">
                    <div className="inner_breadcrumb  ml-4">
                        <ul className="short_ls">
                            <li>
                                <a href="/home">Home</a>
                                <span>/ /</span>
                            </li>
                            <li>service</li>
                        </ul>
                    </div>
                </div>
                <section className="service py-lg-4 py-md-3 py-sm-3 py-3" id="service">
                    <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                        <h3 className="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Przykladowe <span>Odznaki</span></h3>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center">
                                <div className="ser-fashion-grid">
                                    <div className="about-icon mb-md-4 mb-3">
                                        <span className="fa fa-star-half-o"></span>
                                    </div>
                                    <div className="ser-sevice-grid">
                                        <h4 className="pb-3">Parkowy Odkrywca </h4>
                                        <p>Zeskanowanie QR kodu w dowolnym parku po raz pierwszy!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center">
                                <div className="ser-fashion-grid">
                                    <div className="about-icon mb-md-4 mb-3">
                                        <span className="fa fa-leaf" aria-hidden="true"></span>
                                    </div>
                                    <div className="ser-sevice-grid">
                                        <h4 className="pb-3">Znawca Zieleni</h4>
                                        <p>Odznaka za odwiedzenie pieciu roznych parkow!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center">
                                <div className="ser-fashion-grid">
                                    <div className="about-icon mb-md-4 mb-3">
                                        <span className="fa fa-building-o " aria-hidden="true"></span>
                                    </div>
                                    <div className="ser-sevice-grid">
                                        <h4 className="pb-3">Miejski Eksplorer</h4>
                                        <p>Odznaka za odwiedzenie wszystkich parkow w jednej dzielnicy!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                                <div className="ser-fashion-grid">
                                    <div className="about-icon mb-md-4 mb-3">
                                        <span className="fa fa-moon-o " aria-hidden="true"></span>
                                    </div>
                                    <div className="ser-sevice-grid">
                                        <h4 className="pb-3">Nocny Spacerowicz</h4>
                                        <p>Odznaka za odwiedzenie parku w godzinach wieczornych!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                                <div className="ser-fashion-grid">
                                    <div className="about-icon mb-md-4 mb-3">
                                        <span className="fa fa-camera-retro" aria-hidden="true"></span>
                                    </div>
                                    <div className="ser-sevice-grid">
                                        <h4 className="pb-3">Fotograf Natury</h4>
                                        <p>Odznaka za dodanie pierwszego zdjecia do opisu parku!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                                <div className="ser-fashion-grid">
                                    <div className="about-icon mb-md-4 mb-3">
                                        <span className="fa fa-pagelines" aria-hidden="true"></span>
                                    </div>
                                    <div className="ser-sevice-grid">
                                        <h4 className="pb-3">Eko Przyjaciel</h4>
                                        <p>Odznaka za udzial w wydarzeniu ekologicznym w parku!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <Link to="/assign-badge" className="btn btn-primary mr-3">Przypisz odznakę</Link>
                            <Link to="/user-badges" className="btn btn-secondary">Wyświetl moje odznaki</Link>
                        </div>
                    </div>
                </section>
                <Footer />
            </body>
        </Fragment>
    )
}

export default Service;
