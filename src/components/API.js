import React, { useState } from 'react';
import { Button } from 'react-ui-library-test';
const DisplayApi = () => {
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [query, setQuery] = useState('');


  const handleClick = () => {
    setIsLoadingData(true);
    setShowData(true);
    const url = 'https://api.publicapis.org/entries';
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setIsLoadingData(false);
        setData(json['entries']);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button 
      onClick={handleClick}>Load Data</button>
      <br />
      <input
        type="text"
        placeholder="search"
        onChange={(event) => setQuery(event.target.value)}
      />
      {showData ? (
        isLoadingData ? (
          <h1> Loading Data ....</h1>
        ) : (
          data
            .filter((value) => {
              if (query === '') {
                return value;
              } else if (
                value.Description.toLowerCase().includes(query.toLowerCase())
              ) {
                return value;
              }
              return false;
            })
            .map((user, id) => (
              <ul key={id}>
                <li className="user-style">{user.Description}</li> 
              </ul> 
            ))

        ) 
      ) : (
        <div> </div>
      )}
     <Button primary>test</Button>
    </div>
  );
};

export default DisplayApi;
