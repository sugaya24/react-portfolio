import React from 'react';
import styled from 'styled-components';
import color from '../const/color';

import { Icon, Theme, Typography } from '@material-ui/core';
// @ts-ignore
import { makeStyles, createStyles } from '@material-ui/styles';
import { LinkedIn, GitHub, Description } from '@material-ui/icons';

const ContactWrap = styled.div`
  width: 960px;
  margin: 0 auto;
  text-align: center;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      marginBottom: theme.spacing(4),
    },
    icon: {
      marginRight: theme.spacing(1),
    },
    link: {
      color: color.PRIMARY_TEXT,
      'text-decoration': 'none',
      '&:hover': {
        'text-decoration': 'underline',
      },
    },
  })
);

export const Contact: React.FC = () => {
  const classes = useStyles();
  const links = [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/yukisugaya/',
      icon: <LinkedIn />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sugaya24',
      icon: <GitHub />,
    },
    {
      name: 'Resume',
      url:
        'https://docs.google.com/document/d/1l_A6gOWWpp_sb9BMtj42Wz4LBzcXWK06zB_LLY84u5A/edit?usp=sharing',
      icon: <Description />,
    },
  ];

  return (
    <ContactWrap>
      {links.map((item) => (
        <Typography className={classes.header} variant="h4">
          <span className={classes.icon}>{item.icon}</span>
          <a href={item.url} className={classes.link}>
            {item.name}
          </a>
        </Typography>
      ))}
    </ContactWrap>
  );
};
