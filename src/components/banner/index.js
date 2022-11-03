import { useMediaQuery,Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import { BannerConatainer, BannerContent, BannerDescription, BannerImage, BannerTitle, BannerShopButton } from "../../styles/banner";


export default function Banner() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return(
        <BannerConatainer>
            <BannerImage src="/images/banner/banner.png"/>
            <BannerContent>
                <Typography variant="h6">Huge Collection.</Typography>
                <BannerTitle>New Bags.</BannerTitle>
                <BannerDescription variant="subtitle">
                    The full passage of standard Lorem Ipsum copy is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </BannerDescription>
                <BannerShopButton color="primary">Shop Now</BannerShopButton>
            </BannerContent>
        </BannerConatainer>
    )
}