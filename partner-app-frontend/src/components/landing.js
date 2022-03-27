import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

const Landing = ({props}) => {
    return (
       
        <div className='centered container'>
            <Link to="/geo">
            <button type="button" className="block">Locate Me</button> 
            </Link>
           <br></br>
           <span className="centered">- OR -</span>
           <br></br>
           <button type="button" className="block">Enter Coordinates</button> 
        </div>
    );
}

export default Landing;