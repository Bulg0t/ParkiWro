import React, { Fragment, useState, useEffect } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import axios from 'axios';
import Blog from './Blog';

function About() {
  const [parks, setParks] = useState([]);
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/parks');
        console.log(response.data);
        setParks(response.data);
      } catch (error) {
        console.error('Błąd podczas pobierania danych', error);
      }
    };
    fetchData();
  }, []);

  const handleBlogClick = (park) => {
    setSelectedPark(park);
  };

  if (selectedPark) {
    return <Blog park={selectedPark} />;
  }

  return (
    <Fragment>
      <body>
        <Menu />
        <br /><br /><br />
        <div className="container">
          <h1 className="my-4">Wszystkie parki we Wroclawiu</h1>
          {parks.map((parkItem) => {
            return parkItem.Parki.map((park) => {
              const { nazwa_parku, opis_parku, zdjecia_parku } = park;
              console.log("test", park);
              console.log("test des", opis_parku);
              return (
                <div className="park" key={parkItem._id}>
                  <div className="row">
                    <div className="col-md-7">
                      <a href="#">
                        <img
                          className="img-fluid rounded mb-3 mb-md-0"
                          src={zdjecia_parku[0]}
                          alt=""
                          style={{ width: 700, height: 300 }}
                        />
                      </a>
                    </div>
                    <div className="col-md-5">
                      <h3>
                        <img src="assets/images/tree.jpg" style={{ width: 45, height: 45 }} alt="tree" />
                        {nazwa_parku}
                      </h3>
                      <p>{opis_parku}</p> <br />
                      <button className="btn btn-primary" onClick={() => handleBlogClick(park)}>
                        Blog
                      </button>
                    </div>
                  </div>
                </div>
              );
            });
          })}
          <hr />
          <hr />
        </div>
        <Footer />
      </body>
    </Fragment>
  );
}

export default About;
