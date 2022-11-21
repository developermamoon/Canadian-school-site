import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../../Images/Home-page/banner1.png'
import banner2 from '../../../Images/Home-page/Banner2.png'
import banner3 from '../../../Images/Home-page/Banner3.png'
import { Button } from 'react-bootstrap';
import './CarouselSlider.css'

const CarouselSlider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>High School (Grade 9-12)</h3>
                        <p>Ontario Secondary School Diploma (OSSD) Certificate.</p>
                        <Button variant="warning">Learn More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>English as a Second Language (ESL)</h3>
                        <p>Learn English as a Second Language - TOEFL, IELTS, GRE, SAT, PTE, GMAT, GED</p>
                        <Button variant="warning">Learn More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>NIST Hybrid Curriculum (NHC)</h3>
                        <p>
                            Canadian School Board Curriculum, Sustainabiliry, Robotics and Cognitive Skill Development.
                        </p>
                        <Button variant="warning">Learn More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselSlider;