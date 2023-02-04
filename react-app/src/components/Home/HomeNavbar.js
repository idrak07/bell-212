import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import bell from "../image/logo.png";

const drawerWidth = 240;
const navItems = [
  { title: "Home", to: "/" },
  { title: "History", to: "/historydetail" },
  { title: "Message", to: "/messageDetail" },
  { title: "Trades", to: "/trades" },
  { title: "Login", to: "/auth" },
];

function HomeNavbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const location = useLocation();
  // alert(location.pathname)

  const activeClass = {
    background: "#ffffff33",
  };
  const unActiveClass = {
    background: "transparent",
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img
          alt=""
          src={bell}
          width="60"
          height="60"
          className="d-inline-block"
          style={{ marginRight: "10px" }}
        />{" "}
        Our Responsibilty, Our Pride
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={item.to} style={{ display: "block", width: "100%" }}>
                {item.title}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ padding: "4px 0" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ color: "#fff" }}>
              <img
                alt=""
                src={bell}
                width="60"
                height="60"
                className="d-inline-block"
                style={{ marginRight: "10px" }}
              />
              Our Responsibilty, Our Pride
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={item.to}>
                <Button
                  key={item.to}
                  sx={{ color: "#fff" }}
                  style={
                    location.pathname === item.to ||
                    (item.to === "/trades" &&
                      location.pathname.includes("/trades"))
                      ? activeClass
                      : unActiveClass
                  }
                >
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="div" sx={{ p: 4 }}></Box>
    </Box>
  );
}

HomeNavbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HomeNavbar;
