import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drawer from '../components/Drawer';

const Home = lazy(() => import('./Home'));
const Cryptocurrencies = lazy(() => import('./Currencies'));
// const Exchanges = lazy(() => import('./Exchanges'));
const News = lazy(() => import('./News'));

const routes = [
  { path: '/', element: <Home /> },
  { path: '/cryptocurrencies', element: <Cryptocurrencies /> },
  // { path: '/exchanges', element: <Exchanges /> },
  { path: '/news', element: <News /> },
];

const PageRouter = () => (
  <Fragment>
    <Router>
      <Drawer content={(
        <Suspense fallback="Loading...">
          <Routes>{routes.map((route, i) => <Route key={i}{...route} />)}</Routes>
        </Suspense>
      )}/>
      <div>Footer</div>
    </Router>
  </Fragment>
)

export default PageRouter