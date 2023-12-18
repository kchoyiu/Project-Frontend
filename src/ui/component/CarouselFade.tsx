import {Carousel} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


export default function CarouselFade() {
    const navigate = useNavigate();

    return (
        <>
            <Carousel
                style={{background: "gray", width: "60%", margin: "auto auto", marginTop:"16px"}}>
                <Carousel.Item onClick={() => {
                    navigate("/product/1")
                }} style={{cursor:"pointer"}}>
                    <img
                        src={"https://shoplineimg.com/62ce3bb1ca1bc7005cebff68/6497f02246ba3e0017aedfe2/1080x.webp?source_format=jpg"}
                        style={{width: "100%"}}
                        className="d-block, mx-auto"/>
                </Carousel.Item>
                <Carousel.Item onClick={() => {
                    navigate("/product/1")
                }} style={{cursor:"pointer"}}>
                    <img
                        src={"https://shoplineimg.com/62ce3bb1ca1bc7005cebff68/6467315fc0abee002077565d/2160x.webp?source_format=jpg"}
                        style={{width: "100%"}}
                        className="d-block, mx-auto"
                    />
                </Carousel.Item>
                <Carousel.Item onClick={() => {
                    navigate("/product/5")
                }} style={{cursor:"pointer"}}>
                    <img src={"https://www.milk.com.hk/wp-content/uploads/2023/08/643631-1280x720.jpg"}
                         style={{width: "100%"}}
                    />
                </Carousel.Item>
                <Carousel.Item onClick={() => {
                    navigate("/product/8")
                }} style={{cursor:"pointer"}}>
                    <img src={"https://e3.365dm.com/23/07/2048x1152/skynews-lionel-messi-leo-miami_6219915.jpg?20230715225006"}
                         style={{width: "100%"}}
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}