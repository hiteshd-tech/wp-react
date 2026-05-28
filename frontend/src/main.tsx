import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

//css
import "/public/css/open-iconic-bootstrap.min.css";
import "/public/css/animate.css";
import "/public/css/owl.carousel.min.css";
import "/public/css/owl.theme.default.min.css";
import "/public/css/magnific-popup.css";
import "/public/css/aos.css";
import "/public/css/ionicons.min.css";
import "/public/css/flaticon.css";
import "/public/css/icomoon.css";
import "/public/css/style.css";


//js
import "/public/js/jquery.min.js";
import "/public/js/jquery-migrate-3.0.1.min.js";
//import "/public/js/popper.min.js";
import "/public/js/bootstrap.min.js";
import "/public/js/jquery.easing.1.3.js";
import "/public/js/jquery.waypoints.min.js";
//import "/public/js/jquery.stellar.min.js";
import "/public/js/owl.carousel.min.js";
import "/public/js/jquery.magnific-popup.min.js";
//import "/public/js/aos.js";
import "/public/js/jquery.animateNumber.min.js";
import "/public/js/scrollax.min.js";
//import "/public/js/google-map.js";
//import "/public/js/main.js";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(

  <React.StrictMode>

    <BrowserRouter>

      <App />

    </BrowserRouter>

  </React.StrictMode>

);

<link
  href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,800,900&display=swap"
  rel="stylesheet"
/>