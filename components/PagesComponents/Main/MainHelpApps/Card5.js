import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { inject, observer } from 'mobx-react'
import Image from 'next/image'
import { useSwipeable } from 'react-swipeable';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 16,
        width: 'calc(100% - 32px)',
        height: '450px',
    },
    mainLabel: {
        fontSize: 20,
        marginLeft: 52,
        color: theme.palette.primary.contrastText,
    },
    content: {
        //width: '100%',
        height: '350px',
        borderRadius: 64,
        backgroundColor: theme.palette.blueGrey["5"],
        //border: `${theme.main.palette.content.border} solid 2px`,
    },
    gridPagination: {
        marginTop: 8,
    },
    PaginationItem: {
        color: theme.palette.primary.contrastText,
    },
    labelContent: {
        margin: 16,
    }
}));

const Card5 = inject('store')(observer((props) => {
    const classes = useStyles();
    const theme = useTheme();

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    const config = {
        delta: 10,
    }

    const handlers = useSwipeable({
        onSwipedLeft: (eventData) => {
            if (page === 1) return setPage(2);
            if (page === 2) return setPage(3);
            if (page === 3) return setPage(4);
            if (page === 4) return setPage(5);
            //console.log("User Swiped!", eventData)
        },
        onSwipedRight: (eventData) => {
            if (page === 5) return setPage(4);
            if (page === 4) return setPage(3);
            if (page === 3) return setPage(2);
            if (page === 2) return setPage(1);
            //console.log("User Swiped!", eventData)
        },
        ...config,
    });

    return (
        <Grid
            {...handlers}
            className={classes.root}
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
        >
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                <Typography className={classes.mainLabel}> Что, если возникла ошибка на сайте? </Typography>
            </Grid>
            <Grid
                className={classes.content}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {page == 1 && <div className={classes.background}>
                    <Image
                        alt="HowFiltersWork"
                        src="/illustrations/HowFiltersWork.png"
                        //layout="fill"
                        width={350}
                        height={350}
                    //objectFit="cover"
                    //quality={100}
                    />
                </div>}
                {page == 2 && <Typography align="center" className={classes.labelContent}> {"Все настройки доступны в соответствующем пункте меню, он отмечен шестерёнкой. Здесь собраны как настройки аккаунта, так и внешнего вида сайта. Настройки внешнего вида сохраняются автоматически."} </Typography>}
                {page == 3 && <Typography align="center" className={classes.labelContent}> {"Будьте осторожны с изменением почты и пароля. Кроме того, не доверяйте пароль от аккаунта или доступ к почте посторонним. Если вы забудете пароль, его восстановление возможно только через привязанную к аккаунту почту."} </Typography>}
            </Grid>
            <Grid
                className={classes.gridPagination}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Pagination
                    renderItem={(item) => <PaginationItem className={classes.PaginationItem} {...item} />}
                    shape="rounded"
                    size="large"
                    count={3}
                    page={page}
                    onChange={handleChange} />
            </Grid>

        </Grid>
    )

}))

export default Card5