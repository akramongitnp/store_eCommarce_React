import { IconButton } from "@mui/material";
import { AppbarConatiner, AppbarHeader } from "../../styles/appBar";
import MenuIcon from "@mui/icons-material/Menu"
import Search from "@mui/icons-material/Search";
import Actions from "./actions";

export default function AppBarMobile({matches}) {
    return(
        <AppbarConatiner>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign={'center'} variant="h4">Exclusive!</AppbarHeader>
            <IconButton>
                <Search />
            </IconButton>
            <Actions matches={matches}/>
        </AppbarConatiner>
    );
}