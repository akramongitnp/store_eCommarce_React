import { Button, Grid,List ,ListItemText, Stack, Typography } from "@mui/material";
import { FooterTitle, SubcribeTF } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import { Box } from "@mui/system"
import FB from "@mui/icons-material/Facebook"
import TW from "@mui/icons-material/Twitter"
import IN from "@mui/icons-material/Instagram"
import Send from "@mui/icons-material/Send"

export default function Footer() {
    return(
        <Box
            sx={{
                background: Colors.shaft,
                color: Colors.white,
                p: {xs: 2, md: 10},
                pt: 12,
                pb: 12,
                fontSize: {xs: "12px", md: "14px"}
            }}
        >
            <Grid container spacing={2} juatifyContent="center">
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">About Us</FooterTitle>
                    <Typography variant="caption2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                    <Box sx={{mb: 4, mt: 5, color: Colors.dove_gray}}>
                        <FB sx={{mr: 1}}/>
                        <TW sx={{mr: 1}}/>
                        <IN sx={{mr: 1}}/>
                    </Box>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography>About Us</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography>Order Tracking</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography>Sell with Us</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography>Privacy & Policy</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography>Teams & Condition.</Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">My Account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography>Login</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography>My Profile</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography>My cart</Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography>My Wishlist</Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">Newslatter</FooterTitle>
                    <Stack>
                        <SubcribeTF color="primary" label="Email Address" variant="standard" />
                        <Button
                            startIcon={<Send sx={{color: Colors.white}}/>}
                            sx={{mt: 4, mb: 4}}
                            variant="contained"
                        >
                            Subscribe
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}