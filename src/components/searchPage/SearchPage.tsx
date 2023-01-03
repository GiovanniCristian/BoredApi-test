import { useState } from 'react';
import axios from 'axios';
import './SearchPage.scss';


function SearchPage () {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const getApi = () => {
    setData(data);
    axios
      .get('https://www.boredapi.com/api/activity')
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

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
      <div>
        {data.filter((val) => {
          if(val.activity.toLowerCase().includes(search.toLowerCase())) {
            return val
          } else if (val.type.toLowerCase().includes(search.toLowerCase())) {
            return val
          } else if (val.participants.toLowerCase().includes(search.toLowerCase())) {
            return val
          }}).map((val, key) => {
          return (
            <div key={key}>
              <h2>{val.activity}</h2>
              <p>{val.type}</p>
              <p>{val.participants}</p>
            </div>
          )}
          )} 
      </div>
      <div className='btn'>
        <button onClick={getApi}>Let's Start an activity</button>
        <button>Add it to favourite</button>
      </div>
    </section>
  );
}

export default SearchPage;
