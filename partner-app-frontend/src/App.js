
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/landing';
import Layout from './components/layout';
import Geo from './components/geolocation';
import AddPartner from './components/addpartner';
import RangeFilterPartner from './components/rangefilterpartner';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
          </Route>
          <Route path="/geo" element={<Geo />} />
          <Route path="/addpartner" element={<AddPartner/>} />
          <Route path="/rangefilterpartner" element={<RangeFilterPartner/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
