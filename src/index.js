import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { ApiProvider } from './hook';
import { ThemeProvider } from './theme';
import PageRouter from './pages/PageRouter';
import reportWebVitals from './reportWebVitals';
import './index.css';

createRoot(document.getElementById('root')).render(
<StrictMode>
  <ApiProvider>
    <ThemeProvider>
      <PageRouter />
    </ThemeProvider>
  </ApiProvider>
</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
