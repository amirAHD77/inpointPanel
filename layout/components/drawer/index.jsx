import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ViewList from "@mui/icons-material/ViewList";
import Monetization from "@mui/icons-material/MonetizationOn";
import Setting from "@mui/icons-material/Settings";
import Group from "@mui/icons-material/Group";
import themes from "../../../utils/themes";
import { DrawerContainer } from "./index.style";
import Content from "../content/index";
import Link from "next/link";
const useStyles = makeStyles({
  root: {
    display: "flex",
    backgroundColor: (props) => props.secondary,
    borderColor: (props) => props.main,
  },
});

const Drawer = (props) => {
  const [timer, setTimer] = useState(100);
  const time = useSelector((it) => it.tokenTimer);
  const [open, setOpen] = useState(false);
  const isSuperAdmin = useSelector((store) => store.layout.isSuperAdmin);
  const dispatch = useDispatch();
  const drawerWidth = 200;
  const [colors, setColors] = useState(themes.colors.admin);
  const classes = useStyles(colors); // ❌ called outside of ThemeProvider
  useEffect(() => {
    setColors(isSuperAdmin ? themes.colors.super : themes.colors.admin);
  }, [isSuperAdmin]);
  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const drawerHandler = () => {
    setOpen(!open);
  };
  return (
    <DrawerContainer>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          classes={{ paperAnchorRight: classes.root }}
          anchor="right"
          variant="permanent"
          open={open}
        >
          <DrawerHeader>
            <IconButton
              onClick={drawerHandler}
              sx={{
                color: colors.main,
                mx: !open ? "auto" : 0,
              }}
            >
              {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider
            sx={{ borderBottom: "3px solid", borderColor: colors.main }}
          />

          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <Link href="/addAdmin">
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    color: "black",
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    color="white"
                    sx={{
                      minWidth: 0,

                      color: colors.main,
                      justifyContent: "center",
                    }}
                  >
                    <AccountCircle />
                  </ListItemIcon>
                  <ListItemText
                    primary={"اکانت ادمین"}
                    sx={{
                      opacity: open ? 1 : 0,
                      textAlign: "right",
                      mr: open ? 2 : 0,
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <Link href="/adminList">
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    color: "black",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 0 : "auto",
                      color: colors.main,

                      justifyContent: "center",
                    }}
                  >
                    <ViewList />
                  </ListItemIcon>
                  <ListItemText
                    primary={"مدیریت پنل‌های غعال"}
                    sx={{
                      opacity: open ? 1 : 0,
                      textAlign: "right",
                      mr: open ? 2 : 0,
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <Link href="/finance">
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    color: "black",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 0 : "auto",
                      color: colors.main,

                      justifyContent: "center",
                    }}
                  >
                    <Monetization />
                  </ListItemIcon>
                  <ListItemText
                    primary={"حسالداری و مالی"}
                    sx={{
                      opacity: open ? 1 : 0,
                      textAlign: "right",
                      mr: open ? 2 : 0,
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>{" "}
            <ListItem disablePadding sx={{ display: "block" }}>
              <Link href="/eventsSetting">
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    color: "black",

                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    color="white"
                    sx={{
                      minWidth: 0,
                      mr: open ? 0 : "auto",
                      color: colors.main,

                      justifyContent: "center",
                    }}
                  >
                    <Setting />
                  </ListItemIcon>
                  <ListItemText
                    primary={"تنظیمات کلی رویداد"}
                    sx={{
                      opacity: open ? 1 : 0,
                      textAlign: "right",
                      mr: open ? 2 : 0,
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <Link href="/guestsList">
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    color: "black",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 0 : "auto",
                      color: colors.main,

                      justifyContent: "center",
                    }}
                  >
                    <Group />
                  </ListItemIcon>
                  <ListItemText
                    primary={"اطلاعات کاربران مهمان"}
                    sx={{
                      opacity: open ? 1 : 0,
                      textAlign: "right",
                      mr: open ? 2 : 0,
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>{" "}
            <ListItem disablePadding sx={{ display: "block" }}>
              <Link href="/transactions">
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    color: "black",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 0 : "auto",
                      color: colors.main,

                      justifyContent: "center",
                    }}
                  >
                    <Monetization />
                  </ListItemIcon>
                  <ListItemText
                    primary={"عملیات مالی"}
                    sx={{
                      opacity: open ? 1 : 0,
                      textAlign: "right",
                      mr: open ? 2 : 0,
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Content>{props.children}</Content>
        </Box>
      </Box>
    </DrawerContainer>
  );
};

export default Drawer;
