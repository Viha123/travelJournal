import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
export default function App(){
    const places = data.map(item=>{
        return (
            <Card 
                key={item.id}
                item = {item}
            />
        )
    }) 
    return(
        <div className = "app">
            <Navbar />
            <section className = "card-list">
                {places}
            </section>
            
        </div>
        
    )
}