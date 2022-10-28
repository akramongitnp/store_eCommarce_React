import { Stack } from "@mui/material";
import { Product, ProductActionWapper, ProductImage, ProductFavButton, ProductActionButton, ProductAddToCart } from "../../styles/products";
import ProductMETA from "./productMETA";
import FevIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import  FitScreen from "@mui/icons-material/FitScreen";


export default function SingleProduct({product, matches}){
    return(
        <>
        <Product>
            <ProductImage src={product.image}/>
            <ProductMETA product={product} matches={matches}/>
            <ProductActionWapper>
                <Stack direction={"Row"}>
                    <ProductFavButton isFav={1}>
                        <FevIcon />
                    </ProductFavButton>
                    <ProductActionButton>
                        <ShareIcon />
                    </ProductActionButton>
                    <ProductActionButton>
                        <FitScreen />
                    </ProductActionButton>
                </Stack>
            </ProductActionWapper>
        </Product>
        <ProductAddToCart variant="contained">Add to Cart</ProductAddToCart>
        </>
    )
}