import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";


export const PromotionContainer = styled(Box)(({theme}) => ({
    [theme.breakpoints.up("md")]: { 
        padding: '25px 0px 25px 0px' 
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px 0px 5px 0px',
    overflow: 'hidden',
    background: Colors.secondary,
}))

export const MessageText = styled(Typography)(({theme}) => ({
    fontFamily: '"Montez", "Cursive"',
    [theme.breakpoints.up("md")]: { 
        fontSize: '2rem' 
    },
    color: Colors.white,
    fontSize: '1rem',
}))