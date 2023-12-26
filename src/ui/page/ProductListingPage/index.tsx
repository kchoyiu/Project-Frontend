import TopNavBar from "../../component/TopNavBar.tsx";
import ProductList from "./component/ProductList.tsx";
import {Container} from "react-bootstrap";
import CarouselFade from "../../component/CarouselFade.tsx";
import {useEffect, useState} from "react";
import {ProductListDto} from "../../../data/dto/ProductDto.ts"
import Loading from "../../component/Loading.tsx";
import * as GetProductApi from "../../../api/ProductApi.ts"
import { useNavigate } from "react-router-dom";
import './ProductListingPage.css'


export default function ProductListingPage(){

    const [productList, setProductList] = useState<ProductListDto[] | undefined>(undefined);
    const navigate = useNavigate();
    const getAllProduct = async () => {
       try {
           const data = await GetProductApi.getAllProduct()
           setProductList(data);
           document.title="Jersey Shop - Home"
       }catch (error){
            navigate("/error")
       }
    }

    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <div style={{}}>
            <TopNavBar/>
            <CarouselFade/>
            <Container>
                {
                    productList?<ProductList productDto={productList}/>
                        :<Loading/>
                }
            </Container>
        </div>
    )
}