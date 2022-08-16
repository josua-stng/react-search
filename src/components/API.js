import React, { useState } from 'react';

const DisplayApi = () => {
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [query, setQuery] = useState('');

  const handleClick = () => {
    setIsLoadingData(true);
    setShowData(true);
    const url = 'https://randomuser.me/api/?results=15';
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setIsLoadingData(false);
        setData(json['results']);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={handleClick}>Load Data</button>
      <br />

      <input
        key={data}
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
                value.email.toLowerCase().includes(query.toLowerCase())
              ) {
                return value;
              }
              return false
            })
            .map((user) => <h1>{user.email} </h1>)
        )
      ) : (
        <div> </div>
      )}
    </div>
  );
};

export default DisplayApi;
