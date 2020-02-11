import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    CardMedia,
    Paper
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    myImage: {
        borderRadius: 500
    },
    myText: {
        fontSize: "1.25rem",
        padding: theme.spacing(3, 2),
        background: "#262626",
        color: "#dcdcdc"
    }
}));

export default function About() {
    const classes = useStyles();

    return (
        <Container xs="lg">
            <Grid container spacing={3}>
                <Grid item sm={4}>
                    <CardMedia
                        className={classes.myImage}
                        component="img"
                        alt="Danny Kimble"
                        height="auto"
                        image={require("../images/me.jpg")}
                        title="Danny Kimble" />
                </Grid>
                <Grid item sm={8}>
                    <Paper className={classes.myText}>
                        <p>My name is Danny Kimble. I am a certified Full Stack Developer who has completed the University of Oregon Coding Bootcamp. I am also currently studying Computer Science at Portland Community College (PCC) and have been since the fall of 2018. I love computers and I love coding. One of my favorite things about this line of work is learning and implementing new technologies.</p>
                        <p>I started attending PCC while I was employed full time with the United States Postal Service. Once the Bootcamp began I quit my job, but maintained my status as a full time student at PCC while also taking on all the duties of a stay at home dad. I'm not afraid to work hard in any arena and I can handle pressure from multiple different angles simultaneously. I learn fast and I would make an excellent addition to any team. Take a look at my portfolio!</p>
                        <p>Technical Skills: HTML, CSS, JavaScript, Node, Express, MySQL, Sequelize, MongoDB, Mongoose, React, Redux, JQuery, Handlebars, GitHub, Git, Slack</p>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}