import React, { Fragment } from 'react';
import Menu from './Menu';
import Footer from './Footer';

function Gallery(){
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
          <li>Gallery</li>
        </ul>
      </div>
    </div>
    <section className="gallery py-lg-4 py-md-3 py-sm-3 py-3">
      <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
        <h3 className="title mb-lg-5 mb-md-4 mb-sm-4 mb-3"># our <span>Gallery</span></h3>
        <div className="row gallery-info">
          <div className="col-lg-4 col-md-4 col-sm-4 gallery-img-grid p-0">
            <div className="gallery-grids">
              <a href="#gal1"><img src="assets/images/c2.jpg" alt="news image" className="img-fluid"/></a>
            </div>
            <div className="gallery-grids">
              <a href="#gal2"><img src="assets/images/ab2.jpg" alt="news image" className="img-fluid"/></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 gallery-img-grid p-0">
            <div className="gallery-grids">
              <a href="#gal3"><img src="assets/images/ab1.jpg" alt="news image" className="img-fluid"/></a>
            </div>
            <div className="gallery-grids">
              <a href="#gal4"><img src="assets/images/c1.jpg" alt="news image" className="img-fluid"/></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 gallery-img-grid p-0">
            <div className="gallery-grids">
              <a href="#gal5"><img src="assets/images/c3.jpg" alt="news image" className="img-fluid"/></a>
            </div>
            <div className="gallery-grids">
              <a href="#gal6"><img src="assets/images/c4.jpg" alt="news image" className="img-fluid"/></a>
            </div>
          </div>
        </div>
        <div id="gal1" className="popup-effect">
          <div className="popup">
            <img src="assets/images/c2.jpg" alt="Popup Image" className="img-fluid" />
            <a className="close" href="#gallery">&times;</a>
          </div>
        </div>
        <div id="gal2" className="popup-effect">
          <div className="popup">
            <img src="assets/images/ab2.jpg" alt="Popup Image" className="img-fluid" />
            <a className="close" href="#gallery">&times;</a>
          </div>
        </div>
        <div id="gal3" className="popup-effect">
          <div className="popup">
            <img src="assets/images/ab1.jpg" alt="Popup Image" className="img-fluid" />
            <a className="close" href="#gallery">&times;</a>
          </div>
        </div>
        <div id="gal4" className="popup-effect">
          <div className="popup">
            <img src="assets/images/c1.jpg" alt="Popup Image" className="img-fluid" />
            <a className="close" href="#gallery">&times;</a>
          </div>
        </div>
        <div id="gal5" className="popup-effect">
          <div className="popup">
            <img src="assets/images/c3.jpg" alt="Popup Image" className="img-fluid" />
            <a className="close" href="#gallery">&times;</a>
          </div>
        </div>
        <div id="gal6" className="popup-effect">
          <div className="popup">
            <img src="assets/images/c4.jpg" alt="Popup Image" className="img-fluid" />
            <a className="close" href="#gallery">&times;</a>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </body>
        </Fragment>
    )
}

export default Gallery;