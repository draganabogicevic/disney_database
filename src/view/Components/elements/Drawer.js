import * as React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import Toggler from "./Toggler";
import MenuBurger from "./MenuBurger";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import styled from "styled-components";

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

export default function TemporaryDrawer({ themeMode, theme, toggleTheme }) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <NavWrapper key={anchor}>
          <Logo themeMode={themeMode} />
          <MenuBurger onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box
              className="drawer"
              sx={{ width: "100%", height: "100vh" }}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <List>
                <ListItem key={1}>
                  <Link to="/" className="link">
                    Home
                  </Link>
                </ListItem>
                <ListItem key={2}>
                  <Link to="/favorite" className="link">
                    MyFavorites
                  </Link>
                </ListItem>
                <ListItem key={3}>
                  <Link to="/about" className="link">
                    About
                  </Link>
                </ListItem>
                <ListItem key={4}>
                  <Toggler theme={theme} toggleTheme={toggleTheme} />
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </NavWrapper>
      ))}
    </div>
  );
}
