import React from "react";
import PortfolioCard from "../components/portfolioCard";
import projects from "../assets/projects.js";
import { Grid } from '@material-ui/core';

export default function Portfolio() {
    return (
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={3}>
            {projects.map(project => <PortfolioCard {...project} />)}
        </Grid>
    )
}


