import { Button, makeStyles, Paper } from '@material-ui/core'
import React from 'react'

const navLists = [
  'about', 
  'characteristics', 
  'installation', 
  'team Members', 
  'license'
];

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  button: {
    fontSize: theme.typography.h6.fontSize,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  }
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <Paper
      className={classes.root}
      elevation={1}
    >
      {navLists.map((item) => (
        <Button
          className={classes.button}
          key={item}
          href={`#${item.replace(' ', '')}`}
          variant='text'
          size='large'
        >
          {item}
        </Button>
      ))}
    </Paper>
  )
}
