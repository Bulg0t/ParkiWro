import React, { Fragment } from 'react';
import Menu from './Menu';
import Footer from './Footer';

function Contact() {
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
                                <a href="/home">Home</a>
                                <span>/ /</span>
                            </li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <section className="contact py-lg-4 py-md-3 py-sm-3 py-3">
                    <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                        <h3 className="title text-right mb-lg-5 mb-md-4 mb-sm-4 mb-3"># Contact <span>Us</span></h3>
                        <div className="row">
                            <div className="address_mail_footer_grids col-lg-6 col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.38425266843!2d21.813392476392075!3d50.74990836575743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722b638698f423b%3A0x749acdb88f03dd77!2sS%C5%82upcza%20162%2C%2027-620%20S%C5%82upcza!5e0!3m2!1sen!2spl!4v1715640331344!5m2!1sen!2spl"></iframe>                            </div>
                            <div className="col-lg-6 col-md-6 contact-form-txt">
                                <form action="#" method="post">
                                    <div className="w3pvt-wls-contact-mid">
                                        <div className="form-group contact-forms">
                                            <input type="text" className="form-control" placeholder="Name" required="" />
                                        </div>
                                        <div className="form-group contact-forms">
                                            <input type="email" className="form-control" placeholder="Email" required="" />
                                        </div>
                                        <div className="form-group contact-forms">
                                            <input type="text" className="form-control" placeholder="Phone" required="" />
                                        </div>
                                        <div className="form-group contact-forms">
                                            <textarea className="form-control" placeholder="Message" rows="3" required=""></textarea>
                                        </div>
                                        <button type="submit" className="btn sent-butnn">Send</button>
                                    </div>
                                </form>
                                <div className="row mt-lg-5 mt-md-4 mt-3">
                                    <div className="contact-list-grid col-lg-6 col-md-6 col-sm-6">
                                        <h4>Branch 1</h4>
                                        <p className="pt-2">Melbourne St,South Birbane 4101</p>
                                        <p>Austraila</p>
                                    </div>
                                    <div className="contact-list-grid col-lg-6 col-md-6 col-sm-6">
                                        <h4>Branch 2</h4>
                                        <p className="pt-2">Melbourne St,South Birbane 4101</p>
                                        <p>Austraila</p>
                                    </div>
                                </div>
                                <div className="row mt-lg-4 mt-3">
                                    <div className="contact-list-grid col-lg-6 col-md-6 col-sm-6">
                                        <h4>Phone</h4>
                                        <p className="pt-2">(000)1122333</p>
                                        <p>+(000) 123 4565 32</p>
                                    </div>
                                    <div className="contact-list-grid col-lg-6 col-md-6 col-sm-6">
                                        <h4>Email</h4>
                                        <p className="pt-2"><a href="mailto:info@example.com">info@example1.com</a>
                                        </p>
                                        <p className="pt-2"><a href="mailto:info@example.com">info@example.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </body>
        </Fragment>
    )
}

export default Contact;