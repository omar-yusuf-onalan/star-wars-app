import { useEffect, useState } from "react";
import { getStarships, filterStarships } from "../../API/Starship";
import "./Starships.style.css";
import StarshipWithLessDetail from "../StarshipWithLessDetail.jsx/StarshipWithLessDetail";

const Starships = ({ setSelectedStarship }) => {
    const [starships, setStarships] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getStarships(page).then((data) => setStarships(data.results));
    }, [page]);

    const handleClick = (starship) => {
        setSelectedStarship(starship);
    };

    const handleFilter = () => {
        const userInput = document.querySelector("#name-model-input").value;

        filterStarships(userInput).then((data) => setStarships(data.results));
    };
    return (
        <>
            <div>
                <span>Name / Model</span>
                <input
                    id="name-model-input"
                    type="text"
                    placeholder="Name / Model"
                />
                <button onClick={handleFilter}> Filter Starships</button>
            </div>

            <div className="starships">
                {starships.map((starship) => {
                    return (
                        <StarshipWithLessDetail
                            key={starship.name}
                            selectedStarship={starship}
                            setSelectedStarship={setSelectedStarship}
                            onClick={handleClick(starship)}
                        />
                    );
                })}
                ;
            </div>
            <button
                onClick={() => {
                    setPage((prev) => prev - 1);
                }}
            >
                See previous page
            </button>
            <button
                onClick={() => {
                    setPage((prev) => prev + 1);
                }}
            >
                See next page
            </button>
        </>
    );
};

export default Starships;
