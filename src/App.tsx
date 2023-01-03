import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home/Home';
import SearchPage from './components/searchPage/SearchPage';
import FavAct from './components/favActivities/favAct';
import Error404 from './components/error404/Error404';


function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='searchPage' element={<SearchPage />} />
              <Route path='favouriteActivities' element={<FavAct />} />
            </Route>
            <Route path="*" element={<Error404 />} />
        </Routes>
    </Router>
  );
}

export default App;
