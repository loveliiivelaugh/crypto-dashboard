import axios from 'axios';

const client = axios.create({
  baseURL: 'https://bing-news-search1.p.rapidapi.com',
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
  },
  params: {
    textFormat: 'Raw',
    safeSearch: 'Off',
    freshness: 'Day',
  },
});

export const bing = {

  getNews: async () => await client.get('/news').then(({ data }) => data),
  
  getTrending: async () => await client.get('/trendingtopics').then(({ data }) => data),

  searchNews: async q => q 
    ? await client
      .get('/search', { params: { q }})
      .then(({ data }) => data )
    : new Error('Query Required. No query provided.'),
};