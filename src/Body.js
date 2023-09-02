import React from 'react'
import "./Body.css"

const restaurants = [
  {
    info: {
      "id": "738170",
      name: "SashMicks Bakery (Cake)",
      cloudinaryImageId: "31e52bcbebacbc8f5b7352b52beb709d",
      locality: "Shahdra",
      areaName: "Noida Expressway",
      "costForTwo": "₹500 for two",
      cuisines: [
        "Bakery",
        "Desserts"
      ],
      avgRating: 4.6,
   
    
    },
    
  },
  {
    info: {
      "id": "69485",
      "name": "Gupta Ji Malai Chaap Wale",
      "cloudinaryImageId": "byhiy4bkqonfaxflgz4u",
      "locality": "A Block",
      "areaName": "Vasundhara Enclave",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Indian",
        "Chinese"
      ],
      "avgRating": 3.9,
     
    },
    
  },
  {
    info: {
      "id": "359639",
      "name": "Puri Wala",
      "cloudinaryImageId": "p4yr5m5s0lsmkdlfrwaw",
      "locality": "Paras Seasons",
      "areaName": "Sector 135",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "North Indian"
      ],
      "avgRating": 3.7,
      "veg": true,
     
    },
    
  },
  {
    info: {
      "id": "32076",
      "name": "4U Foods",
      "cloudinaryImageId": "reng85cudh591rlknhuf",
      "locality": "Amarpali Silicon City",
      "areaName": "Sector 72",
      "costForTwo": "₹180 for two",
      "cuisines": [
        "North Indian",
        "Chinese"
      ],
      "avgRating": 3.7,
      
    },
    
  },
  {
    info: {
      "id": "313666",
      "name": "Rollsking",
      "cloudinaryImageId": "l8zyrdiajgtlkrvofm2k",
      "locality": "Hazipur",
      "areaName": "Sector 104",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Fast Food",
        "Beverages"
      ],
      "avgRating": 4.2,
    
    },
   
  },
  {
    info: {
      "id": "76663",
      "name": "Subway",
      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
      "locality": "Ach Market",
      "areaName": "Sector 72",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 3.7,
     
    },
    
  },
  {
    info: {
      "id": "583088",
      "name": "Simple Burger",
      "cloudinaryImageId": "d3to7amcs0pu8jwauayb",
      "locality": "E Block",
      "areaName": "Sector 51",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Burgers",
        "Snacks",
        "Beverages",
        "Asian",
        "Italian"
      ],
      "avgRating": 4.2,
     
    },
   
  },
  {
    info: {
      "id": "42648",
      "name": "Uttarakhand Restaurants",
      "cloudinaryImageId": "ho1lscaqe1rpikofcs9p",
      "locality": "Shivaji Marg",
      "areaName": "Vasundhara Enclave",
      "costForTwo": "₹175 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Tandoor",
        "Beverages"
      ],
      "avgRating": 3.1,
     
    },
   
  },
  {
    info: {
      "id": "448961",
      "name": "Paranthe Wala",
      "cloudinaryImageId": "fsrqjyequzka3i09gds0",
      "locality": "A Block",
      "areaName": "Sector 72",
      "costForTwo": "₹99 for two",
      "cuisines": [
        "Indian"
      ],
      "avgRating": 3.1,
     
    },
   
  },
];

const  Card = ({name , cuisines ,areaName, cloudinaryImageId, avgRating   }) =>  { 
  return (
    <>
      <div class="card_box">
        <div >
           <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
             cloudinaryImageId
            }
            alt=""
          /> 
        </div>

        <div className="m-2">
          <h2 className=" text-lg font-bold">{name} </h2>
          <h5>{cuisines}</h5>
          <h5>{areaName}</h5>
          <div>
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                id="Star"
              >
                <path
                  d="M32.194 7.106c-13.689 0-24.826 11.137-24.826 24.826 0 13.69 11.137 24.828 24.826 24.828S57.02 45.622 57.02 31.932c.001-13.689-11.136-24.826-24.826-24.826zm13.717 23.011v.001l-7.187 5.2 2.768 8.46a1.338 1.338 0 0 1-2.054 1.503l-7.243-5.239-7.243 5.239a1.338 1.338 0 0 1-2.054-1.503l2.769-8.46-7.187-5.2v-.001a1.336 1.336 0 0 1 .784-2.42h8.897l2.755-8.421a1.339 1.339 0 0 1 2.559 0l2.755 8.421h8.897a1.337 1.337 0 0 1 .784 2.42z"
                  fill="#34a853"
                  class="color000000 svgShape"
                ></path>
              </svg>
            </div>
            <h7> {avgRating} </h7>
          </div>
        </div>
      </div>
    </>
  );
};


const Body = () => {
return(
<div className='card-list '>

{
restaurants.map(restaurants =>{
return(

  <Card {...restaurants.info}/>
)


})

}

</div>
);

}
export {Body} 