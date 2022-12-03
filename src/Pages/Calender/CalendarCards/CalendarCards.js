import React from 'react';
import ImgsViewer from "react-images-viewer";

const CalendarCards = ({data}) => {

    const {title, img} = data;
    return (
        <div>
            <h4 className='py-4 green-color-link text-center'>{title}</h4>
            {/* <img className='img-fluid pb-3' src={img} alt="" /> */}

            <ImgsViewer
                imgs={
                     img
                }
                // currImg={this.state.currImg}
                // isOpen={this.state.viewerIsOpen}
                // onClickPrev={this.gotoPrevious}
                // onClickNext={this.gotoNext}
                // onClose={this.closeViewer}
            />
        </div>
    );
};

export default CalendarCards;