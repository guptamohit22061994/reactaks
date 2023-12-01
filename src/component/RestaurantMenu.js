
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";

const RestaurantMenu = () => {
    const params = useParams();
    const { id } = params;
    console.log(params);
    const [restaurant2, setRestaurant2] = useState({});
    useEffect(() => {
        getRestaurantInfo2();
    }, []);

    async function getRestaurantInfo2() {
        const info = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6220577&lng=77.0470916&restaurantId=440201"
        );
        const json = await info.json();
        console.log(json.data);
        setRestaurant2(json.data);
    }

    return (
        <>
            <h2>Restaurant Id: {id} </h2>
            <h2>{restaurant2?.data?.cards[0]?.card?.card?.info?.name} </h2>
            <img src={IMG_CDN_URL + restaurant2.cloudinaryImageId} />
        </>
    );
};

export default RestaurantMenu;