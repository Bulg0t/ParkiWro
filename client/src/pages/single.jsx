import React, { Fragment } from 'react';
import Menu from './Menu';
import Footer from './Footer';

function Single() {
    return (
        <Fragment>
            <body>
                <div className="header-outs inner_page-banner " id="home">
                    <Menu />
                </div>
                <div className="using-border py-3">
                    <div className="inner_breadcrumb  ml-4">
                        <ul className="short_ls">
                            <li>
                                <a href="index.html">Home</a>
                                <span>/ /</span>
                            </li>
                            <li>Singe Page</li>
                        </ul>
                    </div>
                </div>
                <section className="single page py-lg-4 py-md-3 py-sm-3 py-3" id="single-page">
                    <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                        <h3 className="title mb-lg-5 mb-md-4 mb-sm-4 mb-3"># Single <span>Page</span></h3>
                        <div className="row">
                            <div className="col-lg-6 color-img-three">
                                <img src="assets/images/c1.jpg" alt="news image" className="img-fluid" />
                            </div>
                            <div className="col-lg-6 blog-left-sub">
                                <h4 className="pb-3"><a href="single.html">This Fashion Insider’s Guide To Doing London Like A Local</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non Lorem ipsum dolor sit amet Lorem ipsum dolor
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non Lorem ipsum dolor sit amet Lorem ipsum dolor
                                </p>
                                <div className="row mt-lg-4 mt-md-4 mt-3">
                                    <div className="col-lg-6 col-md-6 col-6 blog-image">
                                        <img src="assets/images/bg1.jpg" alt="news image" className="img-fluid" />
                                        <p className="mt-2">by Lolly Mess</p>
                                    </div>
                                    <div className="blog-date-time col-lg-6 col-md-6 col-6 text-right pt-lg-4">
                                        <ul>
                                            <li><span className="fa fa-heart" aria-hidden="true"></span><a href="single.html">7</a></li>
                                            <li><span className="fa fa-comments" aria-hidden="true"></span><a href="single.html">5</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comments-w3layouts-grid pt-lg-5 pt-md-4 pt-3">
                            <div className="comments-grid-right mb-lg-4 mb-3">
                                <h4>Our Recent Comments</h4>
                            </div>
                            <div className="comment-list mb-lg-4 mb-3">
                                <div className="row pt-3">
                                    <div className="col-lg-2 col-md-3 col-sm-3 comment-imgs ">
                                        <img src="assets/images/cc1.jpg" alt=" " className="img-fluid" />
                                    </div>
                                    <div className="col-lg-10 col-md-9 col-sm-9 single-title text-left">
                                        <h4>Michael Crisp</h4>
                                        <p className="my-2">Ut ex metus, ornare ac ultricies sit amet, auctor a elit. Praesent sit<br></br>
                                            amet scelerisque massa. Duis porta risus id urna finibus aliquet.
                                        </p>
                                        <ul>
                                            <li>5 December 2016 <i>|</i></li>
                                            <li><a href="single.html" className="clr-two">Reply</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row pt-3">
                                    <div className="col-lg-2 col-md-3 col-sm-3 comment-imgs ">
                                        <img src="assets/images/cc2.jpg" alt=" " className="img-fluid" />
                                    </div>
                                    <div className="col-lg-10 col-md-9 col-sm-9 single-title text-left">
                                        <h4>Michael Crisp</h4>
                                        <p className="my-2">Ut ex metus, ornare ac ultricies sit amet, auctor a elit. Praesent sit<br/>
                                            amet scelerisque massa. Duis porta risus id urna finibus aliquet.
                                        </p>
                                        <ul>
                                            <li>5 December 2016 <i>|</i></li>
                                            <li><a href="single.html" className="clr-two">Reply</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3 form-comment">
                                <div className="mb-3 comments-grid-right text-left">
                                    <h4>Leave a Comment</h4>
                                </div>
                                <form className="pt-lg-2" action="#" method="post">
                                    <div className="row wls-contact-mid">
                                        <div className="col-lg-6 form-group contact-forms">
                                            <input type="text" className="form-control" placeholder="Name" required="" />
                                        </div>
                                        <div className="col-lg-6 form-group contact-forms">
                                            <input type="email" className="form-control" placeholder="Email" required="" />
                                        </div>
                                    </div>
                                    <div className="form-group contact-forms mb-0">
                                        <textarea className="form-control" placeholder="Message" rows="2" required=""></textarea>
                                    </div>
                                    <button type="submit" className="btn mt-lg-4 mt-3 sent-butnn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </body>
        </Fragment>
    )
}

export default Single;