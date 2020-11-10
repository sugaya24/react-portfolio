import React from 'react';
import { ThemeProvider, createMuiTheme, Typography } from '@material-ui/core';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { Works } from './components/Works';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

import styled from 'styled-components';
import color from './const/color';
import breakpoint from './const/breakpoint';
import { Footer } from './components/Footer';

const AppContainer = styled.div`
  width: 100%;
  background: ${color.BACKGROUND};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  @media (max-width: ${breakpoint.md}) {
    width: 80%;
  }
`;

const Header = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.p`
  font-size: 1.5em;
`;
const JobTitle = styled.h2`
  color: ${color.SECONDARY_TEXT};
`;

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default function App() {
  document.title = 'Yuki Sugaya - Portfolio';

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Container>
            <Header>
              <div>
                <Typography variant="h6">
                  <Name>Yuki Sugaya</Name>
                </Typography>
                <Typography variant="caption">
                  <JobTitle>Front-end Developer</JobTitle>
                </Typography>
              </div>
              <Navigation />
            </Header>
          </Container>
          <Switch>
            <Route exact path="/" component={Works} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </BrowserRouter>
  );
}
