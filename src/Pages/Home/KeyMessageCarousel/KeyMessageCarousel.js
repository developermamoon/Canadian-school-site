import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import person1 from '../../../Images/Home-page/person/man2.jpg'
import person2 from '../../../Images/Home-page/person/man3.jpg'
import person3 from '../../../Images/Home-page/person/man4.jpg'
import './KeyMessageCarousel.css'

const KeyMessageCarousel = () => {
    return (
        <div className='container key-message'>
            <Carousel className='message-carousel'>
                <Carousel.Item interval={1500}>
                    <div className='key-message-container'>
                        <img
                            className="d-block"
                            src={person1}
                            alt="First slide"
                        />

                        <div className='carousel-text justify-text'>
                            <h5>NSRIC International School in Toronto (NIST) is a part of the K12 Unit of NSRIC Inc., a world wide online Canadian institution based in London, Ontario, Canada. It offers seamless education from kindergarten to grade 12.</h5>  <br /><br />
                            <p>
                                <b>Prof. Mohammed Nurul Alam</b> <br />
                            
                                <small>
                                    Vice President - Online Education Division, NSRIC Inc.
                                </small>
                            </p>
                            
                        </div>
                    </div>
                </Carousel.Item>

                
                <Carousel.Item interval={1500}>
                    <div className='d-flex key-message-container'>
                        <img
                            className="d-block"
                            src={person2}
                            alt="First slide"
                        />

                        <div className='carousel-text justify-text'>
                            <h5>NSRIC International School in Toronto (NIST) is a part of the K12 Unit of NSRIC Inc., a world wide online Canadian institution based in London, Ontario, Canada. It offers seamless education from kindergarten to grade 12.</h5>  <br /><br />
                            <p>
                                <b>Prof. Mohammed Nurul Alam</b> <br />

                                <small>
                                    Vice President - Online Education Division, NSRIC Inc.
                                </small>
                            </p>

                        </div>
                    </div>
                </Carousel.Item>

                
                <Carousel.Item interval={1500}>
                    <div className='d-flex key-message-container'>
                        
                            <img
                                className="d-block"
                                src={person3}
                                alt="First slide"
                            />
                        

                        <div className='carousel-text justify-text'>
                            <h5>NSRIC International School in Toronto (NIST) is a part of the K12 Unit of NSRIC Inc., a world wide online Canadian institution based in London, Ontario, Canada. It offers seamless education from kindergarten to grade 12.</h5>  <br /><br />
                            <p>
                                <b>Prof. Mohammed Nurul Alam</b> <br />

                                <small>
                                    Vice President - Online Education Division, NSRIC Inc.
                                </small>
                            </p>

                        </div>
                    </div>
                </Carousel.Item>

                
            </Carousel>
        </div>
    );
};

export default KeyMessageCarousel;