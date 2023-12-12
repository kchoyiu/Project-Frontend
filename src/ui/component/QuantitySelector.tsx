import {faSquareMinus, faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "react-bootstrap";

type Props = {
    quantity: number,
    handleMinus: () => void,
    handlePlus: () => void,
}
export default function QuantitySelector({quantity, handleMinus, handlePlus}: Props) {

    return (
        <div className="d-flex">
            <Button style={{
                width: "40px",
                height: "40px",
                background: "black"}}
                    onClick={handleMinus}>
                <FontAwesomeIcon icon={faSquareMinus}/>
            </Button>
            <div style={{
                width: "40px",
                height: "40px",
                border: "1px black solid",
                borderRadius: "8px",
                background: "white"
            }} className="d-flex justify-content-center align-items-center">
                {quantity}
            </div>
            <Button style={{
                width: "40px",
                height: "40px",
                background: "black"}}
                    onClick={handlePlus}>
                <FontAwesomeIcon icon={faSquarePlus}/>
            </Button>
        </div>
    )
}