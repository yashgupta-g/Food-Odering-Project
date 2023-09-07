import { restaurantsData, restaurantsData } from './config';
import  Card from './cards';
import { useEffect, useState } from 'react';

function filterData(searchInput, Restaurant) {
  const filterData = Restaurant.filter((restaurant) =>
  restaurant.info.name.includes(searchInput));
  return filterData;  
}

const Body = () => {
  const [Restaurant, setRestaurant] = useState(restaurantsData);
  const [searchInput, setSearchInput] = useState("");

useEffect(()=>{
  getrestaurant();

}, []);

async function getrestaurant (){

  const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.53451699124938&lng=77.3930435211792&restaurantId=353956&catalog_qa=undefined&submitAction=ENTER")
  const json = await data.json();
  console.log(json);
}

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