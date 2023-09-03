import { restaurants } from './config';
import  Card from './cards';
import { useState } from 'react';
const Body = () => {


  const [searchInput, setSearchInput] = useState();
return (

  <>
<div className="search-container">
<input 
type='text' value={searchInput}  onChange={(e) => setSearchInput(e.target.value)} className='search-input ' placeholder='search'
/>
<button className='search-btn'>
  search 
</button>
</div>

  <div className="card-list ">
    {restaurants.map((restaurants) => {
      return <Card {...restaurants.info} />;
    })}
  </div>
  </>
);

}
export {Body} 