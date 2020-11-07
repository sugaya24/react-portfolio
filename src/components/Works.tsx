import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import styled from 'styled-components';
import { worksData } from '../data/worksData';
import { Work } from './Work';
import breakpoint from '../const/breakpoint';

const WorksWrap = styled.div`
  width: 960px;
  margin: 0 auto;
  @media (max-width: ${breakpoint.md}) {
    width: 80%;
  }
`;

export const Works: React.FC = () => {
  return (
    <WorksWrap>
      <Grid container spacing={2}>
        {worksData.map((data: any) => {
          return (
            <Grid key={data.id} item sm={12} md={6}>
              <Work {...data} />
            </Grid>
          );
        })}
      </Grid>
    </WorksWrap>
  );
};
