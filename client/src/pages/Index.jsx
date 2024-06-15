import React, { Fragment } from 'react';
import Menu from './Menu';
import Footer from './Footer';

function Index() {
  return (
    <Fragment>
      <body>
        <div className="main-top" id="home">
          <Menu />

          <div className="main-banner">
            <div className="container" >
              <div className="style-banner ">
                <h4 className="mb-2">Park Szczytnicki</h4>
                <br></br><br></br>
              </div>
              <div className="two-demo-button mt-md-4 mt-3">
                <p>
                  Park Szczytnicki we Wrocławiu to jeden z największych i najpiękniejszych parków miejskich w Polsce, słynący z Ogrodu Japońskiego oraz malowniczych stawów i alejek. Jest to idealne miejsce na relaks i spacery, oferujące bogactwo przyrody oraz spokój w sercu miasta.
                </p>
              </div>
              <div className="view-buttn mt-md-4 mt-sm-4 mt-3">
                <a href="/single" className="btn">Read More</a>
              </div>
            </div>
          </div>
        </div>

        <section className="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div className="row">
              <div className="col-lg-6 about-imgs-txt">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 about-fashion-one">
                    <img src="assets/images/onas_1.png" alt="news image" className="img-fluid" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 about-fashion-two mt-lg-5 mt-md-4 mt-sm-3">
                    <img src="assets/images/onas_2.png" alt="news image" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-right about-two-grids">
                <h3 className="title  mb-md-4 mb-sm-3 mb-3"># O nas <span>Aplikacja</span></h3>
                <div className="about-para-txt">
                  <p>Aplikacja webowa do zbierania informacji o odwiedzonych parkach na terenie Wroclawia umozliwia uzytkownikom skanowanie QR kodow przypisanych do parkow w celu weryfikacji odwiedzin.</p>
                  <p>Użytkownicy mogą przeglądać informacje o wszystkich parkach, brać udział w forach dedykowanych dla poszczególnych parków oraz zdobywać odznaki i punkty w rankingu za odwiedzone miejsca. </p>
                </div>
                <div className="view-buttn mt-lg-5 mt-md-4 mt-3">
                  <a href="single.html" className=" scroll">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="collection py-lg-4 py-md-3 py-sm-3 py-3">
          <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
            <h3 className="title mb-lg-5 mb-md-4 mb-sm-4 mb-3">Regulamin <span>Aplikacji</span></h3>

            <div className="row">
              <div className="col-lg-7 col-md-6 collection-w3layouts">
                <h4> Postanowienia Ogolne</h4>
                <p className="mt-2">Korzystanie z aplikacji oznacza akceptację regulaminu. Aplikacja służy do zbierania informacji o odwiedzonych parkach we Wrocławiu, umożliwiając skanowanie QR kodów, przeglądanie danych o parkach, udział w forach i zdobywanie odznak. Użytkownik jest zobowiązany do podania prawdziwych danych podczas rejestracji i ochrony swojego hasła.</p>
                <div className="view-buttn mt-lg-4 mt-3">
                  <a href="/regulamin" className="">Poczytaj wiecej</a>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <img src="assets/images/rules1.png" alt="news image" className="img-fluid" />
              </div>
            </div>

            <div className="row my-lg-5 my-md-4 my-3">
              <div className="col-lg-5 col-md-6">
                <img src="assets/images/rules2.png" alt="news image" className="img-fluid" />
              </div>
              <div className="col-lg-7 col-md-6 collection-w3layouts">
                <h4>Zasady Korzystania z Aplikacji</h4>
                <p className="mt-2">Użytkownicy mogą skanować QR kody, aby potwierdzić wizytę w parku i zdobywać odznaki. Aplikacja pozwala przeglądać informacje o parkach i uczestniczyć w forach, gdzie tylko odwiedzający mogą publikować posty. Ranking użytkowników jest tworzony na podstawie liczby odwiedzonych parków.</p>
                <div className="view-buttn mt-lg-4 mt-3">
                  <a href="/regulamin" className="">Poczytaj Wiecej</a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7 col-md-6 collection-w3layouts">
                <h4> Prawa i Obowiazki</h4>
                <p className="mt-2">Użytkownicy muszą korzystać z aplikacji zgodnie z prawem i regulaminem, a Operator zapewnia prawidłowe działanie aplikacji oraz ochronę danych osobowych. W przypadku naruszenia regulaminu, Operator może usunąć konto użytkownika. Dane osobowe są chronione zgodnie z przepisami prawa, a użytkownik ma prawo do ich wglądu, poprawiania i usunięcia.</p>
                <div className="view-buttn mt-lg-4 mt-3">
                  <a href="/regulamin" className="">Poczytaj wiecej</a>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <img src="assets/images/rules3.png" alt="news image" className="img-fluid" />
              </div>
            </div>

          </div>
        </section>
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
          </div>
        </section>
        <Footer />
      </body>
    </Fragment>
  )
}

export default Index;