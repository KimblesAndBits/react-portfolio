import React from "react";
import {
    Grid,
    CardMedia,
    Paper,
    Typography
} from '@material-ui/core';

export default function PortfolioCard(props) {
    return (
        <Grid item sm={4}>
            <Paper style={{ textAlign: "center", minHeight: "375px", background: "#262626" }}>
                <CardMedia
                    component="img"
                    alt={props.name}
                    height="auto"
                    image={props.image}
                    title={props.name} />
                <span>&emsp;</span>
                <Typography variant="h5" component="p" style={{ color: "#f5f5f5" }}>
                    {props.name}
                </Typography>
                <Typography component="p" style={{ color: "#dcdcdc" }}>
                    {props.description}
                </Typography>
                <Typography component="a" href={props.git} target="_blank" style={{ color: "#dcdcdc" }}>
                    <i className="fab fa-github-square"></i>
                </Typography>
                <span>&emsp;</span>
                <Typography component="a" href={props.link} target="_blank" style={{ color: "#dcdcdc" }}>
                    <i className="far fa-window-maximize"></i>
                </Typography>
            </Paper>
        </Grid>
    )
}