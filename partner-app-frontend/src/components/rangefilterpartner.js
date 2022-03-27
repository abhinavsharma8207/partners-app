import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import Filter from './filter';
const RangeFilterPartner = () => {
const {state} = useLocation();
const { lat, lon } = state;
const [ value, setValue ] = useState(0); 
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
    <Filter lat={lat} lon={lon} kms={value}></Filter>
</div>)


};

export default RangeFilterPartner;