import {CartItemDto} from "../../../../data/dto/CartItemDto.ts";
import CartItem from "./CartItem.tsx";

type Props ={
    cartItemList:CartItemDto[]
    setCartItemList: (cartItemList:CartItemDto[]) => void
}
export default function ShoppingCartContainer({cartItemList,setCartItemList}:Props){
    return(
        <>
        <div>
            {
                cartItemList.map((item)=>(
                    <CartItem item={item}
                              setCartItemList={setCartItemList}
                              carItemList={cartItemList}
                              key={item.pid}/>
                ))
            }
        </div>
        </>
    )
}