import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from './cart/Cart';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [search,setSearch]=useState('')

  useEffect(() => {
    try{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    }catch(err){
        console.log(err)
    }
  }, []);

  const filteredData=data.filter((item)=>item.name.toLowerCase().includes(search))
  

  return (
    <>
        <div className='header'>
            <span>Crypto</span>
            <input type='text' name='search' value={search} onChange={e=>setSearch(e.target.value)}/>
            </div>
      {filteredData.length > 0 ? (
        filteredData.map(item => (
          <Cart key={item.market_cap_rank} id={item.market_cap_rank} item={item.name} cPrice={item.current_price} />
        ))
      ) : (
        <p>No Result found</p>
      )}
    </>
  );
};

export default FetchData;
