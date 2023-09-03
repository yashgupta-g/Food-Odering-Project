import React from 'react'
import "./Body.css"
import { img_url } from './config';
 const  Card = ({name , cuisines ,areaName, cloudinaryImageId, avgRating   }) =>  { 
  return (
    <>
      <div class="card_box">
        <div>
          <img src={img_url + cloudinaryImageId} alt="" />
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

export default Card