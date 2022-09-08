import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { Mylist, ActionItemContainerMobile, ActionItemContainerDesktop } from "../../styles/appBar";
import Person from "@mui/icons-material/Person"
import Cart from "@mui/icons-material/ShoppingCart"
import Fev from "@mui/icons-material/Favorite"
import { Colors } from "../../styles/theme";


export default function Actions({matches}) {

    const Components = matches ? ActionItemContainerMobile : ActionItemContainerDesktop

    return(
        <Components>
        <Mylist type='row'>
            <ListItemButton sx={{justifyContent: 'center'}}>
                <ListItemIcon sx={{display: 'flex', justifyContent: 'center', color: matches && Colors.secondary}}>
                    <Cart />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton sx={{justifyContent: 'center'}}>
                <ListItemIcon sx={{display: 'flex', justifyContent: 'center', color: matches && Colors.secondary}}>
                    <Fev />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton sx={{justifyContent: 'center'}}>
                <ListItemIcon sx={{display: 'flex', justifyContent: 'center', color: matches && Colors.secondary}}>
                    <Person />
                </ListItemIcon>
            </ListItemButton>
        </Mylist>
        </Components>
    )
}