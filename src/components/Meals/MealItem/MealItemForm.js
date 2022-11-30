import classes from './MealItemForm.module.css'
import Input from '../../UI/input'

import CartContext from '../../../sources/cart-context'
import { useContext } from 'react'
const MealItemForm=(props)=>{
const cartCntx=useContext(CartContext)
const addItemCart=(event)=>{
cartCntx.items.push(props.item)
event.preventDefault();

console.log(event.target.value)
}
return(<form className={classes.form}>
    {console.log(cartCntx.items)}
    <Input label="Amount" input={{
        id:'amount',
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
    }}/>
    <button onClick={addItemCart}>+Add</button>
</form>)
}
export default MealItemForm