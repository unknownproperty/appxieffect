import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react';
import { Divider, Box, Grid, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

import { inject, observer } from 'mobx-react'
import NavigationAll from './../components/OtherComponents/Navigation/NavigationAll'
//import Background from './../components/OtherComponents/Background/Background'
//import QuiсkButtons from './../components/PagesComponents/Main/QuiсkButtons';
//import QuiсkWidgets from '../components/PagesComponents/Main/QuiсkWidgets';
import Card1 from './../components/PagesComponents/Main/MainHelpApps/Card1';
import Card2 from './../components/PagesComponents/Main/MainHelpApps/Card2';
import Card3 from './../components/PagesComponents/Main/MainHelpApps/Card3';
import Card4 from './../components/PagesComponents/Main/MainHelpApps/Card4';
import Card5 from './../components/PagesComponents/Main/MainHelpApps/Card5';
import Card6 from './../components/PagesComponents/Main/MainHelpApps/Card6';
import Card7 from './../components/PagesComponents/Main/MainHelpApps/Card7';


const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    //minHeight: '100vh',
    zIndex: 1,
  },
  space: {
    width: '100%',
    height: "100px",
  }
}));

const Home = inject('rootStore')(observer(({ rootStore }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>
          Ξ Effect
        </title>
      </Head>
      {/* <Background /> */}
      <NavigationAll>
        <Grid container className={classes.main}>
          <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container>
            <Card1 />
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container>
            <Card2 />
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container>
            <Card3 />
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container>
            <Card4 />
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container>
            <Card5 />
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container>
            <Card6 />
          </Grid>
          {/* <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container>
            <Card7 />
          </Grid> */}
          {/* <Grid item>
            <QuiсkButtons />
          </Grid> */}
          {/* <Grid item>
            <QuiсkWidgets />
          </Grid> */}
          <Box className={classes.space}>

          </Box>
        </Grid>
      </NavigationAll>

    </>
  );
}))

export default Home