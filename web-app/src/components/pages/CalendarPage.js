import React from 'react';
import {BasicCalendar} from '../molecules/Calendar';
import {events} from '../../demo/eventData';

const CalendarPage = () => {
  return(
    <div>
      <BasicCalendar events={events}/>
    </div>
  )
};

export default CalendarPage;
