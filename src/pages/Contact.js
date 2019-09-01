import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    contactPaper: {
        fontSize: "1.25rem",
        padding: theme.spacing(3, 2),
        height: "100%",
        background: "#262626"
    },
    myText: {
        fontSize: "1.25rem",
        color: "#dcdcdc"
    },
    myLink: {
        fontSize: "1.5rem",
        color: "#dcdcdc"
    },
    myHeader: {
        fontSize: "2rem",
        color: "#f5f5f5"
    }
}));
const Contact = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                spacing={6}
                style={{ height: "400px" }}>
                <Grid item md={6} style={{ height: "50%" }}>
                    <Paper className={classes.contactPaper}>
                        <Typography className={classes.myHeader} variant="h5" component="h3">
                            My Contact Info:
                        </Typography>
                        <Typography className={classes.myText} component="p">
                            Email: dannykimble@me.com
                        </Typography>
                        <Typography className={classes.myText} component="p">
                            Phone: (503) 740-4619
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item md={6} style={{ height: "50%" }}>
                    <Paper className={classes.contactPaper}>
                        <Typography className={classes.myHeader} variant="h5" component="h3">
                            My Links:
                        </Typography>
                        <Typography className={classes.myLink} component="p">
                            <Typography component="a" href="https://www.linkedin.com/in/danny-kimble-76b489183/" target="_blank">
                                Linkedin: <i class="fab fa-linkedin"></i>
                            </Typography>
                        </Typography>
                        <Typography className={classes.myLink} component="p">
                            <Typography component="a" href="https://github.com/KimblesAndBits" target="_blank">
                                GitHub: <i class="fab fa-github"></i>
                            </Typography>
                        </Typography>
                        <Typography className={classes.myLink} component="p">
                            <Typography component="a" href="https://docs.google.com/document/d/1poaR7-oevSE2yLrRXEmWJq2nddTqh7wP_bkQL7AsEKI/edit?usp=sharing" target="_blank">
                                Resume: <i class="fas fa-file"></i>
                            </Typography>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div >
    )
}

export default Contact;