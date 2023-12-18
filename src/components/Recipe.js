import React from 'react'
import HomeCarousel from './HomeCarousel'

function Recipe() {
  return (
    <div style={{backgroundColor:"black"}}>
      <h1 style={{backgroundColor:"#ffcc32",color:"white", paddingBottom:"50px"}}>
        Our Recipes
      </h1>
      <HomeCarousel/>
    </div>
  )
}

export default Recipe
