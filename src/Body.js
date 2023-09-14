import { restaurantsData, restaurantsData } from './config';
import  Card from './cards';
import { useEffect, useState } from 'react';
import Shimer from './Shimer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function filterData(searchInput, Restaurant) {
  const filterData = Restaurant.filter((restaurant) =>
  restaurant.info.name.includes(searchInput));
  return filterData;  
}   

const Body = () => {


  const [allrestaurant, setallrestaurant] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchInput, setSearchInput] = useState("");

useEffect(()=>{
  getrestaurant();

}, []);

async function getrestaurant (){

  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.88454&lng=81.052101&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json();
  console.log(json);
  setallrestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}
if(!allrestaurant) return null;


  return allrestaurant.length==0 ?  (
<Shimer/>
    
  ) : (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value)}
            }
            placeholder="search"
          />
          <button
            type="submit"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

            onClick={() => {
              const data = filterData(searchInput, allrestaurant);
              setFilteredRestaurant(data);
            }}
          >
           Search
          </button>
        </div>
      </div>

      <div className="card-list ">
        {FilteredRestaurant .map((restaurantsData) => {
          return (
            <Card key={allrestaurant?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.id}  {...restaurantsData.info} />
          );
        })}
      </div>
    </>
  );
};
export {Body} 