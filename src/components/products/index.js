import { Grid, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { Container } from "@mui/system"
import { products } from "../../data"
import SingleProduct from "./singleProduct"
import SingleProductDesktop from "./singleProductDesktop"

export default function Products() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))

    const renderProducts = products.map(product => (
        <Grid 
            item key={product.id}
                xs={2}
                sm={4}
                md={4}
            display='flex' 
            flexDirection={'column'} 
            alignItems='center'
            >
            {matches ? (<SingleProduct product={product} matches={matches}/>) : (<SingleProductDesktop product={product} matches={matches}/>)}
        </Grid>
    ));
    return(
        <Container>
            <Grid 
            container
            spacing={{xs: 4, md: 5}}
            justifyContent={'center'} 
            sx={{ margin: '20px 4px 10px 4px' }}
            columns={{xs: 4, sm: 8, md: 12}}
            >
                {renderProducts}
            </Grid>
        </Container>
    )
}