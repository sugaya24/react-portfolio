import React from 'react';
import { Button, Hidden, Paper, Theme, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { createStyles, makeStyles } from '@material-ui/styles';
import color from '../const/color';

const WorkWrap = styled.div`
  /* border: 1px solid gray; */
`;
const WorkImage = styled.img`
  width: 100%;
  margin: 20px 0;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    workImageContainer: {
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        '&:hover .workImage': {
          opacity: 0.4,
        },
        '&:hover .middle': {
          opacity: 1,
        },
      },
    },
    workImage: {
      opacity: 1,
      display: 'block',
      width: '100%',
      height: 'auto',
      transition: '.5s ease',
      backfaceVisibility: 'hidden',
    },
    middle: {
      transition: '.5s ease',
      opacity: 0,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'Translate(-50%,-50%)',
      textAlign: 'center',
    },
    linkButton: {
      margin: theme.spacing(1),
      textTransform: 'none',
    },
  })
);

export const Work: React.FC = (props: any) => {
  const {
    id,
    projectName,
    projectImageUrl,
    description,
    devIcons,
    projectUrl,
    repositoryUrl,
  } = props;

  const classes = useStyles();

  return (
    <WorkWrap>
      <Paper elevation={0}>
        <div className={classes.workImageContainer}>
          <WorkImage
            className={`${classes.workImage}` + ' ' + 'workImage'}
            src={projectImageUrl}
          ></WorkImage>
          <Hidden smDown>
            <div className={`${classes.middle}` + ' ' + 'middle'}>
              <Button
                className={classes.linkButton}
                href={repositoryUrl}
                variant="contained"
              >
                GitHub
              </Button>
              <Button
                className={classes.linkButton}
                href={projectUrl}
                variant="contained"
              >
                Demo
              </Button>
            </div>
          </Hidden>
        </div>
        <Typography variant="h5">{projectName}</Typography>
        <Typography variant="caption">{description}</Typography>
        <Hidden mdUp>
          <div>
            <Button
              className={classes.linkButton}
              href={repositoryUrl}
              variant="outlined"
            >
              GitHub
            </Button>
            <Button
              className={classes.linkButton}
              href={projectUrl}
              variant="outlined"
            >
              Demo
            </Button>
          </div>
        </Hidden>
      </Paper>
    </WorkWrap>
  );
};
