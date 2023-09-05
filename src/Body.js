import { restaurantsData, restaurantsData } from './config';
import  Card from './cards';
import { useState } from 'react';

function filterData(searchInput, Restaurant) {
  const filterData = Restaurant.filter((restaurant) =>
  restaurant.info.name.includes(searchInput));
  return filterData;  
}

const Body = () => {
  const [Restaurant, setRestaurant] = useState(restaurantsData);

  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="search-input "
          placeholder="search"
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, Restaurant);
            setRestaurant(data);
          }}
        >
          search - {searchInput}
        </button>
      </div>

      <div className="card-list ">
        {Restaurant.map((restaurantsData) => {
          return <Card {...restaurantsData.info} />;
        })}
      </div>
    </>
  );
};
export {Body} 