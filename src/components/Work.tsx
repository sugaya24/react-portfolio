import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

const WorkWrap = styled.div`
  /* border: 1px solid gray; */
`;
const WorkImage = styled.img`
  width: 100%;
  margin: 20px 0;
`;

export const Work: React.FC = (props: any) => {
  const { id, projectName, projectImageUrl, description, devIcons } = props;
  return (
    <WorkWrap>
      <Paper elevation={0}>
        <WorkImage src={projectImageUrl}></WorkImage>
        <Typography variant="h5">{projectName}</Typography>
        <Typography variant="caption">{description}</Typography>
      </Paper>
    </WorkWrap>
  );
};
