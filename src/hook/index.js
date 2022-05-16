import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { bing, coingecko, coinranking } from '../api';

const ApiContext = createContext();
// app api context
export const ApiProvider = ({ children }) => {
  const [state, setState] = useState({
    loading: true,
    coins: [],
    stats: {},
    exchanges: [],
    news: []
  });

  const initialLoad = useCallback(async () => {
    const [
      { data: { coins, stats }}, // Coinranking data
      { value }, // crypto news
      exchanges // list of exchanges
    ] = await Promise.all([
      coinranking.getCoins(),
      bing.getNews(),
      coingecko.getExchanges()
    ]);

    return { coins, stats, news: value, exchanges };
  }, []);

  useEffect(() => {
    (async () => {
      const { coins, stats, news, exchanges } = await initialLoad();
      setState(prevState => ({ ...prevState, coins, stats, news, exchanges, loading: false }));
    })();
  }, []);

  return ApiContext.Provider
    ? <ApiContext.Provider value={{...state }}>{children}</ApiContext.Provider>
    : children;
}
// custom hook consuming API context in order to pass state to components
export const useApi = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error('useApi must be used within a ApiProvider');
  }
  return context;
}
