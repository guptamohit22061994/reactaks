
import { IMG_CDN_URL } from "./config";


const RestaurantCard = ({ name, cuisines, cloudinaryImageId, sla }) => {

  // console.log(props);
  return (
    <>
      <div className="m-content mb-2">
        <div className="card">
          <img src={IMG_CDN_URL + cloudinaryImageId} alt="card" />
          <div className="des">
            <h2>{name} </h2>
            <p> {cuisines.join(",")} </p>
            <h5> {sla?.lastMileTravelString} Minutes </h5>
          </div>
        </div>
      </div>
    </>


  );
};

export default RestaurantCard;