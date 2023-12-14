import {Carousel} from "react-bootstrap";


export default function CarouselFade() {
    return (
        <>
            <Carousel
                style={{background: "gray", width: "60%", margin: "auto auto", marginTop:"16px"}}>
                <Carousel.Item>
                    <img
                        src={"https://shoplineimg.com/62ce3bb1ca1bc7005cebff68/6497f02246ba3e0017aedfe2/1080x.webp?source_format=jpg"}
                        style={{width: "100%"}}
                        className="d-block, mx-auto"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={"https://shoplineimg.com/62ce3bb1ca1bc7005cebff68/6467315fc0abee002077565d/2160x.webp?source_format=jpg"}
                        style={{width: "100%"}}
                        className="d-block, mx-auto"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={"https://www.milk.com.hk/wp-content/uploads/2023/08/643631-1280x720.jpg"}
                         style={{width: "100%"}}
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}