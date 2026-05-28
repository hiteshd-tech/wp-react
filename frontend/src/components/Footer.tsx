import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/wordpress";
import { getMenu } from "../api/wp";
import { getPosts } from "../api/wp";
import sampleImage from "../assets/sample.png";

export default function Footer() {

  const [settings, setSettings] = useState(null);
  const [menu, setMenu] = useState(null);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    API.get("/custom/v1/theme-settings")
      .then((res) => {
        setSettings(res.data);
      });
  }, []);
  useEffect(() => {

    getMenu("footer-menu")
      .then((data) => {
        setMenu(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);
  
  useEffect(() => {

      getPosts().then((data) => {
        setPosts(data.slice(0, 2));
      });

  }, []);

  if (!settings) return <h1>Loading...</h1>;
  return (

    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
                  {settings?.address && (
	                <li><span className="icon icon-map-marker"></span><span className="text">{settings.address}</span></li>
                  )} {settings?.phone && (
	                <li><a href={`tel:${settings.phone}`}><span className="icon icon-phone"></span><span className="text">{settings.phone}</span></a></li>
                  )} {settings?.email && (
	                <li><a href={`mailto:${settings.email}`}><span className="icon icon-envelope"></span><span className="text">{settings.email}</span></a></li>
                  )}
	              </ul>
	            </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Recent Blog</h2>
              {posts.map((post) => {
              return (
              <div key={post.id} className="block-21 mb-4 d-flex">
                <a className="blog-img mr-4" style={{
                  backgroundImage: `url(${
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    sampleImage 
                  })`,
                }}></a>
                <div className="text">
                  <h3 className="heading"><a href={post.link} rel="noopener noreferrer">
                    {post.title.rendered}
                  </a></h3>
                  <div className="meta">
                    <div><a href={post.link} rel="noopener noreferrer"><span className="icon-calendar"></span>&nbsp;
                    {new Date(post.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    </a></div>
                    <div><a href={post.link} rel="noopener noreferrer"><span className="icon-person"></span> {post._embedded?.author?.[0]?.name || "No Author"}</a></div> 
                  </div>
                </div>
              </div>
              );
              })}
              
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                
                {menu?.items?.map((item) => {
                  const path = item.url.replace("http://localhost/wp-react", "") || "/";
                  return (
                    <li key={item.ID}>
                      <Link to={path} className="nav-link">
                        <span className="ion-ios-arrow-round-forward mr-2"></span>
                        {item.title}
                      </Link>

                    </li>
                  );
                })}

              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            
            <div className="ftco-footer-widget mb-5">
            	<h2 className="ftco-heading-2 mb-0">Connect With Us</h2>
            	<ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                {settings?.twitter && (
                <li><a href={settings.twitter} target="_blank" rel="noopener noreferrer">
                  <span className="icon-twitter"></span>
                </a></li>
                )} {settings?.fb && (
                <li><a href={settings.fb} target="_blank" rel="noopener noreferrer">
                  <span className="icon-facebook"></span>
                </a></li>
                )} {settings?.instagram && (
                <li><a href={settings.instagram} target="_blank" rel="noopener noreferrer">
                  <span className="icon-instagram"></span>
                </a></li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            {settings?.footer_text && (
            <p> {settings.footer_text} </p>
            )}
          </div>
        </div>
      </div>
    </footer>

  );

}