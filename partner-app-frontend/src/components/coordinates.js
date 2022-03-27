import { InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
const Coordinates = (props) => {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Latitude</InputGroup.Text>
        <FormControl
          value={props.lat}
          placeholder="Latitude"
          aria-label="Latitude"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl
          value={props.lon}
          placeholder="Longitude"
          aria-label="Longitude"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">Longitude</InputGroup.Text>
      </InputGroup>
      <Link to="/addpartner" state={{ lat: props.lat, lon: props.lon }}>
        <button type="button" className="btn btn-primary">
          Add Partner
        </button>
      </Link>
    </div>
  );
};

export default Coordinates;
