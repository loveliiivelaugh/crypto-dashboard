import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/exchanges',
  headers: {
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
  }
};

export const coingecko = {
  getExchanges: async () => await axios.request(options).then(response => response.data),
};