import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Project from "./Project";
import "../styles/ProjectList.css";

const ProjectList = ({ list, fromRef, toRef }) => (
    <Container className="ProjectList" maxWidth="md" ref={fromRef}>
        <Grid container spacing={3}>
            {list.map((p) => (
                <Grid key={p.id} id={p.id} item lg={6} md={6} sm={6} xs={12}>
                    <Project {...p} toRef={toRef} />
                </Grid>
            ))}
        </Grid>
    </Container>
);

export default ProjectList;
