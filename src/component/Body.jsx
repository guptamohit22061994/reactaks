// import Card from './Card';


// const carddetail={
// image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8b200f2fe8a1d6130df8b0c546edad89",
// name:"Bakingo",
// cusines:"Bakery, Desserts, Beverages, Snacks",
// lastMileTravelString: "3.2"
//     };

import { restaurantList } from "./config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"

function filterData(searchInput, restaurants) {
  const filterInfo = restaurants.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase()));
  return filterInfo;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // console.log(restaurants);

  useEffect(() => {
    //console.log("call this when dependecy is changed");
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const info = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6220577&lng=77.0470916&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await info.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }
  if (!allRestaurants) return null;
  // if (filteredrestaurants.length === 0) return <h1>No Restaurant Found...</h1>;
  // console.log("render");
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>

      <div className="input-group mt-2">
        <input type="search" className="form-control ml-3" placeholder="search..." value={searchInput}
          required="required"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }} />

        <div className="input-group-append mb-2">

          <button className="btn-search input-group-text"
            onClick={() => {
              const info = filterData(searchInput, allRestaurants)
              setFilteredRestaurants(info);
            }}>search</button>

          {/* <button onClick={()=>setMohit("Its Work Now")}>Click Me</button> */}
          {/* {mohit} */}
        </div>
      </div>
      <div className="px-2 d-flex justify-content-between align-items-center f-wrap">
        {
          filteredrestaurants.map((restaurant) => {
            return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          })
        }

      </div>

    </>
  );
};

export default Body;