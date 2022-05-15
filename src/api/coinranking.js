import axios from 'axios';

const client = axios.create({
  baseURL: 'https://coinranking1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
  },
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
});

export const coinranking = {

  getCoins: async () => await client.get('/coins').then(({ data }) => data),

  getCoin: async (id) => await client.get(`/coin/${id}`).then(({ data }) => data),

  getCoinHistory: async (id) => await client.get(`/coin/${id}/history`).then(({ data }) => data),

  getGlobalStats: async () => await client.get('/stats').then(({ data }) => data),

  getExchanges: async () => await client.get('/exchanges').then(({ data }) => data),
};
