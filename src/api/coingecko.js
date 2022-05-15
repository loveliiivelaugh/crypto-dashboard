// import axios from "axios";

// const client = axios.create({
//   baseUrl: 'https://coingecko.p.rapidapi.com/exchanges',
//   headers: {
//     'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
//     'X-RapidAPI-Key': 'ac72153c36mshd1814c8f1af20f3p1518fbjsnabee85184908'
//   }
// });

// export const coingecko = {
//   getExchanges: async () => await client.get('/').then(res => res.data),
// };

import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/exchanges',
  headers: {
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
    'X-RapidAPI-Key': 'ac72153c36mshd1814c8f1af20f3p1518fbjsnabee85184908'
  }
};

export const coingecko = {
  getExchanges: async () => await axios.request(options).then(response => response.data),
};