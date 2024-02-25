import { Link } from "react-router-dom";
import "./Starship.style.css";

const Starship = ({ selectedStarship, setSelectedStarship }) => {
    return (
        <div className="starship-component">
            <Link to={"/"}>Return to main page</Link>
            <div className="single-starship">
                <h1>{selectedStarship.name}</h1>
                <div>Model: {selectedStarship.model}</div>
                <div>
                    Hyperdrive Rating: {selectedStarship.hyperdrive_rating}
                </div>
                <div>Passengers: {selectedStarship.passengers}</div>
                <div>
                    Max Atmosphering Speed:{" "}
                    {selectedStarship.max_atmosphering_speed}{" "}
                </div>
                <div>Manufacturer: {selectedStarship.manufacturer} </div>
                <div>Crew: {selectedStarship.crew} </div>
                <div>Cargo Capacity: {selectedStarship.cargo_capacity}</div>
            </div>
        </div>
    );
};

export default Starship;
