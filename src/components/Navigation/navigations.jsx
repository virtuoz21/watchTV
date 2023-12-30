import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Icon from "../../images/logo.png";
import LogOut from "../../pages/Auth/LogOut";
import { MENU } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import "./navigations.css";

function Navigation() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [user, setUser] = useState(getAuth().currentUser);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    LogOut();
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    // Обновляем состояние пользователя после входа/выхода
    setUser(getAuth().currentUser);
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={Icon} alt="Icon" width="200" height="50" />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              marginRight: "0",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar-nav"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar-nav"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {MENU.map(({ name, link }, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink className="menuBar" to={link}>
                      {name}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={Icon} alt="Icon" width="200" height="50" />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
                marginRight: "10.5rem",
              },
            }}
          >
            {MENU.map(({ name, link }, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  `navLink ${isActive ? "isActive" : ""}`
                }
                to={link}
              >
                {name}
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <React.Fragment>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {user ? (
                      <Avatar src={user.photoURL} />
                    ) : (
                      <Avatar src="/static/images/avatar/2.jpg" />
                    )}
                  </IconButton>
                </Tooltip>
                <Menu
                  id="menu-appbar-user"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <NavLink to="/profile" className="navLink">
                      <Typography
                        textAlign="center"
                        sx={{ color: "red", fontSize: "14px", right: "2px" }}
                      >
                        Profile
                      </Typography>
                    </NavLink>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      handleLogOut();
                    }}
                  >
                    <NavLink to="/" className="navLink">
                      <Typography
                        textAlign="center"
                        sx={{ color: "red", fontSize: "14px" }}
                      >
                        Logout
                      </Typography>
                    </NavLink>
                  </MenuItem>
                </Menu>
              </React.Fragment>
            ) : (
              <NavLink to="/auth/register" className="navLink2">
                Sign in/Sign up
              </NavLink>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;
