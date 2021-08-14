import React, { useEffect } from 'react';
import clsx from 'clsx';

import { Chip, Divider, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Popper, ClickAwayListener, Paper, MenuItem, MenuList, IconButton, Button, Grid, InputBase, Typography, makeStyles, useTheme } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { inject, observer } from 'mobx-react'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        marginLeft: 32,
        marginRight: 32,
        width: "calc(100% - 64px)",
        borderRadius: 4,
        background: theme.palette.blueGrey["1"],
    },

    divider: {
        backgroundColor: theme.palette.primary.contrastText
    },
    input: {
        color: theme.palette.primary.contrastText,
        marginLeft: theme.spacing(1),
        flex: 1,
        // minWidth: 100,
        maxWidth: 200,
    },
    iconButton: {
        padding: 10,
    },
    popper: {
        zIndex: 1000,
        //position: 'fixed',
    },
    popperPaper: {
        zIndex: 1000,
        minWidth: 200,
        backgroundColor: theme.palette.blueGrey["6"]
    },
    popperPaperGrid: {
        padding: 8,
    }
}));

const Chipper = inject('store')(observer(({ dataType, setDataType, setSize, store, loadingMoreCourses }) => {
    const classes = useStyles();
    const theme = useTheme()
    const [open, setOpen] = React.useState(false);

    const [serchValue, setSearchValue] = React.useState("")

    const [openMenu, setOpenMenu] = React.useState(null)

    //const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setDataType(event.target.value);
        if (event.target.value === "list") setSize({
            md: 6,
            lg: 4,
            xl: 3,
        })
        if (event.target.value === "grid") setSize({
            md: 12,
            lg: 12,
            xl: 12,
        })
        //console.log("dataType", dataType)
    };

    return (
        <Grid container direction="column" className={classes.root}>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                <ClickAwayListener onClickAway={() => setOpenMenu(null)}>
                    <IconButton onClick={(event) => setOpenMenu(openMenu ? null : event.currentTarget)} className={classes.iconButton} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </ClickAwayListener>
                <Popper className={classes.popper} id={undefined} open={Boolean(openMenu)} anchorEl={openMenu}>
                    <Paper className={classes.popperPaper}>
                        <Grid
                            className={classes.popperPaperGrid}
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Вид</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={dataType} onChange={handleChange}>
                                    <FormControlLabel value="list" control={<Radio color="primary" />} label="Сетка" />
                                    <FormControlLabel value="grid" control={<Radio color="primary" />} label="Список" />
                                </RadioGroup>
                            </FormControl>

                        </Grid>

                    </Paper>
                </Popper>
                <InputBase
                    value={serchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    className={classes.input}
                    placeholder="Поиск страниц"
                    inputProps={{ 'aria-label': 'Поиск страниц' }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Grid>
            <Divider className={classes.divider} />
        </Grid>
    )
}));

export default Chipper;