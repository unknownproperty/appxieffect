import React, { useEffect } from 'react';
import clsx from 'clsx';

import { Chip, Divider, Button, Grid, Typography, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

import TuneIcon from '@material-ui/icons/Tune';

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
    gridChip: {
        marginLeft: '6px',
        marginTop: '8px',
        cursor: 'pointer',
    },
    chip: {
        border: '2px solid',
        borderColor: theme.palette.primary.contrastText,
        cursor: 'pointer',
        backgroundColor: "rgb(0,0,0, .0)",
        '&:hover': {
            backgroundColor: "rgb(0,0,0, .0)"
        }
    },
    chipClicked: {
        borderColor: theme.palette.primary.light,
        '&:hover': {
            borderColor: theme.palette.primary.light,
        }
    },
    chipTypography: {
        fontSize: 18,
        cursor: 'pointer',
    },
    chipTypographyTheme: {
        fontSize: 16,
        cursor: 'pointer',
    },
    chipTypographyClicked: {
        color: theme.palette.primary.main,

    },
    chipTypographyNotClicked: {
        color: theme.palette.primary.contrastText,
    },
    labelTypography: {
        paddingRight: 4,
        fontSize: 18,
        color: theme.palette.primary.contrastText,
    },
    labelTypographyAccept: {
        paddingRight: 4,
        fontSize: 16,
    },
    icons: {
        color: theme.palette.primary.contrastText,

    },
    filterColumn: {
        width: 'auto',
        paddingLeft: 8,
        paddingRight: 8,
    },
    labelFilterColumn: {
        paddingTop: 16,
        paddingLeft: 12,
        fontSize: 20,
        color: theme.palette.primary.contrastText,
    },
    gridFilters: {
        marginTop: 0,
        marginBottom: 8,
    },
    gridLabelTypographyAccept: {
        paddingTop: 8,
        paddingLeft: 8,
        paddingBottom: 8,
    },
    formControl: {
        marginBottom: 4,
    },
    typographyInputLabel: {
        color: theme.palette.primary.contrastText,
    },
    applyButton: {
        marginLeft: 8,
        marginTop: 8,
        marginBottom: 8,
    },
    divider: {
        backgroundColor: theme.palette.primary.contrastText
    }

}));

