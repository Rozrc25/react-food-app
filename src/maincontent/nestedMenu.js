import React from "react";
import ItemCards from "./itemCards";
import './nestedMenu.css';

const NestedMeanu =(props)=>{
    return(
        <>
        {props?.category.map((obj,index)=>{
            return(
                <div key={index}>
                    <div className="categorySection">
                        <h3 className="catagoryTitle">{obj.title}</h3>
                        <ItemCards cards={obj?.itemCards}/>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default NestedMeanu;