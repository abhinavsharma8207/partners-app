import axios from "axios";
import React, { useState } from "react";
const Filter = (props) => {
  const [partners, setPartners] = React.useState([]);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ kms: props.kms, lat: props.lat, lon: props.lon }),
  };

  React.useEffect(() => {
    fetch("http://localhost:3000/partners/filterByRange", requestOptions)
      .then((results) => results.json())
      .then((data) => {
        setPartners(data);
       console.log(partners);
      });
  }, [props.kms]);

  return <div className="centered container">
   {partners.length > 0 && <div className="container">  
        <h1> Partner's List </h1>  
     
        <table className="table table-bordered">  
            <tr>  
                <th>Organization</th>  
                <th>Location</th>  
            </tr>  
    
            {partners.map((partner, index) => (  
              <tr data-index={index}>  
                <td>{partner.organization}</td>  
                <td>{partner.offices[0].location}</td>  
              </tr>  
            ))}  
    
        </table> </div>}
  </div>;
};

export default Filter;
