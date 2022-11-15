import React from 'react';
import './LearnMoreCard.css'

const LearnMoreCard = () => {
    return (
        <div className='row row-cols-1 row-cols-md-3 row-cols-lg-5 gap-3 gap-md-3 px-2
        justify-content-center'>
            <div className='learn-card'>
                HOMESCHOOL
            </div>
            <div className='learn-card'>
                KINDERGARTEN
            </div>
            <div className='learn-card'>
                ELEMENTARY SCHOOL
            </div>
            <div className='learn-card'>
                MIDDLE SCHOOL
            </div>
            <div className='learn-card'>
                HIGH SCHOOL
            </div>
        </div>
    );
};

export default LearnMoreCard;