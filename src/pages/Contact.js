import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    myText: {
        fontSize: "1.25rem",
        padding: theme.spacing(3, 2),
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
                spacing={3}>
                <Grid item md={6}>
                    <Paper className={classes.myText} style={{ height: "100%" }}>
                        <Typography variant="h5" component="h3">
                            My Contact Info:
                        </Typography>
                        <Typography component="p">
                            Email: dannykimble@me.com
                        </Typography>
                        <Typography component="p">
                            Phone: (503) 740-4619
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item md={6} style={{ height: "100%" }}>
                    <Paper className={classes.myText} style={{ height: "100%" }}>
                        <Typography variant="h5" component="h3">
                            My Links:
                        </Typography>
                        <Typography component="p">
                            <Typography component="a" href="https://www.linkedin.com/in/danny-kimble-76b489183/" target="_blank">
                                Linkedin: <i class="fab fa-linkedin"></i>
                            </Typography>
                        </Typography>
                        <Typography component="p">
                            <Typography component="a" href="https://github.com/KimblesAndBits" target="_blank">
                                GitHub: <i class="fab fa-github"></i>
                            </Typography>
                        </Typography>
                        <Typography component="p">
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