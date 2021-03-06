import React from "react";

import logo from "../images/logo.svg";
import WavesContainer from "./BackgrounWaves";

import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/Header.styles";
// import { animateScroll as scroll } from "react-scroll";

const Main = ({ classes, cakeresume, toRef }) => {
    const handleClick = () =>
        window.scrollTo({
            left: 0,
            top: toRef.current.offsetTop - 100,
            behavior: "smooth",
        });

    return (
        <div className={classes.root}>
            <Container maxWidth="sm">
                <div className={classes.header}>
                    <img src={logo} className={classes.logo} alt="logo" />
                    <h3>Welcome to Hitz's React portfolio.</h3>
                    <span>
                        Hitz Huang is a web/app developer. To demostrate some
                        front-end stills, this website is made using Reactjs
                        with some experimental showcases learned online, such as
                        Udemy.
                        <br />
                        <br />
                        If you have any question or would be insterested, please
                        contact him at{" "}
                        <a
                            href={cakeresume}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CakeResume.
                        </a>
                    </span>
                </div>
                <Button className={classes.exploreBtn} onClick={handleClick}>
                    Explore
                </Button>
            </Container>
            <WavesContainer />
        </div>
    );
};

export default withStyles(styles)(Main);
