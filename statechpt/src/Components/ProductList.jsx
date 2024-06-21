import React from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
    let products=[
        {
            image:"https://icdn.caughtoffside.com/wp-content/uploads/2018/02/ronaldo-man-utd-trophy-414x372.jpg",
            name:"Ronaldo",
            price:39
        },
        {
            image:"http://img.bleacherreport.net/img/images/photos/002/665/313/hi-res-180963744-lionel-messi-of-fc-barcelona-celebrates-after-scoring_crop_exact.jpg?w=1500&h=1500&q=85",
            name:"Messi",
            price:36
        },
        {
            image:"https://tse2.mm.bing.net/th?id=OIP.Y3IuPN875BriSG7M7JVR8wHaIX&pid=Api&P=0&h=180",
            name:"Zidane",
            age:51
        },
    ]
  return (
    <div className='productslist'>
      {products.map(el=><ProductCard el={el} />)}
    </div>
  )
}

export default ProductList