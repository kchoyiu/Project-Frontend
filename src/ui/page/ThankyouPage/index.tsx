import TopNavBar from "../../component/TopNavBar.tsx";
import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ThankYouPage(){
    const [countDown,setcountDown] = useState(5)
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() =>{
            setcountDown((countDown) => countDown - 1);
            if (countDown===0){
                navigate("/")
            }
        },1000);
    }, [countDown]);

    return (
        <>
        <TopNavBar/>
            <Container>
                <img src={"https://assignmentpoint.com/wp-content/uploads/2019/10/Thanks-for-purchase-of-software.jpg"} style={{width:"80%", marginTop:"64px", marginLeft:"124px"}}/>
            </Container>
            <h2 style={{color:"white",marginLeft:"240px"}}>Back to home page in {countDown} second.</h2>
        </>
    )
}