import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// lazy load pages
const Home = lazy(() => import('./Home'));
const Cryptocurrencies = lazy(() => import('./Currencies'));
const Exchanges = lazy(() => import('./Exchanges'));
const News = lazy(() => import('./News'));
const CurrencyDetails = lazy(() => import('./CurrencyDetails'));
// lazy load components
const Drawer = lazy(() => import('../components/Drawer'));
const Footer = lazy(() => import('../components/Footer'));
// routes
const routes = [
  { path: '/', element: <Home /> },
  { path: '/cryptocurrencies', element: <Cryptocurrencies /> },
  { path: '/exchanges', element: <Exchanges /> },
  { path: '/news', element: <News /> },
  { path: '/coin/:uuid', element: <CurrencyDetails /> },
];
// render
const PageRouter = () => (
  <Suspense fallback="Loading...">
    <Router>
      <Drawer content={(
        <>
          <Routes>{routes.map((route, i) => <Route key={i}{...route} />)}</Routes>
          <Footer />
        </>
      )}/>
    </Router>
  </Suspense>
)

export default PageRouter