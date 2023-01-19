import { IconButton, Slide, TextField } from "@mui/material";
import { useUIContext } from "../../context/ui";
import {Colors} from "../../styles/theme"
import { Box, styled } from "@mui/system"
import SrchIcon from "@mui/icons-material/Search"
import CloseBtn from "@mui/icons-material/Close"

const SearchBoxContainer = styled(Box)(({theme}) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: Colors.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
    opacity: 0.9,
}))

const SearchFeild = styled(TextField)(({theme}) => ({
    ".MuiInputLabel-root" : {
        color: Colors.secondary
    },
    "MuiInput-root" : {
        fontSize: "1rem",
        [theme.breakpoints.up("md")]: {
            fontSize: "2rem"
        },
        color: Colors.secondary
    },
    ".MuiInput-root::before" : {
        color: `1px solid ${Colors.secondary}`
    },
    padding: "0 0 0 40px"
}))

export default function Search() {
    const {showSrch, setSrch} = useUIContext();

    return(
        <Slide direction="down" in={showSrch} timeout={500}>
            <SearchBoxContainer>
                <SearchFeild color="secondary" varient="standard" fullwidth placeholder="Search..."/>
                <IconButton>
                    <SrchIcon sx={{fontSize: {xs: "2rem", md: "3rem"}}} color="secondary"/>
                </IconButton>
                <IconButton
                    onClick={() => setSrch(false)}
                    sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                    }}
                >
                    <CloseBtn sx={{fontSize: {xs: "2rem", md: "3rem"}}} color="secondary"/>
                </IconButton>
            </SearchBoxContainer>
        </Slide>
    )

}