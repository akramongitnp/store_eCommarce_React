import { styled } from "@mui/material/styles";
import { IconButton, List, Typography } from "@mui/material";
import { Box } from "@mui/system"
import { Colors } from "../theme";
import { position } from "polished";

//Container.
export const AppbarConatiner = styled(Box)(() => ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px',
}))

//Header.
export const AppbarHeader = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '2em',
    fontFamily: '"Montez", "cursive"',
    color: Colors.secondary,

}))

//List
export const Mylist = styled(List)(({type}) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center',
}))

//Container Desktop
export const ActionItemContainerDesktop = styled(Box)(() => ({

}))

//Conatiner Mobile
export const ActionItemContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid' ${Colors.border}`
}))

export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: 10,
    left: 250,
    zIndex: 1999
}))
