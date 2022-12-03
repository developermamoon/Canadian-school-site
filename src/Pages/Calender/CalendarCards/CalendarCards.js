import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const CalendarCards = ({data}) => {

    const {title, img} = data;
    return (
        <div>
            <PhotoProvider>
                <PhotoView src={img}>
                    <h4 className='py-4 green-color-link text-center cursorPointer'>{title}</h4>
                </PhotoView>
            </PhotoProvider>

            <PhotoProvider>
                <PhotoView src={img}>
                    <img className='pb-4 img-fluid cursorPointer' src={img} alt="" />
                </PhotoView>
            </PhotoProvider>

        </div>
    );
};

export default CalendarCards;