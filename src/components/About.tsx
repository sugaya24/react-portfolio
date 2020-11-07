import React from 'react';
import styled from 'styled-components';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Theme,
  Typography,
} from '@material-ui/core';
import { ArrowRight, CheckBox } from '@material-ui/icons';
// @ts-ignore
import { makeStyles, createStyles } from '@material-ui/styles';

import color from '../const/color';
import breakpoint from '../const/breakpoint';

const AboutWrap = styled.div`
  width: 960px;
  margin: 0 auto;

  @media (max-width: ${breakpoint.md}) {
    width: 500px;
  }

  @media (max-width: ${breakpoint.sm}) {
    width: 320px;
  }
`;
const TypographyWrap = styled(Typography)`
  margin-bottom: 30px;
`;

const Icon = styled.img`
  width: 200px;
  height: 200px;
  background-position: center;
  background-size: cover;
  border: 7px solid ${color.PRIMARY_ELEMENT};
  border-radius: 50%;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    item: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  })
);

export const About: React.FC = () => {
  const classes = useStyles();

  return (
    <AboutWrap>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Icon src="img/main_icon.jpg"></Icon>
        </Grid>

        <Grid item md={8}>
          <TypographyWrap variant="h4" gutterBottom={true}>
            About me
          </TypographyWrap>
          <TypographyWrap variant="body1">
            Hi, My name is Yuki Sugaya.
          </TypographyWrap>
          <TypographyWrap variant="body1" gutterBottom={true}>
            I'm Japanese living in Vancouver. I'm Front-end Developer and
            primarily focus on writing clean, elegant and efficient code.
            Specialize in React.js.
          </TypographyWrap>

          <TypographyWrap variant="h4" gutterBottom={true}>
            Skills
          </TypographyWrap>
          <List>
            <ListItem className={classes.item}>
              <ListItemIcon>
                <CheckBox></CheckBox>
              </ListItemIcon>
              <ListItemText primary="JavaScript"></ListItemText>
            </ListItem>
            <ListItem className={`${classes.nested} ${classes.item}`}>
              <ListItemIcon>
                <ArrowRight></ArrowRight>
              </ListItemIcon>
              <ListItemText primary="React.js, TypeScript, Node.js, Express.js"></ListItemText>
            </ListItem>
            <ListItem className={classes.item}>
              <ListItemIcon>
                <CheckBox></CheckBox>
              </ListItemIcon>
              <ListItemText primary="Firebase"></ListItemText>
            </ListItem>
            <ListItem className={classes.item}>
              <ListItemIcon>
                <CheckBox></CheckBox>
              </ListItemIcon>
              <ListItemText primary="Git, Github"></ListItemText>
            </ListItem>
            <ListItem className={classes.item}>
              <ListItemIcon>
                <CheckBox></CheckBox>
              </ListItemIcon>
              <ListItemText primary="HTML5/CSS3"></ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </AboutWrap>
  );
};
