import React from "react";
import { Link } from "react-router-dom";
// import { Button } from 'react-bootstrap';

const Landing = ({ props }) => {
  return (
    <div className="all-center h-100">
      <Link to="/geo" className="btn btn-primary">
        Locate Me
      </Link>
     
    </div>
  );
};

export default Landing;
