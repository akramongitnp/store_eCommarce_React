import { IconButton } from "@mui/material";
import { AppbarConatiner, AppbarHeader } from "../../styles/appBar";
import MenuIcon from "@mui/icons-material/Menu"
import Search from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";

export default function AppBarMobile({matches}) {

    const {setdrawerOpen, setSrch} = useUIContext();
    
    return(
        <AppbarConatiner>
            <IconButton onClick={() => {setdrawerOpen(true)}}>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign={'center'} variant="h4">Exclusive!</AppbarHeader>
            <IconButton>
                <Search onClick={() => setSrch(true)}/>
            </IconButton>
            <Actions matches={matches}/>
        </AppbarConatiner>
    );
}