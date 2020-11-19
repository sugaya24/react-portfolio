import React, { useState } from 'react';
import {
  Typography,
  Drawer,
  IconButton,
  createStyles,
  Theme,
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AllInbox, Face, Menu, Work } from '@material-ui/icons';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import color from '../const/color';

const StyledNavLink = styled(NavLink)`
  color: ${color.SECONDARY_TEXT};
  text-decoration: none;
  font-size: 22px;
`;

const NavLinkWrap = styled.ul`
  display: flex;
  list-style: none;

  > li {
    margin-right: 24px;
  }
  > li:last-child {
    margin-right: 0;
  }
`;

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1, 1),
    },
    drawerNavLink: {
      display: 'block',
      width: '100%',
      color: color.PRIMARY_TEXT,
      textDecoration: 'none',
      fontSize: '22px',
    },
  })
);

export const Navigation = () => {
  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <Hidden smDown>
        <NavLinkWrap>
          <Typography variant="h3" component="li">
            <StyledNavLink
              exact
              to="/"
              className="item"
              activeStyle={{
                color: `${color.PRIMARY_TEXT}`,
              }}
            >
              Works
            </StyledNavLink>
          </Typography>
          <Typography variant="h3" component="li">
            <StyledNavLink
              to="/about"
              className="item"
              activeStyle={{
                color: `${color.PRIMARY_TEXT}`,
              }}
            >
              About
            </StyledNavLink>
          </Typography>
          <Typography variant="h3" component="li">
            <StyledNavLink
              to="/contact"
              className="item"
              activeStyle={{
                color: `${color.PRIMARY_TEXT}`,
              }}
            >
              Contact
            </StyledNavLink>
          </Typography>
        </NavLinkWrap>
      </Hidden>
      <Hidden mdUp>
        <IconButton onClick={toggleDrawer}>
          <Menu />
        </IconButton>
      </Hidden>
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        open={isDrawerOpen}
        onClose={toggleDrawer}
        anchor="right"
        variant="temporary"
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavLink
            className={classes.drawerNavLink}
            exact
            to="/"
            onClick={toggleDrawer}
          >
            <ListItem button>
              <ListItemIcon>
                <Work />
              </ListItemIcon>
              <ListItemText primary="Works" />
            </ListItem>
          </NavLink>

          <NavLink
            className={classes.drawerNavLink}
            to="/about"
            onClick={toggleDrawer}
          >
            <ListItem button>
              <ListItemIcon>
                <Face />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </NavLink>

          <NavLink
            className={classes.drawerNavLink}
            to="/contact"
            onClick={toggleDrawer}
          >
            <ListItem button>
              <ListItemIcon>
                <AllInbox />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
    </div>
  );
};
