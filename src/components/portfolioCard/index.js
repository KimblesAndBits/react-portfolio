import React from "react";
import {
    Grid,
    CardMedia,
    Paper,
    Typography
} from '@material-ui/core';

export default function PortfolioCard(props) {
    return (
        <Grid item md={4}>
            <Paper style={{ textAlign: "center", height: "350px" }}>
                <CardMedia
                    component="img"
                    alt={props.name}
                    height="auto"
                    image={props.image}
                    title={props.name} />
                <span>&emsp;</span>
                <Typography variant="h5" component="p">
                    {props.name}
                </Typography>
                <Typography component="p">
                    {props.description}
                </Typography>
                <Typography component="a" href={props.git} target="_blank">
                    <i class="fab fa-github-square"></i>
                </Typography>
                <span>&emsp;</span>
                <Typography component="a" href={props.link} target="_blank">
                    <i class="far fa-window-maximize"></i>
                </Typography>
            </Paper>
        </Grid>
    )
}