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
                <Grid item md={4}>
                    <CardMedia
                        className={classes.myImage}
                        component="img"
                        alt="Danny Kimble"
                        height="auto"
                        image={require("../images/me.jpg")}
                        title="Danny Kimble" />
                </Grid>
                <Grid item md={8}>
                    <Paper className={classes.myText}>
                        <p>My name is Danny Kimble. I am a Full Stack Developer who has completed the University of Oregon Coding Bootcamp. I am also currently studying Computer Science at Portland Community College and have been since the fall of 2018. I love computers and I love coding. Thank you for reading!</p>
                        <p>I am also married to a wonderful woman, Kimberly - a birth photographer, and together we have three kids. Ellery is an 11 year old girl, Linkyn is a 4 year old boy and Maxwell is a 2 year old boy. Ellery is interested in art and animals. Linkyn was named after Link from the Legend of Zelda (we call him Link too) and he loves Super Mario. Maxwell refuses to talk even though he clearly understands us.</p>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}