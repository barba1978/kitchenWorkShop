import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const DatePickerComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    
    return (
        <div className='Datepicker-container'>
            <DatePicker
                selected={startDate}
                
                onChange={date => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                maxDate={new Date().setMonth(new Date().getMonth() + 6)}
                showDisabledMonthNavigation
                allowSameDay
                
                
            />
        </div>
    );
};

export default DatePickerComponent;
