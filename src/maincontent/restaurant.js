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
            <div className="restaurant-info">
                <img src={IMG_CDN_URL + restaurants.cards[0].card.card.info.cloudinaryImageId} alt='img' />
                <div>{restaurants.cards[0].card.card.info.name}</div>
                <div class="ratingandarea"><div class="details">
                    <span className="rating">{restaurants.cards[0].card.card.info.avgRating}</span>
                </div><div><HiStar /></div>
                    <div className="city">{restaurants.cards[0].card.card.info.areaName}</div>
                    <div><GrLocation /></div><div>{restaurants.cards[0].card.card.info.city}</div></div>
            </div>
            <hr />
            {/* <div className="catlog"> */}
                {/* {console.log(restaurants.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.card)} */}
                {/* <h2 className="categrory">{restaurants.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.card.info.category}</h2> */}
            {/* </div> */}

            <div className="restaurantMenu">

                {restaurants && Object.values(restaurants.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards).map((obj) => {
                    return (
                        <>
                            <div className="mainBox" onClick={() => setIsActive(!isActive)}>
                                <div>{obj.card.info.category}</div>
                                <div className="viewBtn">{isActive ? '-' : '+'}</div>
                            </div>
                            {isActive && <div className="items">{obj.card.info.name}
                             <img src={IMG_CDN_URL + obj.card.info.imageId} alt="food"/>  
                            <button className="addbtn" onClick={() => handleAdd(obj)}>Add</button> </div> 
                            }
                                 {/* <div class="items">
                                     <div className="DishName" >{obj.card.info.name}</div>
                                     <hr />
                                    <div className="discription" >{obj.card.info.description}</div>
                                    <img src={IMG_CDN_URL + obj.card.info.imageId} alt="food" />

                                     <button onClick={() => handleAdd(obj)}>Add</button>
                                 </div> */}
                        </>)
                })}
            </div>

        </div >
    )
}
export default Restaurant;