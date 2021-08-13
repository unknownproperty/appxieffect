import React from 'react';

import { CircularProgress, Grid, Typography, makeStyles, useTheme } from '@material-ui/core';

import { inject, observer } from 'mobx-react'

import Image from 'next/image'
import Toolbar from './Pages/Toolbar';
import DataList from './Pages/DataList';
// import Chipper from './Modules/Chipper';
// import ModulesList from './Modules/ModulesList';

const useStyles = makeStyles((theme) => ({
    gridToolbar: {
        marginTop: 16,
    }
}));


const Pages = inject('store')(observer(({ store }) => {
    const classes = useStyles();
    const theme = useTheme();


    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
        >
            <Grid>
                <Typography variant="h5"> Управление контентом  </Typography>
            </Grid>
            <Grid className={classes.gridToolbar}>
                <Toolbar />
            </Grid>
            <DataList />
        </Grid>
    )
}));


export default Pages;