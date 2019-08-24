import React from "react";
import { CardMedia, Grid, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pageImage: {
        borderRadius: 45
    },
    pageText: {
        background: "rgba(90, 105, 125, 0.5)",
        borderRadius: 5,
        position: "relative",
        bottom: "125px",
        color: "white",
        fontSize: "2rem",
        width: "auto",
        textAlign: "center"
    }
});

function PageCards({ image, name, handlePageChange, time }) {
    const classes = useStyles();
    const zoom = true;

    return (
        <Grid item md={4} className="pages">
            <Zoom in={zoom} timeout={750} style={{ transitionDelay: time }}>
                <CardMedia
                    className={classes.pageImage}
                    onClick={() => handlePageChange(name)}
                    component="img"
                    alt={name}
                    height="auto"
                    image={image}
                    title={name}
                    boxShadow = {3} />
            </Zoom>
            <Zoom in={zoom} style={{ transitionDelay: time + 750}}>
                <p className={classes.pageText}>{name}</p>
            </Zoom>
        </Grid>
    )
}

export default PageCards;