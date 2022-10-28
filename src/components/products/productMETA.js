import { Typography } from "@mui/material";
import { ProductMetaWapper } from "../../styles/products";



export default function ProductMETA({matches, product}){
    return(
        <ProductMetaWapper>
            <Typography variant={matches ? "h9" : "h8"} lineHeight={2}>
                {product.name}
            </Typography>
            <Typography variant={matches ? "caption" : "body1"}>
                ${product.price}
            </Typography>
        </ProductMetaWapper>
    )
}