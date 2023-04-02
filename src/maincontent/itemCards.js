
import { IMG_CDN_URL } from "./constants";
import noIMage from '../assets/no img.jpg';
const ItemCards = (props) => {
    
    return (
        <div className='menuITems'>
            {props?.cards?.map((obj) => {
                return (<>
                    <div key={obj.card.info.id} className='items'>
                        <h4>{obj?.card?.info.name}</h4>
                        <p>{obj?.card?.info?.description}</p>
                        <p className="priceCol">₹{obj?.card?.info?.price/100}</p>
                        {obj?.card?.info?.imageId ? <img className='menufoodimg' src={IMG_CDN_URL + obj.card.info.imageId} alt="food" /> : <img src={noIMage} />}
                    </div> 
                    {/* <div><button className="addbtn" >Add</button></div> */}
                </>)

            })}
        </div>
    )
}
export default ItemCards;