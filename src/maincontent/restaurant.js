import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { MENU_URL } from "./constants";
import { IMG_CDN_URL } from "./constants";
import Shimmer from "../shimmer/shimmer";
import './restaurant.css';
import { HiStar } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import RestaurantMenu from './restaurantMenu';
import NestedMeanu from "./nestedMenu";


const Restaurant = () => {
    const params = useParams();
    const [restaurants, setRestaurant] = useState([])
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);

    const handleAdd = (item) => {
        dispatch(addItem(item))
    }
    useEffect(() => {
        getRestaurantInfo();
        // getMenufromApi();
    }, [])

    const getRestaurantInfo = async () => {
        const data = await fetch(MENU_URL + params.id)
        const jsonData = await data.json();
        setRestaurant(jsonData.data);
    }

    // const getMenufromApi = async () => {
    //     fetch(MENU_URL + params.id)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             console.log(json);
    //             setRestaurant(json.data);
    //             console.log(setRestaurant)
    //         });

    // }

    if (Object.values(restaurants).length < 1)
        return <Shimmer />
    return (
        <div className="restaurantSection">
            {/* <pre>{JSON.stringify(restaurants.cards,null,2)}</pre> */}
            {/* {console.log(restaurants.cards[3].groupedCard.cardGroupMap.REGULAR.cards)} */}
            {/* {console.log(restaurants.cards[3])} */}
            {/* {console.log(restaurants.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)} */}
            {/* {console.log(restaurants.cards[0].card.card.info)} */}
            <div className="restaurant-info" >
                <img src={IMG_CDN_URL + restaurants.cards[0].card.card.info.cloudinaryImageId} alt='img' />
                <div>{restaurants.cards[0].card.card.info.name}</div>
                <div className="ratingandarea"><div class="details">
                    <span className="rating">{restaurants.cards[0].card.card.info.avgRating}</span>
                </div><div><HiStar /></div>
                    <div className="city">{restaurants.cards[0].card.card.info.areaName}</div>
                    <div><GrLocation /></div><div>{restaurants.cards[0].card.card.info.city}</div></div>
            </div>
            <hr />
            <div className="restaurantMenu">

                <RestaurantMenu data={restaurants?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards}/>
               

                
            </div>

        </div >
    )
}
export default Restaurant;