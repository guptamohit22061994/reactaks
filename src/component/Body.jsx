// import Card from './Card';

  
  // const carddetail={
  // image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/8b200f2fe8a1d6130df8b0c546edad89",
  // name:"Bakingo",
  // cusines:"Bakery, Desserts, Beverages, Snacks",
  // lastMileTravelString: "3.2"
  //     };

  import { restaurantList } from "./config";

  import RestaurantCard from "./RestaurantCard";
  import { useState } from "react";
  
  function filterData(searchInput, restaurants){
    const filterInfo =restaurants.filter((restaurant)=>restaurant.info.name.includes(searchInput));
     return filterInfo;
  }

  const Body=()=>{
    const [restaurants, setRestaurants]=useState(restaurantList);
    const [searchInput, setSearchInput] =useState();
    return(
        <>

<div className="input-group mt-2">
        <input type="search" className="form-control ml-2" placeholder="search..." value={searchInput} 
             required="required"
              onChange={(e)=>{
          setSearchInput(e.target.value);
             }}/>
            
      <div className="input-group-append">
       
      <button className="btn-search input-group-text"
       onClick={()=>{
        const info=filterData(searchInput, restaurants)
        setRestaurants(info);
      }}>search</button>  
      </div>
    </div>
        <div className="d-flex justify-content-between align-items-center">
        {
          restaurants.map((restaurant)=>{
        return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
      })
    }
        
        </div>
  
        </>
    );
  };

export default Body;