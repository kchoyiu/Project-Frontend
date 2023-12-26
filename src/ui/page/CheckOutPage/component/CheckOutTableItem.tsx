import {TransactionDtoItem} from "../../../../data/dto/TransactionDto.ts";

type Props = {
    item: TransactionDtoItem
}

export default function CheckOutTableItem({item}:Props){
    return(
        <>
            <tr>
                <td><img src={`${item.product.image_url}`} height="120px"/></td>
                <td>{item.product.name}</td>
                <td>${item.product.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>{item.subtotal}</td>
            </tr>
        </>
    )
}