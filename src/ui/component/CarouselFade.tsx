import React from "react";
import { Carousel } from "react-bootstrap";


export default function CarouselFade(){
    return(
        <>
            <Carousel style={{background:"gray"}}>
                <Carousel.Item>
                    <img src={"https://reactrouter.com/_docs/tutorial/15.webp"}
                         style={{width: "250px"}}
                         className="d-block, mx-auto"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={"https://www.w3schools.com/howto/img_paris.jpg"}
                         style={{width: "100%"}}
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={"https://www.w3schools.com/howto/img_paris.jpg"}
                         style={{width: "100%"}}
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}