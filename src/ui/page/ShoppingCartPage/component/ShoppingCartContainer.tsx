import {CartItemDto} from "../../../../data/dto/CartItemDto.ts";
import CartItem from "./CartItem.tsx";

type Props ={
    cartItemList:CartItemDto[]
}
export default function ShoppingCartContainer({cartItemList}:Props){
    return(
        <>
        <div>
            {
                cartItemList.map((item)=>(
                    <CartItem cartItem={item} key={item.pid}/>
                ))
            }
        </div>
        </>
    )
}