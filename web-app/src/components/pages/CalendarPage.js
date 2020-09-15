import React from 'react';
import {BasicCalendar} from '../molecules/Calendar';
import eventData from '../../demo/eventData';

const CalendarPage = () => {
  return(
    <div>
      <BasicCalendar events={eventData}/>
    </div>
  )
};

export default CalendarPage;
