import { Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import {useUIContext} from "../../context/ui"
import CloseIcon from "@mui/icons-material/Close"
import { lighten } from "polished";
import { Colors } from "../../styles/theme";
import { DrawerCloseButton } from "../../styles/appBar";


const MiddleDevider = styled((props) => (
    <Divider variant="middle" {...props}/>
))``;

export default function AppDrawer() {

    const {drawerOpen, setdrawerOpen} = useUIContext();

    return(
        <> 
            {drawerOpen && (
                <DrawerCloseButton onClick={() => setdrawerOpen(false)}>
                    <CloseIcon 
                        className="testing"
                        sx={{fontSize: "2.5rem", color: lighten(0.09, Colors.secondary)}}
                    />
                </DrawerCloseButton>
            )}
                <Drawer open={drawerOpen}>
                    <List>
                        <ListItemButton>
                            <ListItemText>Home</ListItemText>
                        </ListItemButton>
                        <MiddleDevider />
                        <ListItemButton>
                            <ListItemText>Catagories</ListItemText>
                        </ListItemButton>
                        <MiddleDevider />
                        <ListItemButton>
                            <ListItemText>Products</ListItemText>
                        </ListItemButton>
                        <MiddleDevider />
                        <ListItemButton>
                            <ListItemText>Studio</ListItemText>
                        </ListItemButton>
                        <MiddleDevider />
                        <ListItemButton>
                            <ListItemText>Contact Us!</ListItemText>
                        </ListItemButton>
                        <MiddleDevider />
                        <ListItemButton>
                            <ListItemText>Help</ListItemText>
                        </ListItemButton>
                    </List>
                </Drawer>
        </>
    )
}