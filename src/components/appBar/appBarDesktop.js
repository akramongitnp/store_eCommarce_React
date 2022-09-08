import SearchIcon  from "@mui/icons-material/Search";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarConatiner, AppbarHeader, Mylist } from "../../styles/appBar";
import Actions from "./actions";


export default function AppBarDesktop({matches}) {
    return(
        <AppbarConatiner>
            <AppbarHeader>Exclusive!</AppbarHeader>
            <Mylist type='row'>
                <ListItemText primary='Home'/>
                <ListItemText primary='Catagories'/>
                <ListItemText primary='Products'/>
                <ListItemText primary='Contact Us'/>
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </Mylist>
            <Actions matches={matches}/>
        </AppbarConatiner>
    );
}