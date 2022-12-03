import React from 'react';
import cal1 from '../../Images/CalendarPics/g9-12Calender.png'
import cal2 from '../../Images/CalendarPics/kg8calender.png'
import cal3 from '../../Images/CalendarPics/kg12calender.png'
import CalendarCards from './CalendarCards/CalendarCards';

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

                <div className="col-3">
                    <h5 className='py-3 blueColor fw-bold'>School Year 2022-2023 &gt; </h5>
                    <h5 className='py-3 blueColor fw-bold'>School Year 2021-2022 </h5>
                </div>


                <div className='col-9'>
                    <h4 className='pt-2 blueColor fw-bold text-center'>NIST School Year Calendar 2022-2023​</h4>

                    {calendarData.map(data => <CalendarCards data={data} key={data.id}></CalendarCards>)}
                </div>

            </div>
        </div>
    );
};

export default Calender;