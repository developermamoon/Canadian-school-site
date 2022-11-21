import React from 'react';
import { Link } from 'react-router-dom';
import './LearnMoreCard.css'

const LearnMoreCard = () => {
    return (
        <div className='row gap-3 gap-md-1 px-4
        justify-content-center'>
            <Link className='col'>
                <div className='learn-card learn-card1'>
                    <div className="overlay"></div>
                    <div className="overlay-text">HOMESCHOOL</div>
                </div>
            </Link>

            <Link className='col'>
                <div className='learn-card learn-card2'>
                    <div className="overlay"></div>
                    <div className="overlay-text">KINDERGARTEN</div>
                </div>
            </Link>


            <Link className='col'>
                <div className='learn-card learn-card3'>
                    <div className="overlay"></div>
                    <div className="overlay-text">ELEMENTARY SCHOOL</div>
                </div>
            </Link>
           
            <Link className='col'>
                <div className='learn-card learn-card4'>
                    <div className="overlay"></div>
                    <div className="overlay-text">MIDDLE SCHOOL</div>
                </div>
            </Link>


            <Link className='col'>
                <div className='learn-card learn-card5'>
                    <div className="overlay"></div>
                    <div className="overlay-text">HIGH SCHOOL</div>
                </div>
            </Link>
        </div>
    );
};

export default LearnMoreCard;