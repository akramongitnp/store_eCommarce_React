import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppBarDesktop from "./appBarDesktop";
import AppBarMobile from "./appBarMobile";

export default function Appbar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return(
        <>
            {matches ? <AppBarMobile matches={matches}/> : <AppBarDesktop matches={matches}/>}
        </>
    );
}