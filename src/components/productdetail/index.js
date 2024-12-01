import { Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography } from "@mui/material";
import { Box, styled, useMediaQuery } from "@mui/system";
import { Colors } from "../../styles/theme";
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from "@emotion/react";
import { ProductImage } from "../../styles/products";
import Products from "../products";
import { products } from "../../data";


function SlideTransition(props) {
    return <Slide direction="down" {...props} />
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    padding: theme.spacing(4)
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    lineHeight: 1.5,
}));

export default function ProductDetail({open, onClose,Products}) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog
            TransitionComponent={SlideTransition}
            variant='permanat'
            open={open}
            fullScreen
        >
            <DialogTitle sx={{
                background: Colors.secondary
            }}>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}>
                    Product title
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
                {/* <Products sx={{ mr: 4 }}>
                    <ProductImage style={{
                    maxWidth: '600px'
                    }} src={products.photo} />
                </Products> */}
                <ProductDetailInfoWrapper>
                        <Typography variant="subtitle1"> SKU 123</Typography>
                        <Typography variant="subtitle">Availability: {products.quantity} 5 in stock</Typography>
                        <Typography textTransform={"uppercase"} sx={{ lineHeight: 2 }} variant="h4">
                        {products.name}
                        </Typography>
                       
                </ProductDetailInfoWrapper>
                   
                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>
    )
}