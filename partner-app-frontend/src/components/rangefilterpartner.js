import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import RangeSlider from 'react-bootstrap-range-slider';
const RangeFilterPartner = () => {
const {state} = useLocation();
const { lat, lon } = state;
const [ value, setValue ] = useState(0); 
const [renderlist, setRenderList] = useState(false);
const [partnerList, setPartnerList] =  useState([]);
var partners = []
async function filterPartners()
{
  let queryDto = {
    kms: value,
    lat: lat,
    lon: lon
  }
  const response = await axios.post('http://localhost:3000/partners/filterByRange', queryDto);
  console.log(response);
  setRenderList(true)
  setPartnerList(response.data);
}

return(<div className='centered container'>
<h3>Choose Range in Kilometers to Filter Partner List</h3>
<RangeSlider
      value={value}
      min="0"
      max="10000"
      step="10"
      onChange={changeEvent => setValue(changeEvent.target.value)}
    />
    <div>{value}</div>
    <button type="button" className="block" onClick={filterPartners}>Filter Partners</button>

</div>)


};

export default RangeFilterPartner;