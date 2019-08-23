import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    nameButton: {
        background: "transparent",
        border: "none",
        color: "white"
    },
    whiteText: {
        color: "white"
    }
});

function LandingPage(props) {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ height: "100vh" }}
        >
            <Grid item xl={12} size="large">
                <Typography
                    variant="h1"
                    component="button"
                    className={classes.nameButton}
                    onClick={() => props.handlePageChange("HomeMenu")}>
                    Danny Kimble
                </Typography>
            </Grid>
            <Grid item xl={12} className={classes.whiteText}>
                <p>Full-Stack Developer</p>
            </Grid>
            <Grid item xl={12} className={classes.whiteText}>
                <p>Click my name</p>
            </Grid>
        </Grid >
    )
}

export default LandingPage;