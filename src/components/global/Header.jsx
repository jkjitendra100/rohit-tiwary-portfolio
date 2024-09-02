"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BiMenu } from "react-icons/bi";
import { PiFlower } from "react-icons/pi";

const drawerWidth = 240;
const navItems = [
  "Brands",
  "Wealth Management",
  "IT Services",
  "Social Apps",
  "Contact Us",
];

export default function Header() {
  // const { window } = props;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down and scroll position is greater than 80
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY && currentScrollY > 80) {
        // Scrolling up and scroll position is greater than 80
        setShowHeader(true);
      } else if (currentScrollY <= 80) {
        // When scrolling back to top (<= 80), always show the header
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
      setScrollPosition(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToElementId = (key) => {
    switch (key) {
      case "Brands":
        const brandsElement = document.getElementById("it-services");
        if (brandsElement) {
          const yOffset = -70; // Adjust this value to set the top margin
          const yPosition =
            brandsElement.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

          window.scrollTo({
            top: yPosition,
            behavior: "smooth",
          });
        }
        break;

      case "Wealth Management":
        const wealthElement = document.getElementById("it-services");
        if (wealthElement) {
          const yOffset = -70; // Adjust this value to set the top margin
          const yPosition =
            wealthElement.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

          window.scrollTo({
            top: yPosition,
            behavior: "smooth",
          });
        }
        break;

      case "IT Services":
        const element1 = document.getElementById("it-services");
        if (element1) {
          const yOffset = -70; // Adjust this value to set the top margin
          const yPosition =
            element1.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({
            top: yPosition,
            behavior: "smooth",
          });
        }
        break;

      case "Social Apps":
        const element2 = document.getElementById("social-services");
        if (element2) {
          const yOffset = -70; // Adjust this value to set the top margin
          const yPosition =
            element2.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({
            top: yPosition,
            behavior: "smooth",
          });
        }
        break;

      case "Contact Us":
        const element3 = document.getElementById("contact-us");
        if (element3) {
          const yOffset = -70; // Adjust this value to set the top margin
          const yPosition =
            element3.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({
            top: yPosition,
            behavior: "smooth",
          });
        }
        break;

      default:
        break;
    }
  };

  ///////////////////////////////////
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <div className="ml-4 flex gap-4 items-center">
          <img
            className="w-10 h-10 rounded-full border object-contain border-secondaryDark shadow-md shadow-secondaryDark"
            src="/assets/images/rohitTiwary.png"
            alt="founder"
          />
          <span className="text-lg bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent uppercase font-semibold">
            Rohit Tiwary
          </span>
        </div>
      </Typography>
      <Divider />
      <List>
        {navItems?.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "left" }}
              onClick={() => handleScrollToElementId(item)}
            >
              <div className="flex font-semibold items-center gap-4 bg-gradient-to-tr from-primary via-rose-600 to-secondary bg-clip-text text-transparent">
                <PiFlower className="text-rose-600" />
                <div>{item}</div>
              </div>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div
        className={`z-50 fixed top-0 left-0 right-0 transition-transform duration-500 ease-in-out ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            component="nav"
            sx={{
              bgcolor: "#fff",
              position: "static",
            }}
          >
            <Toolbar>
              <Box
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ mr: 2, display: { sm: "none" } }}
                className="flex items-center w-full"
              >
                <IconButton onClick={handleDrawerToggle}>
                  <BiMenu className="text-rose-600" />
                </IconButton>
                <div className="ml-4 flex gap-4 items-center w-full justify-between">
                  <span
                    className="text-lg bg-gradient-to-b from-primary via-rose-600 to-secondar
                  y bg-clip-text text-transparent uppercase font-semibold"
                  >
                    Rohit Tiwary
                  </span>
                  <img
                    className="w-10 h-10 rounded-full border object-contain border-secondaryDark shadow-md shadow-secondaryDark"
                    src="/assets/images/favicon.jpg"
                    alt="founder"
                  />
                </div>
              </Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <div className="flex gap-4 items-center">
                  <img
                    className="w-12 h-12 rounded-full border object-contain border-secondaryDark shadow-md shadow-secondaryDark"
                    src="/assets/images/favicon.jpg"
                    alt="founder"
                  />
                  <span className="text-lg bg-gradient-to-b from-primary via-rose-600 to-secondary bg-clip-text text-transparent uppercase font-semibold">
                    Rohit Tiwary
                  </span>
                </div>
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems?.slice(2)?.map((item) => (
                  <Button
                    key={item}
                    onClick={() => handleScrollToElementId(item)}
                  >
                    <div className="bg-gradient-to-tr font-semibold from-primary via-rose-600 to-secondary bg-clip-text text-transparent">
                      {item}
                    </div>
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
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
          </nav>
        </Box>
      </div>
    </>
  );
}
