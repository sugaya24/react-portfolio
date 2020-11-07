import React from 'react';
import styled from 'styled-components';
import { Typography, Icon } from '@material-ui/core';
import { LinkedIn, GitHub } from '@material-ui/icons';

import color from '../const/color';

const FooterWrap = styled.div`
  height: auto;
  margin-top: auto;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 20px;
`;

const IconWrap = styled(Icon)`
  > svg:not(:last-child) {
    margin-right: 10px;
  }
`;

const TypographyWrap = styled(Typography)`
  color: ${color.SECONDARY_TEXT};
`;

export const Footer = () => {
  return (
    <FooterWrap>
      <IconWrap>
        <LinkedIn />
        <GitHub />
      </IconWrap>
      <TypographyWrap variant="subtitle2">©︎ Yuki Sugaya, 2020</TypographyWrap>
    </FooterWrap>
  );
};
