import './App.scss';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { ActivityContext } from './context/activity';
import Layout from './components/Layout';
import Home from './components/home/Home';
import SearchPage from './components/searchPage/SearchPage';
import FavAct from './components/favActivities/favAct';
import Error404 from './components/error404/Error404';


function App() {
  const [ activities, setActivities ] = useState<string[]>([]);

  const activitiesContextValue = {
    pushActivity: ( activity: string ) => setActivities( activities => {
      let newFavourite = [...activities];
      newFavourite.push( activity );
      return newFavourite;
    }),
    getLatestFavourite: () => activities[activities.length - 1],
    activities
  };

  return (
  <ActivityContext.Provider value={activitiesContextValue}>
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
  </ActivityContext.Provider>
  );
}

export default App;
