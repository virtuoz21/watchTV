import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/navigations";
import { Grid} from "@mui/material";
import Footer from "../components/Footer/Footer";

function Main () {
    return (
        <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
         <Navigation/>
         <Grid container style={{ flex: 1, paddingBottom: '60px', backgroundColor:'#313131' }}>
         <Outlet/>
        </Grid>
        <Footer/>
        </div>
    )
}

export default Main;