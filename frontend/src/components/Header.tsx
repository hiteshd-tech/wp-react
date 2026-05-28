import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/wordpress";
import { getMenu } from "../api/wp";


export default function Header() {

  const [headerData, setHeaderData] = useState(null);
  const [menu, setMenu] = useState(null);
  const [settings, setSettings] = useState(null);
  
  // Load Menu
  useEffect(() => {

    getMenu("main-menu")
      .then((data) => {
        setMenu(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);
  

  useEffect(() => {

    API.get("/custom/v1/theme-settings")
      .then((res) => {
        setSettings(res.data);
      });

  }, []);
  if (!settings) return <h1>Loading...</h1>;
  
  return (

    <header className="site-navbar">

      <div className="bg-top navbar-light">
        <div className="container">
          <div className="row no-gutters d-flex align-items-center align-items-stretch">
            <div className="col-md-4 d-flex align-items-center py-4">
              <a className="navbar-brand" href="#">Consolution</a>
            </div>
            <div className="col-lg-8 d-block">
              <div className="row d-flex">
                {settings?.email && (
                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                  <div className="icon d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
                  <div className="text">
                    <span>Email</span>
                    <span>{settings.email}</span>
                  </div>
                </div>
                )}
                {settings?.phone && (
                <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
                  <div className="icon d-flex justify-content-center align-items-center"><span className="icon-phone2"></span></div>
                  <div className="text">
                    <span>Call</span>
                    <span>Call Us: {settings.phone}</span>
                  </div>
                </div>
                )}  
                <div className="col-md topper d-flex align-items-center justify-content-end">
                  <p className="mb-0 d-block">
                    <a href="#" className="btn py-2 px-3 btn-primary">
                      <span>Free Consulting</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container d-flex align-items-center">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav mr-auto">

              {menu?.items?.map((item) => {

                const path =
                  item.url.replace("http://localhost/wp-react", "") || "/";

                return (
                  <li key={item.ID} className="nav-item">

                    <Link to={path} className="nav-link">
                      {item.title}
                    </Link>

                  </li>
                );

              })}

            </ul>
          </div>
        </div>
      </nav>
    </header>

  )
}