const Chipper = inject('store')(observer(({ store, loadingMoreCourses }) => {
    const classes = useStyles();
    const theme = useTheme()
    const [open, setOpen] = React.useState(false);

    const globalList = [
        { key: 0, title: "??????????????????", name: "starred" },
        { key: 1, title: "????????????????????????", name: "pinned" },
        { key: 2, title: "??????????????", name: "started" },
    ]
    const [globalListActive, setGlobalListActive] = React.useState(null)

    const categoryList = [
        { key: 0, title: "?????????????? ??????????", name: "middle-school" },
        { key: 1, title: "???????????????? ??????????", name: "main-school" },
        { key: 2, title: "???????????? ??????????", name: "high-school" },
        { key: 3, title: "???????????? ??????????????????????", name: "university" },
        { key: 4, title: "????????????", name: "clubs" },
        { key: 5, title: "??????????", name: "hobby" },
        { key: 6, title: "??????", name: "bne" },
        { key: 7, title: "??????", name: "une" },
        { key: 8, title: "???????????????????????????????? ????????????", name: "prof-skills" },
    ]
    const [categoryListActive, setCategoryListActive] = React.useState(null)

    const themeList = [
        { key: 0, title: "????????????????????", name: "math" },
        { key: 1, title: "??????????????", name: "algebra" },
        { key: 2, title: "??????????????????", name: "geometry" },
        { key: 3, title: "??????????", name: "languages" },
        { key: 4, title: "????????????", name: "physics" },
        { key: 5, title: "??????????", name: "chemistry" },
        { key: 6, title: "????????????????", name: "biology" },
        { key: 7, title: "??????????????????", name: "geography" },
        { key: 8, title: "??????????????", name: "history" },
        { key: 9, title: "????????????????????????????", name: "social-science" },
        { key: 10, title: "??????????????????", name: "arts" },
        { key: 11, title: "??????????????????????", name: "informatics" },
        { key: 12, title: "????????????????????", name: "literature" },
        { key: 13, title: "??????????????????", name: "philosophy" },
    ]
    const [themeListActive, setThemeListActive] = React.useState(null)

    const difficultyList = [
        { key: 0, title: "????????????????", name: "review" },
        { key: 1, title: "??????????????", name: "newbie" },
        { key: 2, title: "????????????????", name: "amateur" },
        { key: 3, title: "??????????????????", name: "enthusiast" },
        { key: 4, title: "??????????", name: "professional" },
        { key: 5, title: "??????????????", name: "expert" },
    ]
    const [difficultyListActive, setDifficultyListActive] = React.useState(null)

    const sortList = [
        { key: 0, title: "???? ????????????????????????", clicked: true, name: "popularity" },
        { key: 1, title: "???? ???????? ??????????????????: ?????????????? ????????????????", clicked: false, name: "visit-date" },
        { key: 2, title: "???? ???????? ????????????????: ?????????????? ??????????", clicked: false, name: "creation-date" },
    ]
    const [sortListActive, setSortListActive] = React.useState(0)

    useEffect(() => {
        store.fetchDataScr(`${store.url}/filters/`, "GET")
            .then((data) => {
                console.log("filtersI:", data)
                // if (data != undefined) {
                //     store.setFiltersGlobal(data)
                //     if (!store.allLoading) store.loadingMoreCourses()
                // }
            });

    }, [store]);

    const clickedLoadingCourses = () => {
        let filters = {
            "filters": {
                
            },
            "sort": "popularity",
            "counter": 0
        }

        if (globalListActive != null) filters.filters.global = globalList[globalListActive].name
        if (difficultyListActive != null) filters.filters.difficulty = difficultyList[difficultyListActive].name
        if (categoryListActive != null) filters.filters.category = categoryList[categoryListActive].name
        if (themeListActive != null) filters.filters.theme = themeList[themeListActive].name
        if (sortListActive != null)  filters.sort = sortList[sortListActive].name
        store.setFilters(filters)
        store.clearCoursesList()
        store.loadingMoreCourses()
        store.setAllLoading(false)
    }



    return (
        <Grid container direction="column" className={classes.root}>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                <Button onClick={() => setOpen(!open)}>
                    <Typography className={classes.labelTypography}> ?????????????? </Typography>
                    <TuneIcon className={classes.icons} />
                </Button>

                {open && <Button color="primary" className={classes.applyButton} variant="contained" onClick={clickedLoadingCourses}>
                    <Typography className={classes.labelTypographyAccept}> ?????????????????? </Typography>
                </Button>}
            </Grid>
            {open && <Divider />}
            {open && <Grid
                item
                className={classes.gridFilters}
                container
                direction="row"
            >
                <Grid
                    item
                    className={classes.filterColumn}
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Typography className={classes.labelFilterColumn}> ????????????????????: </Typography>
                    {globalList.map((chip) => (
                        <Grid className={classes.gridChip} key={chip.key}>
                            <Chip
                                clickable={false}
                                className={clsx(classes.chip, {
                                    [classes.chipClicked]: chip.key === globalListActive,
                                })}
                                onClick={() => setGlobalListActive(chip.key === globalListActive ? null : chip.key)}
                                label={
                                    <Typography
                                        className={clsx(classes.chipTypography, {
                                            [classes.chipTypographyClicked]: chip.key === globalListActive,
                                            [classes.chipTypographyNotClicked]: !(chip.key === globalListActive),
                                        })}

                                    >
                                        {chip.title}
                                    </Typography>} />
                        </Grid>
                    ))}
                </Grid>
                <Grid
                    item
                    className={classes.filterColumn}
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Typography className={classes.labelFilterColumn}> ???? ??????????????????: </Typography>
                    {categoryList.map((chip) => (
                        <Grid className={classes.gridChip} key={chip.key}>
                            <Chip
                                clickable={false}
                                className={clsx(classes.chip, {
                                    [classes.chipClicked]: chip.key === categoryListActive,
                                })}
                                onClick={() => setCategoryListActive(chip.key === categoryListActive ? null : chip.key)}
                                label={
                                    <Typography
                                        className={clsx(classes.chipTypography, {
                                            [classes.chipTypographyClicked]: chip.key === categoryListActive,
                                            [classes.chipTypographyNotClicked]: !(chip.key === categoryListActive),
                                        })}

                                    >
                                        {chip.title}
                                    </Typography>} />
                        </Grid>
                    ))}
                </Grid>
                <Grid
                    item
                    className={classes.filterColumn}
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Typography className={classes.labelFilterColumn}> ???? ????????: </Typography>
                    {themeList.map((chip) => (
                        <Grid className={classes.gridChip} key={chip.key}>
                            <Chip
                                clickable={false}
                                className={clsx(classes.chip, {
                                    [classes.chipClicked]: chip.key === themeListActive,
                                })}
                                onClick={() => setThemeListActive(chip.key === themeListActive ? null : chip.key)}
                                label={
                                    <Typography
                                        className={clsx(classes.chipTypographyTheme, {
                                            [classes.chipTypographyClicked]: chip.key === themeListActive,
                                            [classes.chipTypographyNotClicked]: !(chip.key === themeListActive),
                                        })}

                                    >
                                        {chip.title}
                                    </Typography>} />
                        </Grid>
                    ))}
                </Grid>
                <Grid
                    item
                    className={classes.filterColumn}
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Typography className={classes.labelFilterColumn}> ???? ??????????????????: </Typography>
                    {difficultyList.map((chip) => (
                        <Grid className={classes.gridChip} key={chip.key}>
                            <Chip
                                clickable={false}
                                className={clsx(classes.chip, {
                                    [classes.chipClicked]: chip.key === difficultyListActive,
                                })}
                                onClick={() => setDifficultyListActive(chip.key === difficultyListActive ? null : chip.key)}
                                label={
                                    <Typography
                                        className={clsx(classes.chipTypography, {
                                            [classes.chipTypographyClicked]: chip.key === difficultyListActive,
                                            [classes.chipTypographyNotClicked]: !(chip.key === difficultyListActive),
                                        })}

                                    >
                                        {chip.title}
                                    </Typography>} />
                        </Grid>
                    ))}
                </Grid>
                <Grid
                    item
                    className={classes.filterColumn}
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Typography className={classes.labelFilterColumn}> ????????????????????: </Typography>
                    {sortList.map((chip) => (
                        <Grid className={classes.gridChip} key={chip.key}>
                            <Chip
                                clickable={false}
                                className={clsx(classes.chip, {
                                    [classes.chipClicked]: chip.key === sortListActive,
                                })}
                                onClick={() => setSortListActive(chip.key)}
                                label={
                                    <Typography
                                        className={clsx(classes.chipTypography, {
                                            [classes.chipTypographyClicked]: chip.key === sortListActive,
                                            [classes.chipTypographyNotClicked]: !(chip.key === sortListActive),
                                        })}
                                    >
                                        {chip.title}
                                    </Typography>} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>}
            <Divider className={classes.divider} />
        </Grid>
    )
}));

export default Chipper;