import { useEffect, useState } from "react";
import { getStarships } from "../../API/Starship";
import "./Starships.style.css";
import Starship from "../Starship/Starship";

const Starships = ({ setSelectedStarship }) => {
    const [starships, setStarships] = useState([]);

    useEffect(() => {
        getStarships().then((data) => setStarships(data.results));
    }, []);

    return (
        <div className="starships">
            {starships.map((starship) => {
                return (
                    <Starship key={starship.name} selectedStarship={starship} />
                );
            })}
            ;
        </div>
    );
};

export default Starships;
