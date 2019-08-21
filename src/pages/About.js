import React from "react";
import { Col, Image } from "react-bootstrap";

const About = () => {
    return (
        <div className="row about-me-info">
            <Col md={4}>
                <Image src="/image/me.png" rounded />
            </Col>
            <Col md={8}>
                <p>My name is Danny Kimble. I am married to a wonderful woman, Kimberly - a birth photographer, and together we have three kids. Ellery is an 11 year old girl, Linkyn is a 4 year old boy and Maxwell is a 2 year old boy. Ellery is interested in art and animals. Linkyn was named after Link from the Legend of Zelda (we call him Link too) and he loves Super Mario. Maxwell refuses to talk even though he clearly understands us.</p>
                <p>I am a Full Stack Developer who completed the University of Oregon Coding Bootcamp. I am also currently studying Computer Science at Portland Community College since the fall of 2018. I love computers and I love coding. Thank you for reading</p>
            </Col>
        </div>
    )
}

export default About;