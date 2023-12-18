import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/navigations";
import { Grid } from "@mui/material";
import Footer from "../components/Footer/Footer";
import TitleSingleSlide from "../components/TitleSingleSlide/TitleSingleSlide";
import { useLocation } from "react-router-dom";

function Main () {
    const location = useLocation();
    return (
        <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Navigation/>
            <Grid container style={{ flex: 1, backgroundColor:'#313131'}}>
                <Outlet/>
            </Grid>
            {location.pathname === "/" && <TitleSingleSlide />}
            {location.pathname !== "/" && <Footer />}
        </div>
    )
}

export default Main;