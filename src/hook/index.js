import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { bing, coinranking } from '../api';

const ApiContext = createContext();

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
      // exchangeData
    ] = await Promise.all([
      coinranking.getCoins(),
      bing.getNews(),
      // api.getExchanges()
    ]);

    return { coins, stats, news: value, 
      // exchanges: exchangeData.data 
    };
  }, []);

  useEffect(() => {
    (async () => {
      const { coins, stats, news, 
        // exchanges 
      } = await initialLoad();
      setState(prevState => ({ ...prevState, coins, stats, news,
        //  exchanges, 
        loading: false }));
    })();
  }, []);

  return ApiContext.Provider
    ? <ApiContext.Provider value={{ ...state }}>{children}</ApiContext.Provider>
    : children;
}

export const useApi = () => {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error('useApi must be used within a ApiProvider');
  }
  return context;
}
