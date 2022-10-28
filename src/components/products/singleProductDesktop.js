import { Stack } from "@mui/material";
import { Product, ProductActionWapper, ProductImage, ProductFavButton, ProductActionButton, ProductAddToCart } from "../../styles/products";
import ProductMETA from "./productMETA";
import FevIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import  FitScreen from "@mui/icons-material/FitScreen";
import { useState } from "react";


export default function SingleProductDesktop({product, matches}){
    const [show, setShow] = useState(false)
    const handleMouseEnter = () => {
        setShow(true)
    }
    const handleMouseLeave = () => {
        setShow(false)
    }
    return(
        <>
        <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ProductImage src={product.image}/>
            <ProductFavButton isFav={1}>
                <FevIcon />
            </ProductFavButton>
            {show && <ProductAddToCart show={show} variant="contained">Add to cart</ProductAddToCart>}
            <ProductActionWapper show={show}>
                <Stack direction={"column"}>
                    <ProductActionButton>
                        <ShareIcon />
                    </ProductActionButton>
                    <ProductActionButton>
                        <FitScreen />
                    </ProductActionButton>
                </Stack>
            </ProductActionWapper>
        </Product>
        <ProductMETA product={product} matches={matches}/>
        </>
    )
}