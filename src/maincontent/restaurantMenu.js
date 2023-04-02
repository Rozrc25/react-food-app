import './restaurant.css';
import ItemCards from './itemCards';
import NestedMeanu from './nestedMenu';

const RestaurantMenu = (props)=>{
    console.log("props", props.data);
    return(
        <>
        {props?.data?.map((obj,index)=>{
            return(
                <div key={index}>
                    <h3 className='menuTitle'>{obj.card.card.title}</h3>
                    {obj?.card?.card?.categories?<NestedMeanu category={obj?.card?.card?.categories}/>:
                    <ItemCards cards={obj?.card?.card?.itemCards}/>}
                </div>
            )
            // <div key={index} className="categorySection">
            //     {obj.card.card.itemCards.map((obj,index)=>{
            //         return(
            //             <><div key={obj.card.card.info.id} className="mainBox">
                            
            //                 <div className="viewBtn"></div>
            //             </div><div className="items">{obj.card.card.info.name}
            //                     <img src={IMG_CDN_URL + obj.card.card.info.imageId} alt="food" />
            //                     <button className="addbtn" >Add</button> </div></> 
            //         )
            //     })}
            // </div>)

        })}
        </>
    )
}

export default RestaurantMenu;
