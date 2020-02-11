import React from "react";
import { CardMedia, Grid, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pageImage: {
        borderRadius: 45
    },
    pageText: {
        background: "rgba(38, 38, 38, 0.5)",
        borderRadius: 5,
        position: "relative",
        bottom: "125px",
        color: "#f5f5f5",
        fontSize: "2rem",
        width: "auto",
        textAlign: "center"
    }
});

function PageCards({ image, name, handlePageChange, time }) {
    const classes = useStyles();
    const zoom = true;

    return (
        <Grid item sm={4} className="pages">
            <Zoom in={zoom} timeout={750} style={{ transitionDelay: time }}>
                <CardMedia
                    className={classes.pageImage}
                    onClick={() => handlePageChange(name)}
                    component="img"
                    alt={name}
                    height="auto"
                    image={image}
                    title={name} />
            </Zoom>
            <Zoom in={zoom} style={{ transitionDelay: time + 750}}>
                <p className={classes.pageText}>{name}</p>
            </Zoom>
        </Grid>
    )
}

export default PageCards;