import React from 'react';
import cal1 from '../../Images/CalendarPics/g9-12Calender.png'
import cal2 from '../../Images/CalendarPics/kg8calender.png'
import cal3 from '../../Images/CalendarPics/kg12calender.png'
import cal4 from '../../Images/CalendarPics/cal6.png'
import cal5 from '../../Images/CalendarPics/cal6.png'
import CalendarCards from './CalendarCards/CalendarCards';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './calender.css'

const Calender = () => {

    const calendarData = [
        {
            id: 1,
            title: "Secondary School (Grade 9-12 ): Term I and Term II",
            img: cal1
        },
        {
            id: 2,
            title: "Elementary School (Kindergarten – Grade 8 ): Term I and Term II",
            img: cal2
        },
        {
            id: 3,
            title: "Secondary and Elementary School (Kindergarten – Grade 12): Summer Term",
            img: cal3
        },
    ]
    return (
        <div className="container">
            <div className='row'>

                <div className="col-md-3">
                    <div className='p-4' style={{ backgroundColor: '#FFECEC' }}>
                            <PhotoProvider>
                                <PhotoView src={cal4}>
                                    <h6 className='py-3 blueColor fw-bold cursorPointer hoverBorder'>School Year 2022-2023 &gt; </h6>
                                </PhotoView>
                            </PhotoProvider>

                        <PhotoProvider>
                            <PhotoView src={cal5}>
                                <h6 className='py-3 blueColor fw-bold cursorPointer hoverBorder'>School Year 2021-2022 </h6>
                            </PhotoView>
                        </PhotoProvider>
                    </div>

                    </div>


                <div className='col-md-9'>
                    <h4 className='pt-2 blueColor fw-bold text-center'>NIST School Year Calendar 2022-2023​</h4>

                    {calendarData.map(data => <CalendarCards data={data} key={data.id}></CalendarCards>)}
                </div>

                </div>
            </div>
    );
};

export default Calender;