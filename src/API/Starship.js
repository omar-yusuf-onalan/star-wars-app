import axios from "axios";

export const getStarships = async (pageNumber) => {
    const { data } = await axios.get(`https://swapi.dev/api/starships/?page=${pageNumber}`);

    return data;
};

export const filterStarships = async (query) => {
    const { data } = await axios.get(`https://swapi.dev/api/starships/?search=${query}`);

    return data;
};
