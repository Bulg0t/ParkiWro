import React, { Fragment, useState, useEffect} from 'react';
import Menu from './Menu';
import Footer from './Footer';
import axios from 'axios';


function About() {
  const [parks, setParks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const url = new URL('http://localhost:5173/api/parks');
        // const response = await fetch(url);
        // const data = await response.text();
        // console.log('fetchData', data);
        // setParks(response.data);
        const response = await axios.get('http://localhost:3001/api/parks');
        console.log(response.data);
        setParks(response.data);
      } catch (error) {
        console.error('Błąd podczas pobierania danych', error);
      }
    };
    fetchData();
  }, []);
  return (
    <Fragment>
      <body>
        <Menu />
        <br/><br/><br/>
        <div className="container">

          <h1 className="my-4">Wszystkie parki we Wroclawiu
          </h1>
          {
            parks.map((park) => {
              const {description, location, name, photo} = park;
              console.log(park);
              return (
                <div className="park">
              <div className="row" key={park._id} >
              <div className="col-md-7">
                <a href="/parki/szczytnicki">
                  <img className="img-fluid rounded mb-3 mb-md-0" src={photo} alt="" style={{width:700, height:300}}/>
                </a>
              </div>
              <div className="col-md-5">
                <h3><img src="assets/images/tree.jpg" style={{width:45, height:45}}></img>{name}</h3>
                <p>{description}</p> <br></br>
                <a className="btn btn-primary" href="/blog/szczytnicki">Blog</a>
              </div>
              </div>
              </div>
              );
            })
          }

              {/* <div className="App">
      <h1>Parki we Wrocławiu</h1>
      <ul>
        {parks.map((park) => (
          <li key={park._id}>
            <h2>{park.name}</h2>
            <p>{park.description}</p>
            <p>{park.location}</p>
            <img src={park.photo} alt={park.name} style={{ width: '200px', height: '150px' }} />
          </li>
        ))}
      </ul>
    </div> */}


          <hr />
              <hr/>


        </div>
              <Footer />
            </body>
          </Fragment>
          )
}

          export default About;