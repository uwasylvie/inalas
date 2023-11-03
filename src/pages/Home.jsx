import React, { Fragment } from "react";

import Header from "../components/Header/Header";
import AboutUs from "../components/AboutUs/AboutUs";
import Services from "../components/Services/Services";
import Work from "../components/Work/Work";
import Team from "../components/Team/Team";



const Home = () => {
  return (
    
    <Fragment>
      
      <Header />
      <AboutUs />
      <Services />
      <Work />
      <Team />
     
      
    </Fragment>
  );
};

export default Home;
