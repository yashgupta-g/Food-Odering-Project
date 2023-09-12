import { restaurantsData, restaurantsData } from './config';
import  Card from './cards';
import { useEffect, useState } from 'react';
import Shimer from './Shimer';
function filterData(searchInput, Restaurant) {
  const filterData = Restaurant.filter((restaurant) =>
  restaurant.info.name.includes(searchInput));
  return filterData;  
}   

const Body = () => {
  const [Restaurant, setRestaurant] = useState([]);
  const [searchInput, setSearchInput] = useState("");

useEffect(()=>{
  getrestaurant();

}, []);

async function getrestaurant (){

  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.88454&lng=81.052101&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json();
  console.log(json);
  setRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

  return  (Restaurant.length == 0) ? <Shimer/> :  (
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
          search
        </button>
      </div>

      <div className="card-list ">
        {Restaurant.map((restaurantsData) => {
          return <Card key={restaurantsData.info.id} {...restaurantsData.info} />;
        })}
      </div>
    </>
  );
};
export {Body} 