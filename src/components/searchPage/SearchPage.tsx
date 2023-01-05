import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './SearchPage.scss';

import { ActivityContext } from '../../context/activity';


function SearchPage () {
  const [data, setData] = useState<Record<string, any>>({});
  const [search, setSearch] = useState('');
  const context = useContext(ActivityContext);

  const getApi = () => {
    axios
      .get('https://www.boredapi.com/api/activity')
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));

  };

  const searchApi = () => {
    let params = {
      type: '',
      participants: ''
    };
    if ( /[0-9]+/g.test( search )){
      params.participants = search
    } else {
      params.type = search
    }
    axios
      .get('https://www.boredapi.com/api/activity', { params })
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    if (search.trim()){
      searchApi();
    }
  }, [search] );

  return (
    <section className='search-form'>
        <h1>Getting Bored?</h1>
      <div className='filters-form'>
        <input
          type="text"
          placeholder='Search an activity...'
          onChange={event => {setSearch(event.target.value)}}
        />
      </div>
      <div className='body-form'>
          <h3>{data.activity}</h3>
          <p>{data.type}</p>
          <p>{data.participants}</p>
      </div>
      <div className='btn'>
        <button onClick={getApi}>Let's Start a random one</button>
        <button onClick={() => context.pushActivity( data.activity )}>Add it to favourite</button>
      </div>
    </section>
  );
}

export default SearchPage;
