import React from "react"

export default function Card(props){
    return(
        <div className = "card">     
            <div className = "left-side"> 
                <img className="place-img" src = {props.item.img} />
            </div>  
            <div className= "right-side">
                <div className = "location-top">
                    <img className="loc" src = "./images/location.png" />
                    <h2 className="place" >{props.item.location} </h2>
                    <a className="link" href = "#">View on google maps</a>
                </div>
                <h2 className="title" >{props.item.title} </h2>
                <span className = "duration"> 
                    {props.item.startDate + "-" + props.item.endDate} 
                </span>
                <p className="description"> {props.item.description} </p>
            
            </div>
            
            
        </div>


    )
}
 


// <div className = "card">
//             <img src = {props.item.img} />
//             <div className = "location-top">
//                 <img src = "./images/location.png" />
//                 <h2> {props.item.title} </h2>
//                 <a href = "#">View on google maps</a>
//             </div>
//             <span className = "duration"> {props.item.startDate} - {props.item.endDate} </span>    
//             <p> {props.item.description} </p>
// </div>