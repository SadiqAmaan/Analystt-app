import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Detail from './Detail';
import SingleDetail from './SingleDetail';

const Details = () => {
  const [info, setInfo] = useState([]);
  const [info1, setInfo1] = useState([]);

  useEffect(() => {
    const fetchDetail = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setInfo(data);
      setInfo1(data)
      console.log(data);
    };

    fetchDetail();
  }, []);

  return (
    <div>
      {info.map(i => (
        <Detail
          name={i.name}
          username={i.username}
          key={i.id}
          email={i.email}
          address={i.address.city}
          company={i.company.name}
        />
      ))}
      {info1.map(i => (
        <SingleDetail
          name={i.name}
          username={i.username}
          key={i.id}
          email={i.email}
          address={i.address}
          company={i.company.name}
        />
      ))}
      
    </div>
  );
};

export default Details;
