import { Link } from "react-router-dom";
import "./StarshipWithLessDetail.style.css";

const StarshipWithLessDetail = ({ selectedStarship, setSelectedStarship }) => {
    return (
        <>
            <div className="single-starship">
                <h1>{selectedStarship.name}</h1>
                <div>Model: {selectedStarship.model}</div>
                <div>
                    Hyperdrive Rating: {selectedStarship.hyperdrive_rating}
                </div>
                <Link
                    onClick={() => {
                        setSelectedStarship(selectedStarship);
                    }}
                    to={`/${selectedStarship.name}`}
                >
                    MORE DETAILS
                </Link>
            </div>
        </>
    );
};

export default StarshipWithLessDetail;
