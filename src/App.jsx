import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import { useState } from "react";
import AllStarships from "./Pages/AllStarships";
import SingleStarship from "./Pages/SingleStarship";

function App() {
    const [selectedStarship, setSelectedStarship] = useState({});


    return (
        <div className="main-area">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AllStarships setSelectedStarship={setSelectedStarship} />} />
                    <Route path={`/${selectedStarship.name}`} element={<SingleStarship selectedStarship={selectedStarship} setSelectedStarship={setSelectedStarship}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
