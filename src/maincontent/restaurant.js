import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { MENU_URL } from "./constants";
import { IMG_CDN_URL } from "./constants";
import Shimmer from "../shimmer/shimmer";
import './restaurant.css';
import { HiStar } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";


const Restaurant = () => {
    const params = useParams();
    const [restaurants, setRestaurant] = useState({})

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    const getRestaurantInfo = async () => {
        const data = await fetch(MENU_URL + params.id)
        const jsonData = await data.json();
        setRestaurant(jsonData.data);
        console.log(jsonData);
        console.log(restaurants)
    }
  

    if (Object.values(restaurants).length < 1)
        return <Shimmer />
    return (
        <div className="restaurantSection">
            <div className="restaurant-info">
                <img src={IMG_CDN_URL + restaurants.cloudinaryImageId} alt='img' />
                <div>{restaurants.name}</div>
                <div class="ratingandarea"><div class="details">
                    <span className="rating">{restaurants.avgRating}</span>
                </div><div><HiStar /></div>
                    <div className="city">{restaurants.area}</div>
                    <div><GrLocation /></div><div>{restaurants.city}</div></div>
            </div>
            <hr />
            <div className="restaurantMenu">
                {restaurants && Object.values(restaurants?.menu.items).map((obj) => {
                    return (<div class="items">
                        <img src={IMG_CDN_URL + obj.cloudinaryImageId} onError="this.onerror=null; this.src='/images/noimage.gif';"/>
                        <div className="DishName">{obj.name}</div>
                        <div className="categrory">{obj.category}</div>
                        <div className="discription" >{obj.description}</div>
                    </div>)
                })}
            </div>

        </div>
    )
}
export default Restaurant;