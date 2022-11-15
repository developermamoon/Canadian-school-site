import React from 'react';
import { Link } from 'react-router-dom';
import './SecondCarouselPart.css'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../Images/image1.png'
import car1 from '../../../Images/car1.png'
import car2 from '../../../Images/car2.png'
import car3 from '../../../Images/car3.png'
import car4 from '../../../Images/car4.png'
import car5 from '../../../Images/car5.png'
import car6 from '../../../Images/car6.png'

const SecondCarouselPart = () => {
    return (
        <div>
            <div className="container">

                <div className="row row-cols-1 row-cols-md-2 row-1 mt-5">

                    <div className="col col-md-7">
                        <Link to='/'><img className='w-100' src={image1} alt="" /></Link>
                    </div>

                    <div className="col col-md-5 d-flex align-items-center mt-3 mt-md-0">
                        <div className=''>
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={car1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={car2}
                                        alt="Second slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={car3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={car4}
                                        alt="Fourth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={car5}
                                        alt="Fifth slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={car6}
                                        alt="Six slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondCarouselPart;