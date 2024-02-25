import { useEffect, useState } from "react";
import { getStarships, filterStarships } from "../../API/Starship";
import "./Starships.style.css";
import StarshipWithLessDetail from "../StarshipWithLessDetail.jsx/StarshipWithLessDetail";

const Starships = ({ setSelectedStarship }) => {
    const [starships, setStarships] = useState([]);
    const [page, setPage] = useState(1);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        getStarships(page).then((data) => setStarships(data.results));
    }, [page]);

    const handleClick = (starship) => {
        setSelectedStarship(starship);
    };

    const handleFilter = () => {
        filterStarships(searchInput).then((data) => setStarships(data.results));
    };
    return (
        <div className="starships-component">
            <div className="filter-section">
                <span>Name / Model</span>
                <input
                    id="name-model-input"
                    type="text"
                    placeholder="Name / Model"
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
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

            <div className="starships-buttons">
                <button
                    onClick={() => {
                        setPage((prev) => {
                            if (prev === 1) {
                                return 4;
                            }

                            return prev - 1;
                        });
                    }}
                >
                    See previous page
                </button>
                <button
                    onClick={() => {
                        setPage((prev) => {
                            if (prev === 4) {
                                return 1;
                            }

                            return prev + 1;
                        });
                    }}
                >
                    See next page
                </button>
            </div>
        </div>
    );
};

export default Starships;
