import React,{useState,useContext} from 'react'
import { Button } from '../Button';
import { Input } from '../Input';
import {ProductQuantityAdderWrapper} from './styles'
import CartContext from 'context/CartContext'
export function ProductQuantityAdder({variantId,available}) {
  const [quantity,setQuantity] = useState(1)
  const {updateLineItem} = useContext(CartContext)
  const handleQuantityChange = (e) => {
    setQuantity(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateLineItem({variantId,quantity:parseInt(quantity,10)})
  }

  return (
    <ProductQuantityAdderWrapper>
      <strong>
      ProductQuantityAdder
      </strong>
      <form onSubmit={handleSubmit}>
      <Input type="submit" disabled={!available} type="number" min="1" step="1" value={quantity} onChange={handleQuantityChange}/>
        <Button  disabled={!available} fullWidth>
          Add to cart
        </Button>
      </form>
      </ProductQuantityAdderWrapper>
  )
}