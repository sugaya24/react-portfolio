import React from 'react';
import styled from 'styled-components';
import { Typography, Icon, Link } from '@material-ui/core';
import { LinkedIn, GitHub } from '@material-ui/icons';

import color from '../const/color';
import { makeStyles } from '@material-ui/styles';

const FooterWrap = styled.div`
  height: auto;
  margin-top: auto;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 20px;
`;

const IconWrap = styled(Icon)`
  > *:not(:last-child) {
    margin-right: 10px;
  }
`;

const TypographyWrap = styled(Typography)`
  color: ${color.SECONDARY_TEXT};
`;

const useStyles = makeStyles({
  link: {
    color: `${color.PRIMARY_ELEMENT}`,
    '&:hover': {
      color: `${color.SECONDARY_ELEMENT}`,
    },
  },
});

export const Footer = () => {
  const classes = useStyles();

  return (
    <FooterWrap>
      <IconWrap>
        <Link
          href="https://www.linkedin.com/in/yukisugaya/"
          className={classes.link}
        >
          <LinkedIn />
        </Link>
        <Link href="https://github.com/sugaya24" className={classes.link}>
          <GitHub />
        </Link>
      </IconWrap>
      <TypographyWrap variant="subtitle2">©︎ Yuki Sugaya, 2020</TypographyWrap>
    </FooterWrap>
  );
};
