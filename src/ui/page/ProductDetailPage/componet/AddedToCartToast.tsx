import {Toast, ToastContainer} from "react-bootstrap";


type Props = {
    showToast:boolean,
    setShowToast: (showToast:boolean) => void
}

export default function AddedToCartToast({showToast,setShowToast}:Props){

    const toggleShowToast = () => setShowToast(!showToast);

    return(
        <ToastContainer position="middle-end" className="p-3" style={{zIndex: 1}}>
        <Toast show={showToast}
               onClose={toggleShowToast}
               delay={3000}
               autohide>
            <Toast.Body>
                Product(s) added to cart!!
            </Toast.Body>
        </Toast>
        </ToastContainer>
    )
}