import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/navigations";
import { Grid } from "@mui/material";
import Footer from "../components/Footer/Footer";
import TitleSingleSlide from "../components/TitleSingleSlide/TitleSingleSlide";
import { useLocation } from "react-router-dom";

function Main() {
  const location = useLocation();
  const isMainPath = location.pathname === "/";

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navigation />
      {isMainPath ? null : (
        <Grid
          container
          style={{ flex: 1, backgroundColor: "#313131", marginTop: "0" }}
        >
          <Outlet />
        </Grid>
      )}
      {isMainPath && <TitleSingleSlide />}
      {!isMainPath && <Footer />}
    </div>
  );
}

export default Main;
