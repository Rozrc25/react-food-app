// shimer effect
import Shimmer from '../shimmer/shimmer';
import './container.css';
import { useState, useEffect } from "react";
import { restaurants, IMG_CDN_URL, RESTAURANT_URL ,otherRestaurentURL} from './constants';
import { FaSearch } from "react-icons/fa";
import { HiStar } from "react-icons/hi";
import { Link } from 'react-router-dom';



const Container = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurant, setRestaurant] = useState([])
  const [filteredRestaurant, setFilteredRestaturant] = useState([]);

  useEffect(() => {
    getRestaurants()
  }, [])

  const getRestaurants = async () => {
    const data = await fetch(RESTAURANT_URL)
    const jsonData = await data.json();
    setRestaurant([jsonData?.data?.cards[2]?.data?.data?.cards]);
    setFilteredRestaturant(jsonData?.data?.cards[2]?.data?.data?.cards);
  }

  const clickHandler = (() => {
    const filteredList = restaurant.filter((restaurant) => {
      return restaurant?.data?.name?.toLowerCase().includes(searchText)
    })
    setFilteredRestaturant(filteredList)
  })



  const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating, area }) => {
    return (
      <div className="restaurantCard">
        <img id="images" src={IMG_CDN_URL + cloudinaryImageId} alt='img'/>
        <div className='details'>
          <div className="name">{name}</div>
          <div className="Cuisines">{cuisines.join('')}</div>
          <div className="ratingandarea"><div class="details"><span className="rating">{avgRating}</span></div><div><HiStar/></div><div className="city">{area}</div></div>
          </div>
      </div>
    )
  }
  if (restaurant.length === 0)
    return <Shimmer />
  return (
    <>
      <div className="search">
        <input type={'search'} placeholder="Search Resturents and food" onChange={(e) => (setSearchText(e.target.value))}  data={restaurants} />
        <button className="btn" onClick={clickHandler}><FaSearch /></button>
      </div>

      <div className="divider">
        <div className="allRestaurants" >
          {filteredRestaurant.map((restaurant) => {
            return (
              <Link key={restaurant.data.id} to={"restaurant/"+restaurant.data.id}>
              <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
              </Link>
            )
          })}
        </div>
      </div>

    </>
  )
}

export default Container;

