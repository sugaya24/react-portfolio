import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import styled from 'styled-components';
import { worksData } from '../data/worksData';
import { Work } from './Work';

const WorksWrap = styled.div`
  width: 960px;
  margin: 0 auto;
`;

export const Works: React.FC = () => {
  return (
    <WorksWrap>
      <Grid container spacing={2}>
        {worksData.map((data: object) => {
          console.log(data);
          return (
            <Grid item sm={12} lg={6}>
              <Work {...data} />
            </Grid>
          );
        })}
      </Grid>
    </WorksWrap>
  );
};
