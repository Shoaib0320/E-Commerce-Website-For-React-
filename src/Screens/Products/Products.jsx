import React, { useEffect, useState } from 'react'
import Cards from '../../Components/Card/Card'

export const Products = () => {

  const [pro, setPro] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    // fetch('https://dummyjson.com/products')
    .then((data)=>{
      return data.json()
    })
    .then((data)=>{
      setPro(data)
      console.log(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])


  return (
    <div>
       <div className="vip-card-container"> {/* Flexbox container for cards */}
            {pro.map((item) => {
                return <Cards item={item} key={item.id} />; {/* Use the Cards component */}
            })}
        </div>
    </div>
  )
}




