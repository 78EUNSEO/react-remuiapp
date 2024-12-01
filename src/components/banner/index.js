import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";


export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <BannerImage src="/images/banner/bannerimg02.png"/>
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant="h2">New Bags</BannerTitle>

                <BannerDescription variant="subtitle">
                Discover the handbag that suits your style. Shop today and 
                add a touch of elegance to your everyday!
                </BannerDescription>
                <BannerShopButton color="primary">
                    Show Now
                </BannerShopButton>
            </BannerContent>
        </BannerContainer>
        
    );
}