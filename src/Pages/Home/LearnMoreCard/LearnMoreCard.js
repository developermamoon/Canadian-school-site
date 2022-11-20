import React from 'react';
import { Link } from 'react-router-dom';
import './LearnMoreCard.css'

const LearnMoreCard = () => {
    return (
        <div className='row gap-3 gap-md-1 px-4
        justify-content-center'>
            <Link className='col'>
                <div className='learn-card'>
                    HOMESCHOOL
                </div>
            </Link>

            <Link className='col'>
                <div className='learn-card'>
                    KINDERGARTEN
                </div>
            </Link>


            <Link className='col'>
                <div className='learn-card'>
                    ELEMENTARY SCHOOL
                </div>
            </Link>
           
            <Link className='col'>
                <div className='learn-card'>
                    MIDDLE SCHOOL
                </div>
            </Link>


            <Link className='col'>
                <div className='learn-card'>
                    HIGH SCHOOL
                </div>
            </Link>
        </div>
    );
};

export default LearnMoreCard;