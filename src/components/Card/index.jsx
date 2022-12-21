import React, { useState , useEffect } from 'react'
import Style from "./Card.module.css"
import Skeleton , {SkeletonTheme} from 'react-loading-skeleton'
import { CardState } from '../../context/Context'
import { Button } from "react-bootstrap";

const CardDemo = ({product}) => {
  const [isLoading , setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  },[])

  const {
    state : {cart},
    dispatch,  
  } = CardState()

  return (
    
    <div  id={Style.Card} >
      {     
      isLoading
      ?
      <div className={Style.cards}>
        <SkeletonTheme >
            <Skeleton height={400} duration={3} />
        </SkeletonTheme>
      </div>
        :
              <div className={Style.container}>
              <img src={product.image} alt="timepass" width={200} />
              <h4>{product.title}</h4>
              <h5>{product.category}</h5>
              <p>Price - {product.price}</p>
              <span>
              {/* <p>Rating:-({product.rating}) , {product.ratingCount}</p> */}
               {cart.some((p) => p.id === product.id) ?  (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                })
              }
            >
              Remove from Cart
            </Button>
           ) : ( 
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }> Add to Cart</Button>
           ) 
           }
            </span>
        </div>
}
    </div>
        
  )
}

export default CardDemo