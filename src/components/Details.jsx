import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Detail from './Detail';
import { Button, HStack } from '@chakra-ui/react';

const Details = () => {
  const [info, setInfo] = useState([]);
  const [noPages, setNoPages] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const [filters, setFilters] = useState([0, 2]);

  useEffect(() => {
    const fetchDetail = async () => {
      let { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setInfo(data);
      setNoPages(Math.ceil(data.length / 3));
    };
    fetchDetail();
  }, []);

  useEffect(() => {
    setFilters([3 * (activePage -1) , (3* activePage ) -1])
  }, [activePage])

  return (
    <div>
      {info
        .filter((_, i) => i >= filters[0] && i <= filters[1])
        .map(i => (
          <Detail key={i.id} data={i} />
        ))}
        <HStack w={'100%'} justifyContent={'center'} mt={'2rem'} mb={'2rem'} gap={'15px'}>
          {Array.from(Array(noPages).keys()).map(e => (
            <Button colorScheme={'purple'}  onClick={() => setActivePage(e + 1)}>{e+1}</Button>
          ))}
        </HStack>
    </div>
  );
};

export default Details;
