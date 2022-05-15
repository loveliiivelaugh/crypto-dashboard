import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import PageRouter from './pages/PageRouter';
import { ApiProvider } from './hook';
import reportWebVitals from './reportWebVitals';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ApiProvider>
      <PageRouter />
    </ApiProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();